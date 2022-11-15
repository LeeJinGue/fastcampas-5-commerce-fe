import { Center, ChakraProps, Flex, IconButton, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import MenuIcon from '@components/common/New/@Icons/System/Menu';
import CartIcon from '@components/common/New/@Icons/System/Cart';

import { LAYOUT } from '@constants/layout';

import { Main_HEADER_VARIANTS, MainHeaderVariantType } from './MainHeader.data';
import MainHeaderDrawer from './_fragments/MainHeaderDrawer';
import LogoComponent from '@components/common/New/LogoComponent';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes';

interface MainHeaderProps extends ChakraProps{
  variant?: MainHeaderVariantType;
}

const MainHeader = ({ variant = 'light', ...basisProps}: MainHeaderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const route = useRouter()
  const handleCartOnclick = () => route.push({pathname:ROUTES.CART})
  const cssByVariant = Main_HEADER_VARIANTS[variant];

  return (
    <>
      <Flex //
        as="header"
        px={'16px'}
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        zIndex="sticky"
        transition="all 0.3s"
        w="375px"
        h={LAYOUT.HEADER.HEIGHT}
        background="white"
        {...basisProps}
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
        <LogoComponent align='center' aria-label={'btn-header-logo'} />
        <IconButton //
          color='black'
          icon={<CartIcon />}
          onClick={handleCartOnclick}
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
