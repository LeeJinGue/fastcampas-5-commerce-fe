import { Divider, Flex, FlexProps, Text, Image } from '@chakra-ui/react';
import React from 'react'
import RatioStars from '../RatioStars';
interface SlideCardProps extends FlexProps {

}
function SlideCard({ ...props }: SlideCardProps) {
  return (
    <Flex // Card/slide
      h="464px"
      {...props}>
      <Flex // Card 1
        w="325px" h="100%"
        px="20px" pt="23px" flexDir="column"
        borderRadius="20px" bgColor="white"
        boxShadow="0px 0px 10px rgba(26, 26, 26, 0.1)"
      >
        <Flex // ID & Stars
          justifyContent="space-between"
        >
          <Text // 리뷰어 아이디
            textStyle="titleSmall"
            textColor="black"
          >
            {"incourse.run"}
          </Text>
          <RatioStars // 리뷰어가 준 별점
            size="12" rate={4} />
        </Flex>
        <Text // 날짜
          textStyle="textSmall"
          textColor="gray.700"
        >{"2021.03.29"}</Text>
        <Text // 리뷰 내용
          textStyle="text"
          textColor="black"
          w="285px" h="225px"
          mt="30px"
        >
          {"순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온 가족이 사용할 수 있는 화장품이라고 추천받았어요. 처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 . 아이 엄마들에게 추천드려요!"}
        </Text>
        <Divider my="20px" borderColor="gray.300" />
        <Flex // 이미지 박스
        >
          <Image borderRadius="5px" src="/images/review_img1.png" w="80px" h="80px" />
          <Image ml="10px" borderRadius="5px" src="/images/review_img2.png" w="80px" h="80px" />
          <Image ml="10px" borderRadius="5px" src="/images/review_img3.png" w="80px" h="80px" />
        </Flex>
      </Flex>
    </Flex>
  )
}
export default SlideCard;

