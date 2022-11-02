import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import Review from '@components/common/Card/Review';
import Pagination from '@components/common/New/Pagination';
import { useGetProductByIdQuery } from '@apis/product/ProductApi.query';
import useAppStore from '@features/useAppStore';
import LoadingPage from '@components/common/New/LoadingPage';
import { UserDTOType } from '@apis/user/UserApi.type';
import { useGetUserMeQuery } from '@apis/user/UserApi.query';

interface MypageMyreviewsDataPageProps extends ChakraProps { }
interface MypageMyreviewsViewPageProps extends MypageMyreviewsDataPageProps {
    userData: UserDTOType,
 }
function MypageMyreviewsDataPage({...basisProps}:MypageMyreviewsDataPageProps){
  const {data:userData, isError:userGetError, isLoading:userLoadingError} = useGetUserMeQuery({variables: {accessToken:""}})
  if(userLoadingError) return <LoadingPage />
  if(userGetError) return <Text>유저 불러오기 에러</Text>
  if(userData === undefined) return <Text>유저정보 가져오기 실패</Text>
  return <MypageMyreviewsViewPage userData={userData} {...basisProps}/>
}
function MypageMyreviewsViewPage({userData, ...basisProps }: MypageMyreviewsViewPageProps) {
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

export default MypageMyreviewsDataPage;
