import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import Review from '@components/common/Card/Review';
import Pagination from '@components/common/New/Pagination';
import { useGetProductByIdQuery } from '@apis/product/ProductApi.query';
import useAppStore from '@features/useAppStore';
import LoadingPage from '@components/common/New/LoadingPage';

interface MypageMyreviewsPageProps extends ChakraProps {}

function MypageMyreviewsPage({ ...basisProps }: MypageMyreviewsPageProps) {
  const {userData} = useAppStore(state => state.USER)
  const {isError, isLoading,data} = useGetProductByIdQuery({variables:userData.id})
  console.log("#data test:",data)
  if(isLoading) return <LoadingPage />
  if(isError) return <Text>리뷰 가져오기 에러</Text>
  const {reviewList} = data!

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
