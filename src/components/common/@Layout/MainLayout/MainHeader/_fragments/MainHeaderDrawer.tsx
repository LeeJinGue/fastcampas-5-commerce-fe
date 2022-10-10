import { Button, ChakraProps, Container, DrawerFooter, DrawerHeader, DrawerProps, Flex, HStack, List, MenuList, useDisclosure, VStack } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import ExitIcon from '@components/common/@Icons/System/Exit';
import DrawerMenuList, { menuItemType } from '@components/common/DrawerMenuList';
import { DRAWER_MENU_ITEM_LIST } from '@constants/string';
import { LAYOUT } from '@constants/layout';
import { useRouter } from 'next/router';
import { deleteToken } from '@utils/localStorage/token';
import { ROUTES } from '@constants/routes';
import { useCallback } from 'react';

interface MainHeaderDrawerProps extends Omit<DrawerProps, 'children'> {
  bodyProps?: ChakraProps;
}
const MainHeaderDrawer = ({
  bodyProps,
  ...basisProps
}: MainHeaderDrawerProps) => {
  const route = useRouter()
  const replaceOrPush = useCallback((nowPath: string, goalPath: string) => nowPath === goalPath ? route.replace({pathname:goalPath}) : route.push({pathname:goalPath}), []) 
  const handleLogout = () => {
    // token을 삭제하고 login화면으로 이동합니다.
    deleteToken()
    route.replace({pathname: ROUTES.LOGIN})
  }
  const goHome = () => {
    // Home으로 이동
    replaceOrPush(route.asPath, ROUTES.HOME)
    basisProps.onClose()
  }
  const goProduct = () => {
    // 상품보기 페이지로 이동
    replaceOrPush(route.asPath, ROUTES.PRODUCTS)
    basisProps.onClose()
  }
  const goMypage = () => {
    // 마이페이지로 이동
    replaceOrPush(route.asPath, ROUTES.MYPAGE.MAIN)
    basisProps.onClose()
  }
  const FUNCTION_LIST = [goHome, goProduct, goMypage]
  const menuItemList:menuItemType[] = [] 
  for(let i=0; i<DRAWER_MENU_ITEM_LIST.length;i++) menuItemList.push({name: DRAWER_MENU_ITEM_LIST[i], event: FUNCTION_LIST[i]})

  return (
  <Drawer placement="left" {...basisProps}>
    <DrawerOverlay />
    <DrawerContent w="313px" maxW="313px">
      <DrawerBody // 
        {...bodyProps}
        p="0"
        position="relative">
        <DrawerCloseButton
          w="40px"
          h="40px"
          top="20px"
          right="16px"
          onClick={basisProps.onClose} />
        <Flex px="16px" mt={LAYOUT.HEADER.HEIGHT} fontFamily="heading" textStyle="titleLarge" mb="30px">카테고리</Flex>
        <DrawerMenuList menuItems={menuItemList} />
      </DrawerBody>
      <DrawerFooter px="16px" py="25px" display="flex" justifyContent="start">
      <Button bg="white" textStyle="titleLarge" onClick={handleLogout} leftIcon={<ExitIcon/>}>로그아웃</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
  }

export default MainHeaderDrawer;
