import React from 'react';

import {
  CenterProps,
  Container,
  ContainerProps,
} from '@chakra-ui/react';



interface LoginLayoutProps {
  content?: JSX.Element;
  containerProps?: ContainerProps;
  centerProps?: CenterProps
}

const LoginLayout = ({
  //
  containerProps,
  content,
}: LoginLayoutProps) => {
  return (
    <>
      <Container 
      w="375px" h="812px" 
      display="flex" flexDir="column" 
      alignItems="center" bg="primary.500" {...containerProps}>
        {content}
      </Container>
    </>
  );
};

export default LoginLayout;