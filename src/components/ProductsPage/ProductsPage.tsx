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
import useOpenModalByQueryParams from 'hooks/useOpenModalByQueryParams';
import DrawerBuy from '@components/ProductsDetailByIdPage/_fragments/DrawerBuy';
import { ProductListDTOTType, ProductSimpleDTOType } from '@apis/product/ProductApi.type';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from '@tanstack/react-query';

interface ProductsPageViewProps extends ProductsPageDataProps {
  cart_data: CartDTOType
  productList: ProductSimpleDTOType[],
  fetchNextProduct: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<ProductListDTOTType, any>>,
  hasNextProduct: boolean | undefined,
  isProductFetching: boolean,

}
interface ProductsPageDataProps extends ChakraProps {
}
const LoadingProductText = ({ }) => <Text textStyle="title" textColor="black" textAlign="center" mt="100px">
  {"상품을 불러오는중입니다."}
  <br />
</Text>
const NoMoreProductText = ({ }) => <Text textStyle="title" textColor="black" textAlign="center" mt="100px">
  {"상품이 더 존재하지 않습니다."}
  <br />
</Text>
function ProductsPageData({ ...basisProps }: ProductsPageDataProps) {
  const { data: cartData, isError: isCartDataError, isLoading: isCartDataLoading } = useGetCartQuery({
    variables: {
      user_id: 0,
    }
  })
  const { data: getProductReturnList,
    error,
    fetchNextPage: fetchNextProduct,
    hasNextPage: hasNextProduct,
    isFetching: isProductFetching,
    isFetchingNextPage,
    status } = useGetProductInfiniteQuery({})
  if (isCartDataLoading) return <LoadingPage />
  if (isCartDataError) return <Text>카트 정보 갖고오기 에러</Text>
  if (!cartData) return <Text>카트 정보가 없습니다.</Text>
  if (status === "loading") return <Text>상품 정보 로딩중</Text>
  if (status === "error" || !getProductReturnList) return <Text>상품정보 로딩 에러</Text>
  const productList: ProductSimpleDTOType[] = []
  getProductReturnList.
    pages.
    forEach((page) =>
      productList.push(...page.results))
  return <ProductsPageView cart_data={cartData[0]}
    productList={productList} fetchNextProduct={fetchNextProduct} hasNextProduct={hasNextProduct} isProductFetching={isProductFetching}
    {...basisProps} />
}
function ProductsPageView({ cart_data,
  productList, hasNextProduct, fetchNextProduct, isProductFetching,
  ...basisProps }: ProductsPageViewProps) {
  const firstProductData = productList[0]
  const observerRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target)
    if (hasNextProduct && !isProductFetching) {
      fetchNextProduct()
    }
  })
  const { id: cartId } = cart_data
  const [isOpenBuyDrawer, setIsOpenBuyDrawer] = React.useState(false);
  const { closeModal, openModal } = useOpenModalByQueryParams({
    drawer: setIsOpenBuyDrawer,
  });
  const [selectedProductData, setSelectedProductData] = React.useState(firstProductData)
  return (
    <Flex // 전체 페이지
      pt={LAYOUT.HEADER.HEIGHT} pb="80px" flexDir="column"
      {...basisProps}
      px="16px"
      w="375px" alignItems="center"
      backgroundColor="white">
      {productList.map((productData) => {
        return <Product openCartDrawer={() => {
          setSelectedProductData(productData)
          openModal('drawer')
        }} mt="30px" cart_id={cartId} productData={productData} key={productData.name} />
      })
      }
      {(!hasNextProduct || isProductFetching) &&
        (isProductFetching ? <LoadingProductText /> : <NoMoreProductText />)
      }
      <Box height="1px" ref={observerRef}></Box>
      <DrawerBuy isOpen={isOpenBuyDrawer} cart_id={cartId} productData={selectedProductData} onClose={() => closeModal('drawer')} />
    </Flex>
  );
}

export default ProductsPageData;
