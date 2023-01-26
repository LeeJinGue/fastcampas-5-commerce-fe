import React, { useEffect } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, BoxProps, FlexProps, useToast, useDisclosure } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import PriceCard from '@components/common/Card/PriceCard';
import PrimaryButton from '@components/common/New/PrimaryButton';
import Pagination from '@components/common/New/Pagination';
import DateText from '@components/common/New/DateText';
import { useGetOrderListQuery, useGetOrderStatusQuery, useGetOrderStatusWithOrderQuery } from '@apis/order/OrderApi.query';
import { OrderDTOType, OrderGetByIdReturnType, OrderStatusType } from '@apis/order/OrderApi.type';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes';
import orderApi from '@apis/order/OrderApi';
import { isSameDay } from '@utils/format';
import { check_order_cancel_popup_string } from '@constants/string';
import Popup from '@components/common/New/Popup';

interface MypageOrderhistoryPageProps extends MypageOrderhistoryPageDataProps {
  orderStatusList: OrderStatusType[],
  orderDataList: OrderGetByIdReturnType[],
}
interface MypageOrderhistoryPageDataProps extends ChakraProps {
}
const { bodyText, okText, cancelText } = check_order_cancel_popup_string
function MypageOrderhistoryPageData({ ...basisProps }: MypageOrderhistoryPageDataProps) {
  const [orderPage, setOrderPage] = React.useState(1)
  const { data: orderStatusList, isError: isOrderStatusError, isLoading: isOrderStatusLoading } = useGetOrderStatusWithOrderQuery({ variables: { page: orderPage } })
  // const { data: allOrderDataList, isError: isOrderDataError, isLoading: isOrderDataLoading } = useGetOrderListQuery({variables: {offset:orderPage}})
  if (isOrderStatusError) return <Text>데이터 불러오기 에러</Text>
  if (isOrderStatusLoading) return <Text>로딩중</Text>
  if (!orderStatusList) return <Text>주문상태 데이터 불러오기 에러2</Text>
  const lastPage = orderStatusList.count / 5
  return (
    <>
      <Flex pt={LAYOUT.HEADER.HEIGHT} pb="80px"
        flexDir="column" bgColor="white" w="375px"
        {...basisProps}>
        <MypageOrderhistoryPage orderStatusList={orderStatusList.results} orderDataList={orderStatusList.orderResults} />
        <Divider />
        <Pagination mt="50px" page={orderPage} setPage={setOrderPage} lastPage={orderStatusList.count} />
      </Flex>
    </>
  )
}
function MypageOrderhistoryPage({
  orderStatusList,
  orderDataList,
  ...basisProps
}: MypageOrderhistoryPageProps) {

  // 주문상태를 날짜별로 정렬합니다. 내림차순으로 정렬
  // orderStatusList.sort((now, next) => now.created < next.created ? 1 : -1)
  const route = useRouter()
  const { isOpen: isPopupOpen, onClose: popupClose, onOpen: popupOpen } = useDisclosure()
  const handleWriteReview = (orderStatus: OrderStatusType) => {
    route.push({ pathname: ROUTES.MYPAGE.WRITE_REVIEW, query: orderStatus })
  }
  const toast = useToast()
  const handleCancelOrder = () => {
    toast({
      title: "주문취소 기능이 아직 구현중입니다.",
      status: "warning",
      isClosable: true,
    })
    popupClose()
  }

  return (
    <>
      <Text ml="16px" mt="50px" textStyle="titleLarge" textColor="black">주문내역</Text>
      {orderStatusList && orderStatusList.map((orderStatus, ordeStatusIndex, list) => {
        const orderData = orderDataList[ordeStatusIndex]
        let shippingStatus = ""
        if (orderData === undefined) shippingStatus = "배송상태 없음"
        else shippingStatus = orderData.shippingStatus
        let showDateText
        if (ordeStatusIndex === 0) {
          showDateText = true
        } else {
          const nowCreated = orderStatus.created
          const beforeCreated = list[ordeStatusIndex - 1].created
          showDateText = !isSameDay(nowCreated, beforeCreated)
        }
        return <Flex flexDir="column" key={orderStatus.id}>
          {showDateText && <DateText mt="80px" ml="16px" date={orderStatus.created} />}
          <PriceCard px="16px" ispaymentcomplete={true} productid={orderStatus.productId}
            count={orderStatus.count} status={shippingStatus} />
          {shippingStatus && shippingStatus === "PAID" ?
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
              btntype={'Solid'} btnstate={'Primary'} btnshape={'Rectangle'} onClick={popupOpen}>
              주문취소
            </PrimaryButton>
          }
        </Flex>
      })}
      <Popup isOpen={isPopupOpen} onClose={popupClose} bodyMsg={bodyText}
        cancelMsg={cancelText} cancelOnclick={popupClose}
        okMsg={okText} okOnclick={handleCancelOrder}
        children={undefined} />
    </>
  );
}

const Divider = ({ ...props }: BoxProps) => {
  return <Box border="1px solid" borderColor="gray.100" {...props} />
}
export default MypageOrderhistoryPageData;
