import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react'
import ListHorizontalArrowIcon from '../@Icons/System/ListHorizontalArrow';
interface MenuTextProps extends FlexProps {
  title: string,
  event: () => void
}
function MenuText({ title, event, ...props }: MenuTextProps) {
  return (
    <Flex _hover={{ backgroundColor: "bgHover", cursor: "pointer" }} onClick={event} {...props} w="375px" h="60px" px="16px"
      alignItems="center" justifyContent="space-between">
      <Text textStyle="text" textColor="black">{title}</Text>
      <ListHorizontalArrowIcon state={"true"} colortype={'Black'} />
    </Flex>
  )
}
export default MenuText;