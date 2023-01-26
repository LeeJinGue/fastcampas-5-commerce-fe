import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react'
import CartQuantityIcon from '../New/@Icons/System/CartQuantity';
interface CommerceCountProps extends FlexProps{
  name: string,
  price: number,
  count: number,
  setcount: React.Dispatch<React.SetStateAction<number>>,
}
function CommerceCount({...basisProps}:CommerceCountProps) {
  const { count, setcount, name, price, ...restProps } = basisProps
  return (
    <Flex   // 상품 개수 선택(Card/Commerce)
    bgColor="gray.200" flexDir="column" p="10px" borderRadius="5px" {...restProps}>
        <Text // 옵션
        textStyle="text" textColor="gray.600">{name}</Text>
        <Flex // 수량가격
        justifyContent="space-between" alignItems="center">
          <Flex // 상품수량
          alignItems="center"
          >
            <CartQuantityIcon
            _hover={{cursor:"pointer"}} onClick={()=>setcount(prev => prev === 1 ? 1 : prev-1)} iconType='sub' border="1px solid" borderColor="gray.300" borderRadius= '5px 0px 0px 5px' />
            <Flex
            boxSizing='border-box' border="1px solid" borderColor="gray.300" justifyContent="center" alignItems="center" w="25px" h="25px" bgColor="white">
            <Text textAlign="center" textStyle="textSmall" textColor="gray.800">{count}</Text>
            </Flex>
            <CartQuantityIcon  _hover={{cursor:"pointer"}} onClick={()=>setcount(prev => prev+1)}iconType='add' border="1px solid" borderColor="gray.300" borderRadius= '0px 5px 5px 0px'/>
          </Flex>
          <Text // 총 가격
          textStyle="title" textColor="gray.600">{price*count}{"원"}</Text>
        </Flex>

    </Flex>
  )
}
export default CommerceCount;