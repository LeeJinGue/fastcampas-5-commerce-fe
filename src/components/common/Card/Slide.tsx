import { TagReviewDTOTType } from '@apis/product/ProductApi.type';
import { ReviewDTOType } from '@apis/review/ReviewApi.type';
import { Divider, Flex, FlexProps, Text, Image } from '@chakra-ui/react';
import { formatReviewTime } from '@utils/format';
import React from 'react'
import RatioStars from '../RatioStars';
interface SlideCardProps extends FlexProps {
  reviewData?: TagReviewDTOTType,
}
function SlideCard({ reviewData, ...props }: SlideCardProps) {
  if (!reviewData) return (
    <Flex // Card 1
      w="325px" h="464px"
      px="20px" pt="23px" pb="30px" flexDir="column" justifyContent="center"
      borderRadius="20px" bgColor="white"
      boxShadow="0px 0px 10px rgba(26, 26, 26, 0.1)"
      {...props}
    >
      <Text alignSelf="center" >리뷰가 없습니다.</Text>
    </Flex>
  )
  const { nickname, created, rate, content, reviewimageSet, } = reviewData
  return (

    <Flex // Card 1
      w="325px" h="464px"
      px="20px" pt="23px" pb="30px" flexDir="column"
      borderRadius="20px" bgColor="white"
      boxShadow="0px 0px 10px rgba(26, 26, 26, 0.1)"
      {...props}
    >

      <>
        <Flex // ID & Stars
          justifyContent="space-between"
        >
          <Text // 리뷰어 닉네임
            textStyle="titleSmall"
            textColor="black"
          >
            {nickname}
          </Text>
          <RatioStars // 리뷰어가 준 별점
            size="12" rate={rate} />
        </Flex>
        <Text // 날짜
          textStyle="textSmall"
          textColor="gray.600"
        >{formatReviewTime(created)}</Text>
        <Text // 리뷰 내용
          textStyle="text"
          textColor="black"
          w="285px" h="225px"
          mt="30px"
        >
          {content}
        </Text>
        <Divider my="20px" borderColor="gray.300" />
        <Flex // 이미지 박스
        >
          {reviewimageSet.map((image) => <Image src={image.url} key={image.url} ml="10px" borderRadius="5px" w="80px" h="80px" />)}
        </Flex>
      </>

    </Flex>

  )
}
export default SlideCard;