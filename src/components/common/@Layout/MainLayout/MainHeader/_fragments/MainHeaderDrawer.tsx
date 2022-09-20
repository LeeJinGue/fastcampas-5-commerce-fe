import { Button, ChakraProps, Container, DrawerFooter, DrawerHeader, DrawerProps, Flex, HStack, List, MenuList, VStack } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import ExitIcon from '@components/common/@Icons/System/Exit';
import DrawerMenuList from '@components/common/DrawerMenuList';
import { DRAWER_MENU_ITEM_LIST } from '@constants/item-list';
import { LAYOUT } from '@constants/layout';

interface MainHeaderDrawerProps extends Omit<DrawerProps, 'children'> {
  bodyProps?: ChakraProps;
}

const MainHeaderDrawer = ({
  bodyProps,
  ...basisProps
}: MainHeaderDrawerProps) => (
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
        <DrawerMenuList menuItems={DRAWER_MENU_ITEM_LIST} />
      </DrawerBody>
      <DrawerFooter px="16px" py="25px" display="flex" justifyContent="start">
      <Button bg="white" textStyle="titleLarge" leftIcon={<ExitIcon/>}>로그아웃</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default MainHeaderDrawer;
