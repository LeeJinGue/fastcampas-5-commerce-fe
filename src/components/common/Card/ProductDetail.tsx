import { Box, Flex, FlexProps, Text, Image } from '@chakra-ui/react';
import { productDetialType } from '@constants/dummy';
import React from 'react'
import RatioStarIcon from '../New/@Icons/System/RatioStar';
import PrimaryButton from '../New/PrimaryButton';
interface ProductDetailProps extends FlexProps {
  productData: productDetialType,
}
function ProductDetail({ productData, ...props }: ProductDetailProps) {
  const {name, capacity, price, detail, reviewList, reviewCount, avgRate} = productData
  return (
    <Flex // Card/product detail
      px="16px" flexDir="column"
      bgColor="white" boxShadow="0px 0px 10px rgba(26, 26, 26, 0.1)" borderRadius="20px 20px 0px 0px"
    >
      <Box // 회색박스
        mt="10px" w="50px" h="5px"
        borderRadius="2.5px" bgColor="gray.200" alignSelf="center"
      />
      <Flex // 이름, 용량
        mt="30px">
        <Text textStyle="titleLarge" textColor="black">{name}</Text><Text ml="5px" textStyle="titleLarge" textColor="gray.600" as="span">{capacity + "ml"}</Text>
      </Flex>
      <Text mt="10px" textColor="primary.500" textStyle="titleLarge">{price}<Text textColor="black" textStyle="textLarge" as="span">{"원"}</Text></Text>
      <Text textStyle="titleSmall" textColor="gray.800">{"3만원 이상 구매시 "}<Text textColor="primary.500" as="span">{"무료배송"}</Text></Text>
      <Text mt="10px" textStyle="text" textColor="black">{detail}</Text>
      <Flex // 별점 및 리뷰개수
        mt="10px" alignItems="center" >
        <RatioStarIcon size="16" ratio='full' />
        <Text ml="5px" textStyle="title" textColor="black">{avgRate}</Text>
        <Text ml="5px" textStyle="text" textColor="gray.600">{`(${reviewCount}개 리뷰)`}</Text>
      </Flex>
      <PrimaryButton btntype='Line' btnstate='Primary' btnshape='Round' mt="21px" w="343px" h="50px" variant="outline">{"장바구니"}</PrimaryButton>
      <PrimaryButton btntype='Solid' btnstate='Primary' btnshape='Round' mt="10px" w="343px" h="50px">{"바로구매"}</PrimaryButton>
    </Flex>
  )
}
export default ProductDetail;