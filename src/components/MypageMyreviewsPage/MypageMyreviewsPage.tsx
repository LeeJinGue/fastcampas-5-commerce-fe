import React, { useState } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import Review from '@components/common/Card/Review';
import Pagination from '@components/common/New/Pagination';
import { useGetProductByIdQuery } from '@apis/product/ProductApi.query';
import useAppStore from '@features/useAppStore';
import LoadingPage from '@components/common/New/LoadingPage';
import { UserDTOType } from '@apis/user/UserApi.type';
import { useGetUserMeQuery } from '@apis/user/UserApi.query';
import { useGetReviewListQuery } from '@apis/review/ReviewApi.query';

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
  const [page, setPage] = useState(1)
  const {isError, isLoading,data:reviewData} = useGetReviewListQuery({variables:{user_id:userData.id}})
  // console.log("# review data test:",reviewData)
  if(isLoading) return <LoadingPage />
  if(isError) return <Text>리뷰 가져오기 에러</Text>
  if(!reviewData) return <Text>리뷰 데이터가 없습니다.</Text>
  const {results:reviewList, count:reviewCount} = reviewData
  const lastPage = Math.floor((reviewCount / 4)) + 1
  const startReviewIndex = (page-1) * 4
  const endReviewIndex = (page * 4) - 1
  const nowPageReviewList = reviewList.slice(startReviewIndex,endReviewIndex)
  return (
    <Flex pt={LAYOUT.HEADER.HEIGHT} pb="80px" flexDir="column" bgColor="white" w="375px"{...basisProps}>
      <Text px="16px" mt="50px" textStyle="titleLarge" textColor="black">내 상품 리뷰</Text>
      <Text px="16px" mt="80px" textStyle="title" textColor="black">{"총 "}<Text as="span" textColor="primary.500">{reviewCount}</Text>건</Text>
      <Flex flexDir="column" mt="30px">
        {nowPageReviewList && nowPageReviewList.map((reviewData) => {
          return <Review key={reviewData.id} iscomment={false} reviewData={reviewData}/>
        })}
      </Flex>
      <Pagination page={page} setPage={setPage} mt="50px" lastPage={lastPage} />
    </Flex>
  );
}

export default MypageMyreviewsDataPage;
