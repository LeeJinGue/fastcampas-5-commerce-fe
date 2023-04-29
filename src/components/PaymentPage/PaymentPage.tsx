import React, { useState } from 'react';
import { ChakraProps } from '@chakra-ui/react';
import useOrderForm from './_hooks/useOrderForm';
import PaymentPageView from './PaymentPage.view';
import { usePosthOrderStatus, usePostOrderMutation } from '@apis/order/OrderApi.mutation'
import { OrderPostParamType } from '@apis/order/OrderApi.type';
import useAppStore from '@features/useAppStore';
import { CONFIG } from '@config';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { TOSS_PAYMENT_CALL_BACK_URL } from '@constants/toss';
import { useDeleteCartItemByCartItemIdMutation } from '@apis/cart/CartApi.mutation';
import { usePrevDupClick } from 'hooks/usePrevDupClick';
const DEFAULT_ORDER_METHOD = "CARD"
const DEFAULT_TOSS_PAYMENT_METHOD = "카드"
interface PaymentPageProps extends ChakraProps { }
function PaymentPage({ ...basisProps }: PaymentPageProps) {
  const orderData = useAppStore(state => state.ORDER_ITEM)
  const orderDataList = orderData.orderItemList
  const [isagree, setisagree] = useState(false)
  const formData = useOrderForm();
  const { handleSubmit } = formData;
  const { data: postOrderData, isSuccess: postOrderSuccess, mutateAsync: orderPostMutate } = usePostOrderMutation()
  const { data: postOrderStatusData, isSuccess: postOrderStatusSuccess, mutateAsync: orderStatusPostMutate } = usePosthOrderStatus()
  const { mutateAsync: deleteCartItemMutation } = useDeleteCartItemByCartItemIdMutation()
  const onSubmit = handleSubmit(async ({ order, delivery, deliveryrequest }) => {
    // 주문결제 성공!
    const orderParam: OrderPostParamType = {
      method: DEFAULT_ORDER_METHOD,
      userName: order.name,
      userPhone: order.phone.replaceAll("-", ""),
      userAddr: order.address.base,
      userAddrPost: order.address.post,
      userAddrDetail: order.address.detail,
      shipName: delivery.name,
      shipPhone: delivery.phone.replaceAll("-", ""),
      shipAddrPost: delivery.address.post,
      shipAddrDetail: delivery.address.detail,
      shipAddr: delivery.address.base,
      orderMessage: deliveryrequest,
      price: orderData.totalCost,
      shippingPrice: orderData.totalDeliveryCost,
      amount: orderData.totalDeliveryCost + orderData.totalCost,
    }
    const orderPostReturn = await orderPostMutate(orderParam)
    if (orderPostReturn) {
      const { id: orderId } = orderPostReturn
      orderDataList.forEach(async (postedOrderData) => {
        // 주문 상품 개수만큼 POST orderStatus 합니다.
        const { productId, cartItemId, count } = postedOrderData
        const orderStatusPostReturn = await orderStatusPostMutate({ orderId, productId, count, })
        if (cartItemId) {
          const deleteCartItemReturn = await deleteCartItemMutation({ cartItemId })
        }
      })
      if (!CONFIG.TOSS_CLIENT_KEY) alert("토스 결제 에러입니다.")
      const tossPaymentReturn = await loadTossPayments(CONFIG.TOSS_CLIENT_KEY!)
      const howManyOrderItem = orderData.orderItemList.length === 1 ? "" : `외 ${orderData.orderItemList.length - 1}건`
      const orderName = `${orderData.orderItemList[0].name + howManyOrderItem}`
      const customerName = order.name
      tossPaymentReturn.requestPayment(DEFAULT_TOSS_PAYMENT_METHOD, {
        amount: orderData.totalDeliveryCost + orderData.totalCost,
        successUrl: TOSS_PAYMENT_CALL_BACK_URL,
        failUrl: TOSS_PAYMENT_CALL_BACK_URL,
        // windowTarget: "self",
        orderId, orderName, customerName,
      })
    }
    // route.replace('/payment/success')
  });
  return (
    <PaymentPageView
      isagree={isagree} setisagree={setisagree}
      orderData={orderData} formData={formData} onSubmit={onSubmit} {...basisProps} />
  );
}

export default PaymentPage;
