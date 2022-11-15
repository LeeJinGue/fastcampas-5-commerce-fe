import React from 'react';
import { Box, ChakraProps, Flex, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import PriceCard from '@components/common/Card/PriceCard';
import DeliveryInfoText from '@components/PaymentPage/_fragment/DeliveryInfoText';
import PrimaryButton from '@components/common/New/PrimaryButton';
import { useRouter } from 'next/router';
import { useGetOrderByIdQuery, useGetOrderStatusByIdQuery } from '@apis/order/OrderApi.query';
import { OrderDTOType, OrderStatusType } from '@apis/order/OrderApi.type';
import { formatCreatedTimeToDate } from '@utils/format';
interface PaymentSuccessPageProps extends PaymentSuccessPageDataProps {
  orderData: OrderDTOType,
  paymentTime: string,
  orderStatusData: OrderStatusType,
}
interface PaymentSuccessPageDataProps extends ChakraProps {
  resOrderId: string, 
  paymentTime: string,
}

function PaymentSuccessPageData({ ...basisProps }: PaymentSuccessPageDataProps) {
  const route = useRouter()
  const {resOrderId, paymentTime} = basisProps
  const {data:orderData, isLoading:orderLoading, isError:orderError} = useGetOrderByIdQuery({variables: {uuid: resOrderId}})
  const {data:orderStatusData, isLoading:orderStatusLoading, isError:orderStatusError} = useGetOrderStatusByIdQuery({variables: {orderId:resOrderId}})

  if (orderLoading || orderStatusLoading) return <Text>주문정보 로딩중</Text>
  if (orderError || orderStatusError) return <Text>주문정보 불러오기 에러</Text>
  if (orderData === undefined || orderStatusData === undefined) return <Text>주문정보 불러오기 에러2</Text>
  return <PaymentSuccessPage  {...basisProps} paymentTime={paymentTime} orderData={orderData} orderStatusData={orderStatusData} />
}

function PaymentSuccessPage({  ...basisProps }: PaymentSuccessPageProps) {
  const {paymentTime, orderData, orderStatusData} = basisProps
  const { shippingStatus,created, shipName, shipPhone, shipAddr, shipAddrDetail, shipAddrPost, orderMessage, price, shippingPrice, amount, method } = orderData
  const {productId, count} = orderStatusData
  return (
    <Flex {...basisProps} pt={LAYOUT.HEADER.HEIGHT} pb="30px"
      flexDir="column" bgColor="white" w="375px">
      <Text mx="16px" mt="50px" textStyle="titleLarge">{"결제내역"}</Text>
      <Box mt="80px" w="375px" border="1px solid" borderColor="gray.100" />
      <Flex   // 결제 시간
        px="16px" h="55px" justifyContent="start" alignItems="center">
        <Text textStyle="titleSmall" textColor="black">{formatCreatedTimeToDate(created)}</Text>
      </Flex>
      <PriceCard px="16px" ispaymentcomplete={true} productid={productId} count={count} status={shippingStatus} />
      <Box bgColor="gray.100" h="10px" />
      <Flex   // 배송지 정보
        h="55px" alignItems="center" px="16px">
        <Text textStyle="title" textColor="black">{"배송지 정보"}</Text>
      </Flex>
      <Box w="375px" border="1px solid" borderColor="gray.100" />
      <Flex   // 배송지 정보 텍스트
        flexDir="column" pt="15px" pb="24px" px="16px">
        <DeliveryInfoText title={"이름"} content={shipName} />
        <DeliveryInfoText title={"핸드폰번호"} content={shipPhone} />
        <DeliveryInfoText title={"우편번호"} content={shipAddrPost} />
        <DeliveryInfoText title={"주소"} content={shipAddr} />
        <DeliveryInfoText title={""} content={shipAddrDetail} />
        <DeliveryInfoText title={"배송요청사항"} content={orderMessage} />
      </Flex>
      <Box bgColor="gray.100" h="10px" />
      <Flex   // 결제정보
        h="55px" alignItems="center" px="16px">
        <Text textStyle="title" textColor="black">{"결제정보"}</Text>
      </Flex>
      <Box w="375px" border="1px solid" borderColor="gray.100" />
      <Flex   // 결제정보 텍스트
        px="16px" flexDir="column">
        <Flex justifyContent="space-between" mt="15px"
          textStyle="text" textColor="gray.700">
          <Text>{"총 상품금액"}</Text>
          <Text>{price}{" 원"}</Text>
        </Flex>
        <Flex justifyContent="space-between" mt="10px"
          textStyle="text" textColor="gray.700">
          <Text>{"총 배송비"}</Text>
          <Text>{shippingPrice}{" 원"}</Text>
        </Flex>
        <Flex justifyContent="space-between" mt="10px"
          textStyle="text" textColor="gray.700">
          <Text>{"결제수단"}</Text>
          <Text textStyle="title">{`${method} 결제`}</Text>
        </Flex>
      </Flex>
      <Box mt="30px" w="375px" border="1px solid" borderColor="gray.100" />
      <Flex   // 결제금액
        justifyContent="space-between" mt="15px"
        textStyle="text" px="16px">
        <Text textColor="black">{"결제금액"}</Text>
        <Text textColor="primary.500" textStyle="title">{amount}{" 원"}</Text>
      </Flex>
      <Flex   // 이동 버튼들
        justifyContent="space-between" mt="50px" px="16px">
        <PrimaryButton w="165px" h="50px" btntype={'Line'} btnstate={'Primary'} btnshape={'Round'}>{"메인화면 이동"}</PrimaryButton>
        <PrimaryButton w="165px" h="50px" btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'}>{"주문내역 이동"}</PrimaryButton>
      </Flex>
    </Flex>
  );
}

export default PaymentSuccessPageData;

// export const getServerSideProps: GetServerSideProps = async(context) => {
//   const {orderId} = context.query
//   const {mutateAsync: postTossMutation} = usePostTossMutation()
//   return {
//     props: {},
//   }
// }