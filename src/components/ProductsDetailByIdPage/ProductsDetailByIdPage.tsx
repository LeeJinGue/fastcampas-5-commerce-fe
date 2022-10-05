import React, { useEffect } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, IconButton, Container, Divider } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import { productDetialType, product_detail_data, reviewDataType, review_list } from '@constants/dummy';
import RatioStarIcon from '@components/common/New/@Icons/System/RatioStar';
import PrimaryButton from '@components/common/New/PrimaryButton';
import ProductDetail from '@components/common/Card/ProductDetail';
import DetailUnfoldButton from '@components/common/New/DetailUnfoldButton';
import ListVerticalArrowIcon from '@components/common/New/@Icons/System/ListVerticalArrow';
import Dropdown from '@components/common/New/Dropdown';
import Review from '@components/common/Card/Review';
import ListNumberArrowIcon from '@components/common/New/@Icons/System/ListNumberArrow';
import { isInteger } from 'lodash';
import Pagination from '@components/common/New/Pagination';
import RatioStars from '@components/common/RatioStars';
import { useQuery } from '@tanstack/react-query';
import { ProductApi } from '@apis/product/ProductApi';
import {useGetProductByIdQuery} from '@apis/product/ProductApi.query'
import { useRouter } from 'next/router';
import { ProductDTOType } from '@apis/product/ProductApi.type';
import { ReviewDTOType } from '@apis/review/ReviewApi.type';
interface ProductsDetailByIdPageProps extends ChakraProps {
  id?: string
}
let productData: ProductDTOType = {
  id: -1,
  name: '',
  description: '',
  price: 0,
  capacity: 0,
  detail: '',
  reviewList: [],
  avgRate: '',
  reviewCount: '',
  photo: '',
};
function ProductsDetailByIdPage({
  id,
  ...basisProps
}: ProductsDetailByIdPageProps) {

  // product_detail_data.forEach((value) => {
  //   if (value.id.toString() === id) productData = value
  // })
  if(id){
    const data = useGetProductByIdQuery({variables:id})
    console.log("#data test:",data)
    if(data.data){
      productData = data.data
    }
  }
  const rate = Number.parseFloat(productData.avgRate)
  return (
    <Flex {...basisProps} bgColor="white" w="375px" pt={LAYOUT.HEADER.HEIGHT} flexDir="column"
    pb="80px">
      <Image mt="36px" mx="16px" w="343px" h="300px" src={productData.photo} />
      <ProductDetail productData={productData} />
      <Flex // 상세정보, 구매정보, 리뷰 박스
        w="auto" h="80px"
        alignItems="center"
        justifyContent="space-around"
      >
        <Text textColor="primary.500" textStyle="title">{"상세정보"}</Text>
        <Text textColor="gray.600" textStyle="text">{"구매정보"}</Text>
        <Text textColor="gray.600" textStyle="text">{`리뷰(${productData.reviewList})`}</Text>
      </Flex>
      <Flex   // 상세 정보 박스
        overflow="hidden"
        w="375px" h="477px"
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
      <DetailUnfoldButton alignSelf="center" isclose={true} />
      <Flex // Text List/Menu text
        flexDir="column"
        px="16px">
        <Flex     // 주문 및 배송 안내 menu text
          w="343px" h="60px" justifyContent="space-between" alignItems="center">
          <Text textStyle="title" textColor="black">{"주문 및 배송 안내"}</Text>
          <ListVerticalArrowIcon _hover={{cursor: "pointer"}} state={true} colortype={'Black'} />
        </Flex>
        <Flex     // 열리면 나타나는 sub menu list
          w="full" h="242px" mt="14px"
          flexDir="column"
          textStyle="text" textColor="black"
        >
          <Text textStyle="title">{"[주문 및 배송 안내]"}</Text>
          <Text mt="20px">{"배송방법 : 인코스런 택배"}</Text>
          <Text mt="10px">{"배송지역 : 전국"}</Text>
          <Text>{"배송비용 : 단품 상품 구매시 3,000배송비 발생"}</Text>
        </Flex>
      </Flex>
      <Flex     // 리뷰 리스트
        flexDir="column">
        <Flex   // 리뷰개수, 정렬순서, 필터링
          alignItems="center" justifyContent="space-between" px="16px"
        >
          <Text textStyle="title" textColor="black">{"리뷰"}<Text as="span" textColor="primary.500">{"78"}</Text>{"건"}</Text>
          <Flex>
            <Dropdown defaultmenu={'최신순'} children={['최신순', '평점 높은순', '평점 낮은순']} />
            <Container as="span" w="10px" p="0" />
            <Dropdown defaultmenu={'전체보기'} children={['전체보기', '포토리뷰']} />
          </Flex>
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
            rate={rate} size="16"/>
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
                  <Box w="10px" h="50px" bgColor="secondary.100" borderRadius="5px" pt={value+"px"}> 
                    <Box w="10px" h={(50-value)+"px"} bgColor="primary.500" borderRadius="5px" />
                  </Box>
                )
              })}
            </Flex>
            <Box // 모양을 만들어줄 박스
            w="150px" h="0px" position="relative" top="-5px"
            border="1px solid" bgColor="gray.200" borderColor="gray.200"/>
            <Box w="150px" h="4px" position="relative" top="-5px" bgColor="white"/>
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
        productData.reviewList.map((reviewData: ReviewDTOType) => {
          return <>
          <Review reviewData={reviewData} iscomment={false} />
          <Box alignSelf="center" w="343px" h="0" border="1px solid" borderColor="gray.200"/>
          </>
        })}
      </Flex>
      <Pagination />
    </Flex>
  );
}

export default ProductsDetailByIdPage;
