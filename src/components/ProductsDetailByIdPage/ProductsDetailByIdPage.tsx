import React, { useEffect, useRef, useState } from 'react';
import { Box, ChakraProps, Flex, Image, Text, Container, Spinner, useRadioGroup, Stack } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import ProductDetail from '@components/common/Card/ProductDetail';
import DetailUnfoldButton from '@components/common/New/DetailUnfoldButton';
import ListVerticalArrowIcon from '@components/common/New/@Icons/System/ListVerticalArrow';
import Dropdown from '@components/common/New/Dropdown';
import Review from '@components/common/Card/Review';
import Pagination from '@components/common/New/Pagination';
import RatioStars from '@components/common/RatioStars';
import { useGetProductByIdQuery } from '@apis/product/ProductApi.query'
import { ProductDetailDTOTType, ProductReviewType } from '@apis/product/ProductApi.type';
import { ReviewDTOType } from '@apis/review/ReviewApi.type';
import LoadingPage from '@components/common/New/LoadingPage';
import TabRadio from './_fragments/TabRadio';
import DrawerBuy from './_fragments/DrawerBuy';
import useOpenModalByQueryParams from 'hooks/useOpenModalByQueryParams';
import { useGetCartQuery } from '@apis/cart/CartApi.query';
import { usePostCartMutation } from '@apis/cart/CartApi.mutation';
import { CartDTOType } from '@apis/cart/CartApi.type';
interface ProductsDetailByIdViewPageProps extends ProductsDetailByIdDataPageProps {
  cart_data: CartDTOType,
}
interface ProductsDetailByIdDataPageProps extends ChakraProps {
  product_data: ProductDetailDTOTType,
  user_id: number,
}
function NoReviewList({
}) {
  return (
    <Text textStyle="title" textColor="black" textAlign="center" mt="100px">
      {"리뷰가 없습니다."}<br />
    </Text>)
}
function ProductsDetailByIdDataPage({
  user_id,
  ...basisProps
}: ProductsDetailByIdDataPageProps) {
  const { data: cartData, isError: isCartDataError, isLoading: isCartDataLoading } = useGetCartQuery({
    variables: {
      user_id
    },
    options: {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
    },
  })
  if (isCartDataLoading) return <LoadingPage />
  if (isCartDataError) return <Text>카트 정보 갖고오기 에러</Text>
  if (!cartData) return <Text>카트 정보가 없습니다.</Text>

  return <ProductsDetailByIdViewPage cart_data={cartData[0]} user_id={user_id} {...basisProps} />
}

