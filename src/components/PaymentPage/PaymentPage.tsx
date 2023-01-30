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
const defaultOrderMethod = "CARD"
const defaultTossPaymentMethod = "카드"
interface PaymentPageProps extends ChakraProps { }
function PaymentPage({ ...basisProps }: PaymentPageProps) {
  const orderData = useAppStore(state => state.ORDER_ITEM)
  const orderDataList = orderData.orderItemList
  const [isagree, setisagree] = useState(false)
  const formData = useOrderForm();
  const { handleSubmit } = formData;
  const { data:postOrderData, isSuccess:postOrderSuccess ,mutateAsync: orderPostMutate } = usePostOrderMutation()
  const { data:postOrderStatusData, isSuccess:postOrderStatusSuccess ,mutateAsync: orderStatusPostMutate } = usePosthOrderStatus()
  const onSubmit = handleSubmit(({ order, delivery, deliveryrequest }) => {
    // 주문결제 성공!
    console.log(
      `# submitted 주문자: 이름-${order.name}, 핸드폰 번호-${order.phone}, 주소-${order.address.base}, 상세주소-${order.address.detail}, 우편번호-${order.address.post} `,
    );
    console.log(
      `# submitted 배송지: 이름-${delivery.name}, 핸드폰 번호-${delivery.phone}, 주소-${delivery.address.base}, 상세주소-${delivery.address.detail}, 우편번호-${delivery.address.post} `,
    );
    console.log(
      `# submitted 배송요청사항: ${deliveryrequest}`,
    );
    const orderParam: OrderPostParamType = {
      method: defaultOrderMethod,
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
      amount: orderData.totalDeliveryCost+orderData.totalCost,
    }
    orderPostMutate(orderParam).then(async(res) =>{
      console.log("# order response:", res)
      const orderId = res.id
      orderDataList.forEach((postedOrderData) => {
        // 주문 상품 개수만큼 POST orderStatus 합니다.
        const productId = postedOrderData.productId
        const count = postedOrderData.count
        orderStatusPostMutate({orderId, productId, count,}).then(statusRes => {
          console.log("# statusRes:",statusRes)
        }).catch(orderStatusErr => {
          console.log("# orderStatusError:",orderStatusErr)
        })
      })
      if(!CONFIG.TOSS_CLIENT_KEY) alert("토스 결제 에러입니다.")
      loadTossPayments(CONFIG.TOSS_CLIENT_KEY!)
      .then(tossPayments => {
        console.log("# tossPayment 테스트:",tossPayments)
        const orderName = `${orderData.orderItemList[0].name}외 ${orderData.orderItemList.length-1}건`
        const customerName = order.name
        tossPayments.requestPayment(defaultTossPaymentMethod, {
          amount: orderData.totalDeliveryCost+orderData.totalCost,
          successUrl: TOSS_PAYMENT_CALL_BACK_URL,
          failUrl: TOSS_PAYMENT_CALL_BACK_URL,
          // windowTarget: "self",
          orderId,orderName,customerName,
        })
      })
      .catch(err => console.log("# tosPayment 에러:",err))
      
    }).catch((errror) => {
      console.log("# order error:", errror)
    })

    // route.replace('/payment/success')
  });
  
  return (
    <PaymentPageView 
    isagree={isagree} setisagree={setisagree}
    orderData={orderData} formData={formData} onSubmit={onSubmit} {...basisProps} />
  );
}

export default PaymentPage;
