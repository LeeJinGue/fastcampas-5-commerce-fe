import React from 'react';
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
import { tossInstance } from '@apis/_toss/instance';
import { TOSS_PAYMENT_SUCCESS_URL } from '@constants/string';
import { CONFIG } from '@config';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { ROUTES } from '@constants/routes';

interface PaymentPageProps extends ChakraProps { }
const CLIENT_KEY = "test_ck_XLkKEypNArW7nYnpZAzrlmeaxYG5"
function PaymentPage({ ...basisProps }: PaymentPageProps) {
  const orderData = useAppStore(state => state.ORDER_ITEM)
  const orderDataList = orderData.orderItemList
  
  const formData = useOrderForm();
  const route = useRouter()
  const { handleSubmit } = formData;
  const { data:postOrderData, isSuccess:postOrderSuccess ,mutateAsync: orderPostMutate } = usePostOrderMutation()
  const { data:postOrderStatusData, isSuccess:postOrderStatusSuccess ,mutateAsync: orderStatusPostMutate } = usePosthOrderStatus()
  const onSubmit = handleSubmit(({ order, delivery, deliveryrequest }) => {
    console.log("외않되지?")
    // 주문결제 성공!
    console.log(
      `submitted order: ${order.name}, ${order.phone} , ${order.address.detail}, ${order.address.zipcode}`,
    );
    console.log(
      `submitted delivery: ${delivery.name}, ${delivery.phone} , ${delivery.address.detail}, ${delivery.address.zipcode}`,
    );
    console.log(
      `submitted deliver request: ${deliveryrequest}`,
    );
    const orderParam: OrderPostParamType = {
      // userId: 0,
      price: orderData.totalCost,
      // paymentKey: '',
      method: "CARD",
      userName: order.name,
      userPhone: order.phone.replaceAll("-", ""),
      userAddrPost: order.address.zipcode,
      userAddrDetail: order.address.detail,
      shipName: delivery.name,
      shipPhone: delivery.phone.replaceAll("-", ""),
      shipAddrPost: delivery.address.zipcode,
      shipAddrDetail: delivery.address.detail,
      orderMessage: deliveryrequest
    }
    orderPostMutate(orderParam).then(async(res) =>{
      console.log("# order response:", res)
      // orderStatus를 post 합니다.
      const orderId = res.id
      orderStatusPostMutate({orderId, productId:orderDataList[0].productId, count:orderDataList[0].count,}).then(statusRes => {
        console.log("# statusRes:",statusRes)
        console.log("# client key:",CLIENT_KEY)
        
        loadTossPayments(CLIENT_KEY)
        .then(tossPayments => {
          console.log("# tossPayment 테스트:",tossPayments)
          tossPayments.requestPayment('카드', {
            amount: orderData.totalCost,
            orderId,
            orderName: '토스 티셔츠 외 2건',
            customerName: '인코스런커머스트랙',
            successUrl: `http://localhost:3000${ROUTES.PAYMENT.SUCCESS}`,
            failUrl: `http://localhost:3000${ROUTES.PAYMENT.SUCCESS}`,
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
  // const {data, isError, isLoading} = useGetCartQuery({variables:{
  //   user_id:0
  // }})
  // if(isLoading) return <LoadingPage>로딩중</LoadingPage>
  // if(isError) return <Text>상품 정보 갖고오기 에러발생!</Text>
  // const carts = data[0]!
  return (
    <PaymentPageView orderData={orderData} formData={formData} onSubmit={onSubmit} />
  );
}

export default PaymentPage;
