import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react'
import ListHorizontalArrowIcon from '../@Icons/System/ListHorizontalArrow';
import ListNumberArrowIcon from '../@Icons/System/ListNumberArrow';
interface MenuTextProps extends FlexProps{
  title: string,
}
function MenuText({title, ...props}:MenuTextProps) {
  return (
    <Flex {...props} w="375px" h="60px" px="16px" 
    alignItems="center" justifyContent="space-between">
      <Text textStyle="text" textColor="black">{title}</Text>
      <ListHorizontalArrowIcon state={true} colortype={'Black'} />
    </Flex>
  )
}
export default MenuText;