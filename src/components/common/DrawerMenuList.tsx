import { Button, ButtonProps, Divider, Flex, StackDivider, VStack } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import React from 'react'
import { menuListCSS } from 'react-select/dist/declarations/src/components/Menu';
export type menuItemType = {
  name: string,
  event: (()=>void)
}
interface MenuListProps{
  menuItems: menuItemType[],
}

const DrawerMenuList = ({menuItems, ...props}:MenuListProps) => {
  console.log("#menu item:", menuItems[0].event)
  return (
    <VStack 
    {...props} alignItems="start">
      <Divider m={0} orientation='horizontal' color="gray.200"   />
      {menuItems.map((menuItem) => {
        return <MenuItem key={menuItem.name} menuItem={menuItem} />
      })}
    </VStack>
  )
}
interface MenuItemProps extends ButtonProps{
  menuItem: menuItemType,
}
const MenuItem = ({menuItem, ...props}:MenuItemProps) => {
      return <>
      <Button onClick={menuItem.event} m="0" bg="white" justifyContent="start" w="100%" fontFamily="heading" p="16px" textStyle="title"
      {...props}> {menuItem.name}</Button>
      <Divider m="0" color="gray.200" orientation='horizontal' />
      </>
}
export default DrawerMenuList;