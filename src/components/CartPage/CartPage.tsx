import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, IconButton } from '@chakra-ui/react';
import CheckboxIcon from '@components/common/New/@Icons/System/CheckboxIcon';
import { LAYOUT } from '@constants/layout';
import XIcon from '@components/common/New/@Icons/System/XIcon';
import CartQuantityIcon from '@components/common/New/@Icons/System/CartQuantity';
import Commerce from '@components/common/Card/Commerce';
import PrimaryButton from '@components/common/New/PrimaryButton';
import { productSimpleType } from '@constants/dummy';

interface CartPageProps extends ChakraProps { 
  productsList: productSimpleType[],
}
interface EmptyCartPageProps extends ChakraProps { 
}
function EmptyCartPage({...basisProps}:EmptyCartPageProps){
  return (
    <Flex
    flexDir="column" pt={LAYOUT.HEADER.HEIGHT} w="375px" 
    alignItems="center" pb="80px" bgColor="white" {...basisProps}>
      <Text textStyle="title" textColor="black" textAlign="center" mt="100px">
        {"장바구니가 비어있습니다."}<br />
        {"상품을 추가해보세요!"}
      </Text>
      <PrimaryButton mt="30px" w="180px" h="50px" btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'}>{"상품보러가기"}</PrimaryButton>
    </Flex>
  )
}
function CartPage({ ...basisProps }: CartPageProps) {
  const {productsList} = {...basisProps}
  if(productsList.length === 0) return <EmptyCartPage />
  return (
    <Flex   // 장바구니 카드 리스트
      flexDir="column" pt={LAYOUT.HEADER.HEIGHT} w="375px" bgColor="gray.200" {...basisProps}>
      <Flex // 선택 탭
        w="375px" h="50px" bgColor="white" px="16px" justifyContent="space-between" alignItems="center">
        <Flex justifyContent="center" alignItems="center">
          <CheckboxIcon state="Default" />
          <Text ml="10px" textStyle="text" textColor="gray.600">{"모두선택"}</Text>
        </Flex>
        <Text textStyle="text" textColor="gray.400">{"선택삭제"}</Text>
      </Flex>
      <Commerce mt="10px" />
      <Commerce mt="10px" />
      <Flex   // 결제카드리스트
      flexDir="column" bgColor="white" px="16px" mt="10px" pb="50px">
        <Flex // 결제 텍스트
        flexDir="column" textColor="gray.600" textStyle="text" my="20px">
          <Flex
          justifyContent="space-between">
            <Text>{"총 상품 금액"}</Text>
            <Text>{108000}{"원"}</Text>
          </Flex>
          <Flex
          justifyContent="space-between">
            <Text>{"총 배송비"}</Text>
            <Text>{0}{"원"}</Text>
          </Flex>
        </Flex>
        <Box border="1px solid" borderColor="gray.200" w="343px" h="0px"></Box>
        <Flex // 결제 금액
          justifyContent="space-between" my="20px">
            <Text textStyle="text" textColor="black">{"결제금액"}</Text>
            <Text textStyle="title" textColor="primary.500">{108000}{"원"}</Text>
        </Flex>
        <PrimaryButton mb="30px" h="50px" w="343px" btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'}>{"결제하기"}</PrimaryButton>
      </Flex>
    </Flex>
  );
}

export default CartPage;
