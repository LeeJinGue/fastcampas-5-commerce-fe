import React, { useState } from 'react';
import { Box, ChakraProps, Flex, Text, BoxProps, useDisclosure } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import PriceCard from '@components/common/Card/PriceCard';
import PrimaryButton from '@components/common/New/PrimaryButton';
import Pagination from '@components/common/New/Pagination';
import DateText from '@components/common/New/DateText';
import { useGetOrderStatusWithOrderQuery } from '@apis/order/OrderApi.query';
import { OrderGetByIdReturnType, OrderGetStatusWithOrderReturnType, OrderStatusType } from '@apis/order/OrderApi.type';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes';
import { isSameDay } from '@utils/format';
import { check_order_cancel_popup_string } from '@constants/string';
import Popup from '@components/common/New/Popup';
import { usePatchShippingStatusByIdMutation } from '@apis/order/OrderApi.mutation';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query';

interface MypageOrderhistoryPageProps extends MypageOrderhistoryPageDataProps {
  orderStatusList: OrderStatusType[],
  orderDataList: OrderGetByIdReturnType[],
  refetchOrderStatusList: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<OrderGetStatusWithOrderReturnType, any>>,
}
interface MypageOrderhistoryPageDataProps extends ChakraProps {
}
interface WriteReviewButtonProps {
  orderStatus: OrderStatusType,
}
interface CancelOrderButtonProps {
  onClick: () => void,
}
const { bodyText, okText, cancelText } = check_order_cancel_popup_string
function MypageOrderhistoryPageData({ ...basisProps }: MypageOrderhistoryPageDataProps) {
  const [orderPage, setOrderPage] = React.useState(1)
  const { data: orderStatusList, isError: isOrderStatusError, isLoading: isOrderStatusLoading, refetch } = useGetOrderStatusWithOrderQuery({ variables: { page: orderPage } })
  if (isOrderStatusError) return <Text>데이터 불러오기 에러</Text>
  if (isOrderStatusLoading) return <Text>로딩중</Text>
  if (!orderStatusList) return <Text>주문상태 데이터 불러오기 에러2</Text>
  const lastPage = Math.floor(orderStatusList.count / 5) + 1
  return (
    <>
      <Flex pt={LAYOUT.HEADER.HEIGHT} pb="80px"
        flexDir="column" bgColor="white" w="375px"
        {...basisProps}>
        <MypageOrderhistoryPage refetchOrderStatusList={refetch} orderStatusList={orderStatusList.results} orderDataList={orderStatusList.orderResults} />
        <Divider />
        <Pagination mt="50px" page={orderPage} setPage={setOrderPage} lastPage={lastPage} />
      </Flex>
    </>
  )
}
function MypageOrderhistoryPage({
  orderStatusList,
  orderDataList,
  refetchOrderStatusList,
  ...basisProps
}: MypageOrderhistoryPageProps) {

  const route = useRouter()
  const { isOpen: isPopupOpen, onClose: popupClose, onOpen: popupOpen } = useDisclosure()
  const [ orderStatusState, setOrderStatusState ] = useState(orderStatusList[0])
  const handleWriteReview = (orderStatus: OrderStatusType) => {
    route.push({ pathname: ROUTES.MYPAGE.WRITE_REVIEW, query: orderStatus })
  }
  const { mutateAsync: cancelOrderMutation } = usePatchShippingStatusByIdMutation()
  const handleCancelOrder = () => {
    const { orderId } = orderStatusState
    cancelOrderMutation({id:orderId, shippingStatus: "CANCELED"}).then((res) => {
      // console.log("# cancelOrderMutation res:",res)
      refetchOrderStatusList()
    })
    popupClose()
  }
  const handleCancelPopupOpen = (selectedOrderStatus: OrderStatusType) => {
    setOrderStatusState(() => selectedOrderStatus)
    popupOpen()
  }
  const WriteReviewButton = ({ orderStatus }: WriteReviewButtonProps) => <PrimaryButton
    mt="10px" mb="20px" mr="16px"
    alignSelf="end" w="140px" h="40px"
    onClick={() => handleWriteReview(orderStatus)}
    btntype={'Line'} btnstate={'Primary'} btnshape={'Rectangle'}>
    리뷰작성
  </PrimaryButton>
  const CancelOrderButton = ({onClick}: CancelOrderButtonProps) => <PrimaryButton
    mt="10px" mb="20px" mr="16px"
    alignSelf="end" w="140px" h="40px"
    btntype={'Solid'} btnstate={'Primary'} btnshape={'Rectangle'} onClick={onClick}>
    주문취소
  </PrimaryButton>
  return (
    <Flex flexDir="column" {...basisProps}>
      <Text ml="16px" mt="50px" textStyle="titleLarge" textColor="black">주문내역</Text>
      {orderStatusList && orderStatusList.map((orderStatus, ordeStatusIndex, list) => {
        const orderData = orderDataList[ordeStatusIndex]
        let shippingStatus = ""
        let dateTextMarginTop = "0px"
        if (orderData === undefined) shippingStatus = "배송상태 없음"
        else shippingStatus = orderData.shippingStatus
        let showDateText
        if (ordeStatusIndex === 0) {
          showDateText = true
          dateTextMarginTop = "80px"
        } else {
          const nowCreated = orderStatus.created
          const beforeCreated = list[ordeStatusIndex - 1].created
          showDateText = !isSameDay(nowCreated, beforeCreated)
        }
        return (
          <Flex flexDir="column" key={orderStatus.id}>
            {showDateText && <DateText mt={dateTextMarginTop} ml="16px" date={orderStatus.created} />}
            <PriceCard px="16px" isshippingfeevisible={true} productid={orderStatus.productId}
              count={orderStatus.count} status={shippingStatus} />
            {shippingStatus && shippingStatus === "PAID" ?
              <CancelOrderButton onClick={() => handleCancelPopupOpen(orderStatus)} /> : shippingStatus === "DONE" ? 
              <WriteReviewButton orderStatus={orderStatus} /> : <></>}
          </Flex>
        )
      })}
      <Popup isOpen={isPopupOpen} onClose={popupClose} bodyMsg={bodyText}
        cancelMsg={cancelText} cancelOnclick={popupClose}
        okMsg={okText} okOnclick={handleCancelOrder}
        children={undefined} />
    </Flex>
  );
}

const Divider = ({ ...props }: BoxProps) => {
  return <Box border="1px solid" borderColor="gray.100" {...props} />
}

export default MypageOrderhistoryPageData;
