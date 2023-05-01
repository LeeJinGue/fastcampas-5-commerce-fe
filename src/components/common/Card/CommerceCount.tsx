import { Flex, FlexProps, Input, Text } from '@chakra-ui/react';
import { isNumber, isString } from 'lodash';
import React, { ChangeEventHandler } from 'react'
import CartQuantityIcon from '../New/@Icons/System/CartQuantity';
interface CommerceCountProps extends FlexProps{
  name: string,
  price: number,
  count: number,
  setcount: React.Dispatch<React.SetStateAction<number>>,
}
function CommerceCount({...basisProps}:CommerceCountProps) {
  const { count, setcount, name, price, ...restProps } = basisProps
  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(e.target.value === "") setcount(0)
    else setcount(Number.parseInt(e.target.value))
  }
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
            onClick={()=>setcount(prev => prev === 1 ? 1 : prev-1)} iconType='sub' />
            <Input border="1px solid" borderColor="gray.300" type="number" p="0" fontSize="1" textStyle="textSmall" textColor="gray.800" textAlign="center" bg="white" w="25px" h="25px" 
            value={count} onChange={handleOnChange} />
            <CartQuantityIcon onClick={()=>setcount(prev => prev+1)}iconType='add'/>
          </Flex>
          <Text // 총 가격
          textStyle="title" textColor="gray.600">{price*count}{"원"}</Text>
        </Flex>

    </Flex>
  )
}
export default CommerceCount;