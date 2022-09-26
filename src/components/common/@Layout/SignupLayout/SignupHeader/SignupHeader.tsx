import { Flex, IconButton, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import MenuIcon from '@components/common/New/@Icons/System/Menu';
import CartIcon from '@components/common/New/@Icons/System/Cart';

import { LAYOUT } from '@constants/layout';
import LogoComponent from '@components/common/New/LogoComponent';

const SignupHeader = () => {

  return (
    <>
      <Flex //
        as="header"
        px='16px'
        transition="all 0.3s"
        w="375px"
        h={LAYOUT.HEADER.HEIGHT}
        background="white"
      >
        <LogoComponent align='start' />
      </Flex>
    </>
  );
};

export default SignupHeader;
