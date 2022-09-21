import { Flex, IconButton, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import MenuIcon from '@components/common/New/@Icons/System/Menu';
import CartIcon from '@components/common/New/@Icons/System/Cart';

import { LAYOUT } from '@constants/layout';

import { Main_HEADER_VARIANTS, MainHeaderVariantType } from './MainHeader.data';
import MainHeaderDrawer from './_fragments/MainHeaderDrawer';

interface MainHeaderProps {
  variant?: MainHeaderVariantType;
}

const MainHeader = ({ variant = 'light' }: MainHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cssByVariant = Main_HEADER_VARIANTS[variant];

  return (
    <>
      <Flex //
        as="header"
        px={{ base: '16px', md: '80px' }}
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        zIndex="sticky"
        transition="all 0.3s"
        w="375px"
        h={LAYOUT.HEADER.HEIGHT}
        background="white"
        // {...cssByVariant.header}
      >

        <IconButton //
          color='black'
          icon={<MenuIcon/>}
          onClick={onOpen}
          cursor="pointer"
          bg="transparent"
          aria-label="btn-toggle-drawer"
        />
        <IconButton //
          color='black'
          icon={<CartIcon w="24px" h="24px" />}
          onClick={onOpen}
          cursor="pointer"
          bg="transparent"
          aria-label="btn-toggle-drawer"
        />
      </Flex>
      <MainHeaderDrawer
        isOpen={isOpen}
        onClose={onClose}
        bodyProps={cssByVariant.drawer}
      />
    </>
  );
};

export default MainHeader;
