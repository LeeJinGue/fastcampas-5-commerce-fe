import React from 'react';

import { motion } from 'framer-motion';

import {
  Box,
  BoxProps,
  Center,
  Container,
  ContainerProps,
  Flex,
  Text,
} from '@chakra-ui/react';

interface MainLayoutProps {
  title: string | JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const MainLayout = ({
  //
  title,
  header,
  footer,
  containerProps,
  content,
}: MainLayoutProps) => {
  return (
    <>
      <Container
        minH="782px"
        width="375px"
        pr="16px"
        pl="16px"
        background="white"
        display="flex"
        alignItems="center"
        flexDirection="column"
        {...containerProps}
        >
        {title}
        {header}
        {content}
        {footer}
      </Container>
    </>
  );
};

export default MainLayout;