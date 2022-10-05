import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import Review from '@components/common/Card/Review';
import { review_list } from '@constants/dummy';
import Pagination from '@components/common/New/Pagination';
import { useGetProductByIdQuery } from '@apis/product/ProductApi.query';

interface MypageMyreviewsPageProps extends ChakraProps {}

function MypageMyreviewsPage({ ...basisProps }: MypageMyreviewsPageProps) {
  // 아직 유저 아이디로 review받아오는 코드 추가 안해서 돌려서 Product를 통해 review리스트 받아와서 사용
  const data = useGetProductByIdQuery({variables:"1"})
  console.log("#data test:",data)
  const reviewList = data.data?.reviewList

  return (
    <Flex pt={LAYOUT.HEADER.HEIGHT} pb="80px" flexDir="column" bgColor="white" w="375px"{...basisProps}>
      <Text px="16px" mt="50px" textStyle="titleLarge" textColor="black">내 상품 리뷰</Text>
      <Text px="16px" mt="80px" textStyle="title" textColor="black">{"총 "}<Text as="span" textColor="primary.500">{"78"}</Text>건</Text>
      <Flex flexDir="column" mt="30px">
        {reviewList && reviewList.map((value) => {
          return <Review iscomment={false} reviewData={value}/>
        })}
      </Flex>
      <Pagination mt="50px" />
    </Flex>
  );
}

export default MypageMyreviewsPage;
