import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, BoxProps, FlexProps } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import PriceCard from '@components/common/Card/PriceCard';
import PrimaryButton from '@components/common/New/PrimaryButton';
import Pagination from '@components/common/New/Pagination';
import DateText from '@components/common/New/DateText';
import { useGetOrderListQuery, useGetOrderStatusQuery } from '@apis/order/OrderApi.query';
import { OrderStatusType } from '@apis/order/OrderApi.type';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes';
import orderApi from '@apis/order/OrderApi';

interface MypageOrderhistoryPageProps extends MypageOrderhistoryPageDataProps {
  orderStatusList: OrderStatusType[],
}
interface MypageOrderhistoryPageDataProps extends ChakraProps { 


}
function MypageOrderhistoryPageData({ ...basisProps }: MypageOrderhistoryPageDataProps) {
  const { data: orderStatusList, isError, isLoading } = useGetOrderStatusQuery({ variables: { user_id: 0 } })
  if (isError) return <Text>주문상태 데이터 불러오기 에러</Text>
  if (isLoading || !orderStatusList) return <Text>로딩중</Text>
  console.log("orderStatusList:", orderStatusList)
  return (
    <>
      <Flex pt={LAYOUT.HEADER.HEIGHT} pb="80px" 
      flexDir="column" bgColor="white" w="375px" 
      {...basisProps}>
        <MypageOrderhistoryPage orderStatusList={orderStatusList.results} />
        <Divider />
        <Pagination mt="50px" />
      </Flex>
    </>
  )
}
function MypageOrderhistoryPage({
  orderStatusList,
  ...basisProps
}: MypageOrderhistoryPageProps) {

  // 주문상태를 날짜별로 정렬합니다. 내림차순으로 정렬
  orderStatusList.sort((now, next) => now.created < next.created ? 1 : -1)
  const route = useRouter()
  const handleWriteReview = (orderStatus: OrderStatusType) => {
    route.push({pathname: ROUTES.MYPAGE.WRITE_REVIEW, query:orderStatus})
  }
  return (
    <>
      <Text ml="16px" mt="50px" textStyle="titleLarge" textColor="black">주문내역</Text>
      {orderStatusList && orderStatusList.map((orderStatus) => {
        // const orderData = await orderApi.getOrderById({uuid:orderStatus.orderId})
        const shippingStatus = "PAID"
        return <>
          <DateText mt="80px" ml="16px" date={orderStatus.created} />
          <PriceCard px="16px" ispaymentcomplete={true} productid={orderStatus.productId}
            count={orderStatus.count} status={shippingStatus} />
          {shippingStatus === "PAID" ?
          
          <PrimaryButton
            mt="10px" mb="20px" mr="16px"
            alignSelf="end" w="140px" h="40px"
            onClick={() => handleWriteReview(orderStatus)}
            btntype={'Line'} btnstate={'Primary'} btnshape={'Rectangle'}>
            리뷰작성
          </PrimaryButton>
          :
          <PrimaryButton
            mt="10px" mb="20px" mr="16px"
            alignSelf="end" w="140px" h="40px"
            btntype={'Solid'} btnstate={'Primary'} btnshape={'Rectangle'}>
            주문취소
          </PrimaryButton>          
          }
        </>
      })}
    </>
  );
}

const Divider = ({ ...props }: BoxProps) => {
  return <Box border="1px solid" borderColor="gray.100" {...props} />
}
export default MypageOrderhistoryPageData;
