import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import orderApi from '@apis/order/OrderApi';
import { usePostTossMutation } from '@apis/_toss/TossApi.mutation';
import { ROUTES } from '@constants/routes';
import LoadingPage from '@components/common/New/LoadingPage';

interface PaymentCallbackPageProps extends ChakraProps {}

function PaymentCallbackPage({ ...basisProps }: PaymentCallbackPageProps) {
  const route = useRouter()
  const { mutateAsync: postTossMutation } = usePostTossMutation()

  React.useEffect(() => {
    if (!route.isReady) return
    const { orderId, paymentKey, amount } = route.query
    if (typeof orderId === "string" && typeof paymentKey === "string" && typeof amount === "string") {
      postTossMutation({ orderId, paymentKey, amount })
      .then((res) => {
        const resOrderId = res.orderId
        const paymentTime = res.approvedAt
        route.replace({pathname: ROUTES.PAYMENT.SUCCESS,
          query: {resOrderId, paymentTime}})
      }).catch((err) => console.error("# Post Toss Error:", err))
    }
  }, [route.isReady])
  return (
    <LoadingPage />
  );
}

export default PaymentCallbackPage;
