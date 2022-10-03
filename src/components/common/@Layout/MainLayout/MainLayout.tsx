import React from 'react';

import { motion } from 'framer-motion';

import {
  Box,
  BoxProps,
  Center,
  Container,
  ContainerProps,
  Image,
  Flex,
  Text,
} from '@chakra-ui/react';
import WebChatIcon from '@components/common/@Icons/Social/Default/WebChat';
import DefaultKakaoTextIcon from '@components/common/@Icons/Social/Default/KakaoText';
import DefaultInstgramIcon from '@components/common/@Icons/Social/Default/Instagram';
import DefaultLineIcon from '@components/common/@Icons/Social/Default/Line';
import MainHeader from './MainHeader/MainHeader';
import { LAYOUT } from '@constants/layout';
import MainFooter from './MainFooter/MainFooter';


interface MainLayoutProps {
  title?: string | JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  minH?: string;
  containerProps?: ContainerProps;
}

const MainLayout = ({
  //
  header = <MainHeader left="50%" transform="translate(-50%, 0)" />,
  footer = <MainFooter left="50%" transform={"translate(-50%, 0)"}/>,
  containerProps,
  content,
  minH = "782px",
}: MainLayoutProps) => {
  return (
    <>
      {header}
      <Container
        minH={minH}
        display="flex"
        alignItems="center"
        flexDirection="column"
        w={"375px"}
        mb="0"
        boxSizing='border-box'
        {...containerProps}
        >
        {content}
      </Container>
      {footer}
    </>
  );
};

export default MainLayout;