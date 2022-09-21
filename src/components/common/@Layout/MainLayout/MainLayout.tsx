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
import WebChatIcon from '@components/common/@Icons/Social/Default/WebChat';
import DefaultKakaoTextIcon from '@components/common/@Icons/Social/Default/KakaoText';
import DefaultInstgramIcon from '@components/common/@Icons/Social/Default/Instagram';
import DefaultLineIcon from '@components/common/@Icons/Social/Default/Line';
import MainHeader from './MainHeader/MainHeader';
import { LAYOUT } from '@constants/layout';
import MainFooter from './MainFooter/MainFooter';


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
  header = <MainHeader />,
  footer = <MainFooter />,
  containerProps,
  content,
}: MainLayoutProps) => {
  return (
    <>
      <Container
        minH="782px"
        width="375px"
        background="grey"
        display="flex"
        alignItems="center"
        flexDirection="column"
        fontSize='8pt'
        boxSizing='border-box'
        {...containerProps}
        >
            {header}
          <Container py={LAYOUT.HEADER.HEIGHT} display="flex" flexDirection="column" // body부분
          >
            {title}
            아이콘테스트
            <WebChatIcon w='48px' h='48px' />
            <DefaultLineIcon />
            {content}
          </Container>
      </Container>
      <Center>{footer}</Center>
    </>
  );
};

export default MainLayout;