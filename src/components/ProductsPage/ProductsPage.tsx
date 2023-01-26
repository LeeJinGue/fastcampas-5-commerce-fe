import React, { useEffect } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import RatioStarIcon from '@components/common/New/@Icons/System/RatioStar';
import PrimaryButton from '@components/common/New/PrimaryButton';
import Product from '@components/common/Card/Product';
import { product_data } from '@constants/dummy';
import { useGetProductInfiniteQuery, useGetProductListQuery } from '@apis/product/ProductApi.query';
import { useIntersect } from 'hooks/useIntersect';
import { CartDTOType } from '@apis/cart/CartApi.type';
import LoadingPage from '@components/common/New/LoadingPage';
import { useGetCartQuery } from '@apis/cart/CartApi.query';

interface ProductsPageViewProps extends ProductsPageDataProps { 
  cart_data:CartDTOType
}
interface ProductsPageDataProps extends ChakraProps {
}
function ProductsPageData({...basisProps}:ProductsPageDataProps) {
  const { data: cartData, isError: isCartDataError, isLoading: isCartDataLoading } = useGetCartQuery({
    variables: {
      user_id:0,
    }
  })
  if (isCartDataLoading) return <LoadingPage />
  if (isCartDataError) return <Text>카트 정보 갖고오기 에러</Text> 
  if (!cartData) return <Text>카트 정보가 없습니다.</Text>
  return <ProductsPageView cart_data={cartData[0]} {...basisProps} />
}
function ProductsPageView({ cart_data,...basisProps }: ProductsPageViewProps) {
  const {data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status} = useGetProductInfiniteQuery({})
  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if(hasNextPage && !isFetching){
      fetchNextPage()
    }
  })
  const {id:cartId} = cart_data
  return (
    <Flex // 전체 페이지
      pt={LAYOUT.HEADER.HEIGHT} pb="80px" flexDir="column"
      {...basisProps}
      px="16px"
      w="375px" alignItems="center"
      backgroundColor="white">
      {status === "loading" ?  <Text>로딩중...</Text> :
      status === "error" ? <Text>에러발생</Text> : 
      data &&
        data.pages.map((value) => {
          return value.results.map((productData) => {
            return <Product mt="30px" cart_id={cartId} productData={productData} key={productData.name} />
        })
        })}
      <Button onClick={() => fetchNextPage()} 
      disabled={!hasNextPage || isFetchingNextPage}>{isFetchingNextPage
        ? 'Loading more...'
        : hasNextPage
        ? 'Load More'
        : 'Nothing more to load'}</Button>
        <Box height="1px" ref={ref}></Box>
    </Flex>
  );
}

export default ProductsPageData;
