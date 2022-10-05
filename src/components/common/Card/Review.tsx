import { Flex, FlexProps, Text, Image, Icon } from '@chakra-ui/react';
import { reviewDataType } from '@constants/dummy';
import React from 'react'
import ChatIcon from '../New/@Icons/System/Chat';
import RatioStarIcon from '../New/@Icons/System/RatioStar';
import RatioStars from '../RatioStars';

interface ReviewProps extends FlexProps{
  iscomment: boolean,
  reviewData: reviewDataType,
}
const formatReviewTime = (time: Date):string => {
    return time.getFullYear()+"."+time.getMonth()+"."+time.getDate()
}
function Review({iscomment, reviewData,...props}: ReviewProps) {
  const {id, user, product, rate, content, reviewimageSet, created} = reviewData
  return (
    <Flex pl="16px" mt="23px" mb="25px" w="375px" {...props}>
      {iscomment && <ChatIcon mr="8px" iconTypes='line' />}
      <Flex   // card/Review
        flexDir="column" >
          <Flex // 리뷰어 아이디, 리뷰날짜, 별점
          justifyContent="space-between" pr="16px">
            <Flex // 리뷰어 아이디 및 리뷰날짜
            flexDir="column">
              <Text textStyle="titleSmall" textColor="black">{"incourse.run"}</Text> 
              <Text textStyle="textSmall" textColor="gray.600">{formatReviewTime(created)}</Text>
            </Flex>
            <RatioStars // rate에 따른 별점
            size="16" rate={rate}/>
          </Flex>
          <Text // 리뷰내용
          mt="17px" textStyle="text" textColor="black">{content}</Text>
          <Flex // 리뷰사진
          mt="9px">
            <Image src="/images/review_img1.png" w="80px" h="80px" mr="10px"/>
            <Image src="/images/review_img1.png" w="80px" h="80px" mr="10px"/>
            <Image src="/images/review_img1.png" w="80px" h="80px" mr="10px"/>
          </Flex>
      </Flex>
    </Flex>
  )
}
export default Review;