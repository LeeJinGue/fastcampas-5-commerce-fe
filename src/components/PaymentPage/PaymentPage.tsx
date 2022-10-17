import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import { useRouter } from 'next/router';
import useOrderForm from './_hooks/useOrderForm';
import PaymentPageView from './PaymentPage.view';
import {usePostOrderMutation} from '@apis/order/OrderApi.mutation'
import { OrderPostParamType } from '@apis/order/OrderApi.type';

interface PaymentPageProps extends ChakraProps {}

function PaymentPage({ ...basisProps }: PaymentPageProps) {
  const formData = useOrderForm();
  const route = useRouter()
  const { handleSubmit } = formData;
  const {mutateAsync: orderPostMutate} = usePostOrderMutation()
  const onSubmit = handleSubmit(({ order,delivery,deliveryrequest}) => {
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
    const orderData:OrderPostParamType = {
      userId: 0,
      price: 0,
      paymentKey: '',
      method: "CARD",
      userName: order.name,
      userPhone: order.phone,
      userAddr: order.address.zipcode+order.address.detail,
      shipName: delivery.name,
      shipPhone: delivery.phone,
      shipAddr: delivery.address.zipcode+delivery.address.detail,
      orderMessage: deliveryrequest
    }

    orderPostMutate(orderData).then((res) => {
      console.log("# order response:",res)
    }).catch((errror) => {
      console.log("# order error:",errror)
    })
    route.replace('/payment/success')
  });
  return (
    <PaymentPageView formData={formData} onSubmit={onSubmit}/>
    
  );
}

export default PaymentPage;
