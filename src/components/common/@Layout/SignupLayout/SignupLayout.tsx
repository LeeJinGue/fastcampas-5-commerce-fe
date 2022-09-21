import React from 'react';

import {
  CenterProps,
  Container,
  ContainerProps,
} from '@chakra-ui/react';
import SignupHeader from './SignupHeader';

interface SignupLayoutProps {
  header?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
  centerProps?: CenterProps
}

const SignupLayout = ({
  //
  header = <SignupHeader />,
  containerProps,
  content,
}: SignupLayoutProps) => {
  return (
    <>
      <Container 
      w="375px" h="812px" 
      display="flex" flexDir="column" 
      alignItems="start" bg="white" {...containerProps}>
        {header}
        {content}
      </Container>
    </>
  );
};

export default SignupLayout;