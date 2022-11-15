import React, { useState } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import { useRouter } from 'next/router';
import useOrderForm from './_hooks/useOrderForm';
import PaymentPageView from './PaymentPage.view';
import { usePosthOrderStatus, usePostOrderMutation } from '@apis/order/OrderApi.mutation'
import { OrderPostParamType } from '@apis/order/OrderApi.type';
import { useGetCartQuery } from '@apis/cart/CartApi.query';
import LoadingPage from '@components/common/New/LoadingPage';
import useAppStore from '@features/useAppStore';
import { TOSS_PAYMENT_CALL_BACK_URL } from '@constants/social';
import { CONFIG } from '@config';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { ROUTES } from '@constants/routes';

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
      // userId: 0,
      // paymentKey: '',
      method: "CARD",
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
      // orderStatus를 post 합니다.
      const orderId = res.id
      orderStatusPostMutate({orderId, productId:orderDataList[0].productId, count:orderDataList[0].count,}).then(statusRes => {
        console.log("# statusRes:",statusRes)
        loadTossPayments(CONFIG.TOSS_CLIENT_KEY!)
        .then(tossPayments => {
          console.log("# tossPayment 테스트:",tossPayments)
          tossPayments.requestPayment('카드', {
            amount: orderData.totalDeliveryCost+orderData.totalCost,
            orderId,
            orderName: '토스 티셔츠 외 2건',
            customerName: '인코스런커머스',
            successUrl: TOSS_PAYMENT_CALL_BACK_URL,
            failUrl: TOSS_PAYMENT_CALL_BACK_URL,
            // windowTarget: "self",
          })
        })
        .catch(err => console.log("# tosPayment 에러:",err))

      }).catch(orderStatusErr => {
        console.log("# orderStatusError:",orderStatusErr)
      })
      
    }).catch((errror) => {
      console.log("# order error:", errror)
    })

    // route.replace('/payment/success')
  });
  
  return (
    <PaymentPageView 
    isagree={isagree} setisagree={setisagree}
    orderData={orderData} formData={formData} onSubmit={onSubmit} />
  );
}

export default PaymentPage;