function ProductsDetailByIdViewPage({
  product_data,
  user_id,
  cart_data,
  ...basisProps
}: ProductsDetailByIdViewPageProps) {

  const { photo, reviewList, avgRate } = product_data
  const [nowFilteredReviewList, setNowFilteredReviewList] = useState(reviewList)
  const filterReviewList = (reviewOrder: string) => {
    switch (reviewOrder) {
      case "전체보기":
        setNowFilteredReviewList(reviewList)
        break
      case "포토리뷰":
        setNowFilteredReviewList(reviewList.filter((reviewData) => reviewData.reviewimageSet.length !== 0))
        break
    }
  }
  const [page, setPage] = useState(1)
  const startIndex = (page - 1) * 5
  const endIndex = page * 5
  const [nowPageReviewList, setNowPageReviewList] = useState(nowFilteredReviewList.slice((page - 1) * 5, page * 5))
  const lastPage = Math.ceil(nowFilteredReviewList.length / 5)
  const rate = avgRate === null ? 0 : avgRate
  const sortReviewList = (reviewOrder: string) => {
    //['최신순', '평점 높은순', '평점 낮은순']
    switch (reviewOrder) {
      case "최신순":
        nowFilteredReviewList.sort((afterReview, beforeReview) =>
          afterReview.created < beforeReview.created ? -1
            : afterReview.created > beforeReview.created ? 1
              : 0)
        break
      case "평점 낮은순":
        nowFilteredReviewList.sort((afterReview, beforeReview) => afterReview.rate - beforeReview.rate)
        break
      case "평점 높은순":
        nowFilteredReviewList.sort((afterReview, beforeReview) => beforeReview.rate - afterReview.rate)
        break
    }
    setNowPageReviewList(nowFilteredReviewList.slice(startIndex, endIndex))
  }

  // 상세정보 펼쳐보기/접기
  const [isDetailOpen, setIsDetailOpen] = useState(true)
  const handelOpenDetail = () => {
    setIsDetailOpen(prev => {
      if (!prev) setDetailHeight("477px")
      else setDetailHeight("auto")
      return !prev
    })
  }
  const [detailHeight, setDetailHeight] = useState("477px")
  // 주문 및 배송 안내 펼치기/접기. 
  // 주문 및 배송 안내가 닫혀있나요?
  const [isOrderDeliveryInfoClose, setIsODIClose] = useState(true)
  const handelCloseOrderDeliveryInfoClose = () => {
    setIsODIClose(prev => {
      // 닫혀있다면 열려줍니다.
      if (prev) setODIHeight("242px")
      else setODIHeight("0px")
      return !prev
    })
  }
  const [orderDeleveryInfoheight, setODIHeight] = useState("0px")

  // 상세정보/구매정보/리뷰 탭
  const [tabText, setTabText] = useState("")
  const handleTabText = (tab: string) => {        // Radio 버튼 onChange 이벤트
    setTabText(tab)
  }
  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "상세정보",
    onChange: handleTabText,
    name: "탭"
  })
  const TAB_NAMES = ["상세정보", "구매정보", `리뷰(${nowFilteredReviewList.length})`]
  const isNoReview = nowFilteredReviewList.length === 0
  useEffect(() => {
    // page가 변경되면 reviewList도 변경되어야 합니다.
    setNowPageReviewList(nowFilteredReviewList.slice(startIndex, endIndex))
  }, [page])
  useEffect(() => {
    // filtering된 리뷰 리스트가 변경되면 현재 페이지의 리뷰 리스트도 변경되어야 합니다.
    if (page > lastPage) {
      // 현재페이지가 마지막 페이지보다 크다면 마지막페이지로 이동합니다.
      // 페이지가 변경될 때 nowPage도 변경하기 때문에 nowPage를 변경하지 않습니다.
      setPage(lastPage)
    }else{
      setNowPageReviewList(nowFilteredReviewList.slice(startIndex, endIndex))
    }

  }, [nowFilteredReviewList])
  return (
    <>
      <Flex {...basisProps} bgColor="white" w="375px" pt={LAYOUT.HEADER.HEIGHT} flexDir="column"
        pb="80px">
        <Image mt="36px" mx="16px" w="343px" h="300px" src={photo} />
        <ProductDetail cart_id={cart_data.id} productData={product_data} />
        <Stack // 상세정보, 구매정보, 리뷰 박스
          w="auto" h="80px"
          {...getRadioProps}
        >
          <Flex
            alignItems="center"
            justifyContent="space-around"
          >
            {TAB_NAMES.map((tabName, index) =>
              <TabRadio key={tabName}
                ml={index !== 0 ? "20px" : "0"} tabName={tabName}
                {...getRadioProps({ value: tabName })} />
            )}

          </Flex>
        </Stack>
        <Flex   // 상세 정보 박스
          overflow="hidden"
          w="375px" h={detailHeight}
          mt="50px" flexDir="column" alignItems="center"
          textAlign="center">
          <Text textColor="primary.500" textStyle="titleSmall">{"KEY POINT"}</Text>
          <Text textColor="black" textStyle="extraLarge">
            {"순하고 마일드한 안심 처방으로"}<br />
            {"피부가 민감하고 연약한"}<br />
            <Text as="span" textStyle="extraLargeBold">{"우리 아이를 위한 고보습 로션"}</Text>
          </Text>
          <Text mt="50px" textStyle="textSmall">
            <Text as="span" textStyle="titleSmall">{"천연유래성분 89%"}</Text>{" 이상 함유로 마일드하고"}<br />
            {"자극없는 사용감을 부여하고 "}<Text as="span" textStyle="titleSmall">{"쌀추출물 적용"}</Text>{"으로"}<br />
            {"수분공급 및 피부결을 부드럽게 케어합니다."}
          </Text>
          <Text mt="10px" textStyle="textSmall">
            {"천연 올리브("}<Text as="span" textStyle="titleSmall">{"COSMOS인증"}</Text>{") & 팜 유래 유화제"}<br />
            {"적용 - 풍부하고 밀도있는 영양감과"}<br />
            {"뛰어난 보습감, 밀착력을 부여합니다."}
          </Text>
          <Text mt="10px" textStyle="textSmall">
            {"피부와 유사한 "}<Text as="span" textStyle="titleSmall">{"Multi lamellar 유화"}</Text>{"를 통해"}<br />
            {"보습 밀착감을 높이고 리치한 사용감을"}<br />
            {"구현했습니다."}
          </Text>
          <Image alignSelf="center" mt="73px" w="313px" h="938px" src="/images/lotion_detail1.png"></Image>
        </Flex>
        <DetailUnfoldButton alignSelf="center" isclose={isDetailOpen} onClick={handelOpenDetail} />
        <Flex // Text List/Menu text
          bgColor="gray.100"
          flexDir="column"
          px="16px">
          <Flex     // 주문 및 배송 안내 menu text
            w="343px" h="60px" justifyContent="space-between" alignItems="center" mt="30px">
            <Text textStyle="title" textColor="black">{"주문 및 배송 안내"}</Text>
            <ListVerticalArrowIcon _hover={{ cursor: "pointer" }} state={isOrderDeliveryInfoClose} onClick={handelCloseOrderDeliveryInfoClose} colortype={'Black'} />
          </Flex>
          <Flex     // 열리면 나타나는 sub menu list
            w="full" h={orderDeleveryInfoheight} overflow="hidden"
            flexDir="column" textColor="black"
          >
            <Text textStyle="title">{"[주문 및 배송 안내]"}</Text>
            <Flex textStyle="text">
              <Flex flexDir="column" w="80px">
                <Text mt="10px">{"배송방법 : "}</Text>
                <Text mt="10px">{"배송지역 : "}</Text>
                <Text mt="10px">{"배송비용 : "}</Text>
              </Flex>
              <Flex flexDir="column">
                <Text mt="10px">{"인코스런 택배"}</Text>
                <Text mt="10px">{"전국"}</Text>
                <Text mt="10px">{"단품 상품 구매시 3,000배송비 발생"}<br />{"그외 단품 묶음 구매의 경우 30,000원"}<br />{"이상 구매 시 무료배송"}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex     // 리뷰 리스트
          flexDir="column"
          pt="50px">
          <Flex   // 리뷰개수, 정렬순서, 필터링
            alignItems="center" justifyContent="space-between" px="16px"
          >
            <Text textStyle="title" textColor="black">{"리뷰"}<Text as="span" textColor="primary.500">{nowFilteredReviewList.length}</Text>{"건"}</Text>
            {!isNoReview && <Flex>
              <Dropdown defaultmenu={'최신순'} children={['최신순', '평점 높은순', '평점 낮은순']} sortFunction={sortReviewList} />
              <Container as="span" w="10px" p="0" />
              <Dropdown defaultmenu={'전체보기'} children={['전체보기', '포토리뷰']} sortFunction={filterReviewList} />
            </Flex>}
          </Flex>
          <Flex   // 평균 평점 및 평점 개수 
            h="70px" w="331px" alignSelf="center" justifyContent="space-between"
            alignItems="center" mt="30px" mb="20px">
            <Flex // 평균 평점 박스
              alignItems="center">
              <Box // 평균 평점(숫자)
                h="30px" bgColor="primary.500" borderRadius="15px" px="7px">
                <Text textColor="white" textStyle="title">{rate}</Text>
              </Box>
              <RatioStars // 평균 평점(별)
                rate={rate} size="16" />
            </Flex>
            <Box // Divier
              h="70px" border="1px solid" borderColor="gray.200" />
            <Flex // 점수 바
              flexDir="column"
            >
              <Flex // 점수 바 그래프
                justifyContent="space-around">
                {Array.from({ length: 5 }, (_, i) => (i * 10)).map((value) => {
                  return (
                    // padding top, height값으로 점수바 크기 설정
                    <Box key={value} w="10px" h="50px" bgColor="secondary.100" borderRadius="5px" pt={value + "px"}>
                      <Box w="10px" h={(50 - value) + "px"} bgColor="primary.500" borderRadius="5px" />
                    </Box>
                  )
                })}
              </Flex>
              <Box // 모양을 만들어줄 박스
                w="150px" h="0px" position="relative" top="-5px"
                border="1px solid" bgColor="gray.200" borderColor="gray.200" />
              <Box w="150px" h="4px" position="relative" top="-5px" bgColor="white" />
              <Flex // 점수 바 점수(5점~1점)
                textColor="gray.600" textStyle="textSmall"
                justifyContent="space-around">
                <Text as="span">{"5점"}</Text>
                <Text as="span">{"4점"}</Text>
                <Text as="span">{"3점"}</Text>
                <Text as="span">{"2점"}</Text>
                <Text as="span">{"1점"}</Text>
              </Flex>
            </Flex>
          </Flex>
          { // 실제 리뷰 리스트
            isNoReview ? <NoReviewList /> : nowPageReviewList.map((reviewData: ProductReviewType) => {
              return <>
                <Review key={reviewData.id} reviewData={reviewData} iscomment={false} />
                <Box alignSelf="center" w="343px" h="0" border="1px solid" borderColor="gray.200" />
              </>
            })}
        </Flex>
        {!isNoReview && <Pagination page={page} setPage={setPage} lastPage={lastPage} />}
      </Flex>
    </>
  );
}


export default ProductsDetailByIdDataPage;
