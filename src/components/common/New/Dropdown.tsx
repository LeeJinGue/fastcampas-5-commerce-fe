import { Button, Text,Flex, FlexProps, Menu, MenuButton, MenuItem, MenuList, MenuProps } from '@chakra-ui/react';
import React, { useState } from 'react'
import ListVerticalArrowIcon from './@Icons/System/ListVerticalArrow';
interface DropdownProps extends MenuProps {
  defaultmenu: string,
  children: string[],
  sortFunction: (reviewOrder:string) => void,
}
function Dropdown({ defaultmenu, children, sortFunction, ...props }: DropdownProps) {
  const [title, setTitle] = useState(defaultmenu)
  return (
    <Menu {...props}>
      {({isOpen}) => (
        <>
        <MenuButton px="10px" h="30px" as={Button} backgroundColor="gray.200" rightIcon={<ListVerticalArrowIcon state={!isOpen} colortype={'Black'} />} >
        <Text textStyle="titleSmall" textColor="black">{title}</Text>
      </MenuButton>
      <MenuList>
        {children.map((menu) => {
          return <MenuItem onClick={() => {
            setTitle(menu)
            sortFunction(menu)
          }} key={menu}>{menu}</MenuItem>
        })}
      </MenuList>
      </>
      )}
    </Menu>
  )
}
export default Dropdown;