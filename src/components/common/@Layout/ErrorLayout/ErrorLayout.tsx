import React from 'react';

import {
  CenterProps,
  Container,
  ContainerProps,
} from '@chakra-ui/react';



interface ErrorLayoutProps {
  content?: JSX.Element;
  containerProps?: ContainerProps;
  centerProps?: CenterProps
}

const ErrorLayout = ({
  //
  containerProps,
  content,
}: ErrorLayoutProps) => {
  return (
    <>
      <Container 
      w="375px" h="812px" 
      display="flex" flexDir="column" 
      alignItems="center" bg="white" {...containerProps}>
        {content}
      </Container>
    </>
  );
};

export default ErrorLayout;