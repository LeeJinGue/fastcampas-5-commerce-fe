import { Flex, FlexProps, Text, Image } from '@chakra-ui/react';
import React from 'react'
import CartQuantityIcon from '../New/@Icons/System/CartQuantity';
import CheckboxIcon from '../New/@Icons/System/CheckboxIcon';
import XIcon from '../New/@Icons/System/XIcon';
interface CommerceProps extends FlexProps{
  
}
 function Commerce({...props}: CommerceProps) {
  return (
    <Flex   // Card/Commerce
    px="16px" py="20px" bgColor="white" {...props}
  >
    <CheckboxIcon state="Select" />
    <Flex   // 상품 정보 전체
    ml="10px" flexDir="column" w="full"
    >
      <Flex // 상품 정보
      alignSelf="stretch"
      justifyContent="space-between"
      >

        <Flex // 상품 설명
        >
          <Image // 상품 이미지
            src='/images/product_detail_img.png' w="90px" h="90px" />
          <Flex // 상품 텍스트
            flexDir="column"
          >
            <Text textStyle="title" textColor="black">{"바스 & 샴푸"}</Text>
            <Text textStyle="text" textColor="gray.600">{"바스 & 샴푸 | 120ml"}</Text>
            <Text textStyle="title" textColor="primary.500">{"27000원"}</Text>
          </Flex>
        </Flex>
        <XIcon // 취소버튼
        />
      </Flex>
      <Flex   // 상품 개수 선택(Card/Commerce)
      mt="15px"
      bgColor="gray.200" flexDir="column" p="10px" borderRadius="5px">
          <Text // 옵션
          textStyle="text" textColor="gray.600">{"바스 & 샴푸"}</Text>
          <Flex // 수량가격
          justifyContent="space-between" alignItems="center">
            <Flex // 상품수량
            alignItems="center"
            >
              <CartQuantityIcon iconType='sub' border="1px solid" borderColor="gray.300" borderRadius= '5px 0px 0px 5px' />
              <Flex
              boxSizing='border-box' border="1px solid" borderColor="gray.300" justifyContent="center" alignItems="center" w="25px" h="25px" bgColor="white">
              <Text textAlign="center" textStyle="textSmall" textColor="gray.800">{1}</Text>
              </Flex>
              <CartQuantityIcon iconType='add' border="1px solid" borderColor="gray.300" borderRadius= '0px 5px 5px 0px'/>
            </Flex>
            <Text // 총 가격
            textStyle="title" textColor="gray.600">{54200}{"원"}</Text>
          </Flex>

      </Flex>
      <Flex   // 배송비
      mt="15px" justifyContent="space-between"
      >
        <Text textColor="black" textStyle="text">{"배송비 무료"}</Text>
        <Text textColor="black" textStyle="titleLarge">{54000}{"원"}</Text>
      </Flex>
    </Flex>
  </Flex>
  )
}
export default Commerce;