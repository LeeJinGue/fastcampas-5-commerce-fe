import React, { useEffect } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import RatioStarIcon from '@components/common/New/@Icons/System/RatioStar';
import PrimaryButton from '@components/common/New/PrimaryButton';
import Product from '@components/common/Card/Product';
import { product_data } from '@constants/dummy';
import { useGetProductListQuery } from '@apis/product/ProductApi.query';

interface ProductsPageProps extends ChakraProps { }

function ProductsPage({ ...basisProps }: ProductsPageProps) {
  const { data } = useGetProductListQuery(
    {
      variables:
      {
        cursor: "",
        page_size: "20",
      },
    }
  )

  return (
    <Flex // 전체 페이지
      pt={LAYOUT.HEADER.HEIGHT} pb="80px" flexDir="column"
      {...basisProps}
      px="16px"
      w="375px" alignItems="center"
      backgroundColor="white">
      {data && data.results.map((productData) => {
        return (
          <Product mt="30px" productData={productData} key={productData.name} />
        )
      })}
    </Flex>
  );
}

export default ProductsPage;
