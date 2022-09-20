import { Button, Divider, Flex, StackDivider, VStack } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import React from 'react'
import { menuListCSS } from 'react-select/dist/declarations/src/components/Menu';

interface MenuListProps{
  menuItems: string[],
}

const DrawerMenuList = ({menuItems, ...props}:MenuListProps) => {
  return (
    <VStack 
    {...props} alignItems="start">
      <Divider m={0} orientation='horizontal' color="gray.200"   />
      {menuItems.map((value) => {
        return <MenuItem key={value} name={value} />
      })}
    </VStack>
  )
}
interface MenuItemProps{
  name: string,
}
const MenuItem = ({name, ...props}:MenuItemProps) => {
      return <>
      <Button m="0" bg="white" justifyContent="start" w="100%" fontFamily="heading" p="16px" textStyle="title"> {name}</Button>
      <Divider m="0" color="gray.200" orientation='horizontal' />
      </>
}
export default DrawerMenuList;