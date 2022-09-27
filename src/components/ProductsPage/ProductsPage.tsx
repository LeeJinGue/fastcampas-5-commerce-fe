import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import RatioStarIcon from '@components/common/New/@Icons/System/RatioStar';
import PrimaryButton from '@components/common/New/PrimaryButton';
import Product from '@components/common/Card/Product';
import { product_data } from '@constants/dummy';

interface ProductsPageProps extends ChakraProps {}

function ProductsPage({ ...basisProps }: ProductsPageProps) {
  return (
    <Flex // 전체 페이지
    pt={LAYOUT.HEADER.HEIGHT} pb="80px" flexDir="column" 
    {...basisProps}
    px="16px"
    w="375px" alignItems="center"
    backgroundColor="white">
      {product_data.map((value)=>{
        return (
          <Product mt="30px" productData={value}/>
        )
      })}
    </Flex>
  );
}

export default ProductsPage;
