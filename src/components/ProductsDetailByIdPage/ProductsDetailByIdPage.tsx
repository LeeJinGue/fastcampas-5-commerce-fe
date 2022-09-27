import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import { productDetialType, product_detail_data } from '@constants/dummy';
import RatioStarIcon from '@components/common/New/@Icons/System/RatioStar';
import PrimaryButton from '@components/common/New/PrimaryButton';
import ProductDetail from '@components/common/Card/ProductDetail';

interface ProductsDetailByIdPageProps extends ChakraProps {
  id?: string | string[];
}
let productData:productDetialType = {
  id: -1,
  name: '',
  description: '',
  price: 0,
  capacity: 0,
  detail: '',
  reviewList: '',
  avgRate: '',
  reviewCount: ''
};
function ProductsDetailByIdPage({
  id,
  ...basisProps
}: ProductsDetailByIdPageProps) {
  product_detail_data.forEach((value) => {
    if(value.id.toString() === id) productData = value
  })
  return (
    <Flex {...basisProps} bgColor="white" w="375px" h="1000px" pt={LAYOUT.HEADER.HEIGHT} flexDir="column">
      <Image mt="36px" mx="16px" w="343px" h="300px" src="/images/product_detail_img.png"/>
      <ProductDetail productData={productData} />
    </Flex>
  );
}

export default ProductsDetailByIdPage;
