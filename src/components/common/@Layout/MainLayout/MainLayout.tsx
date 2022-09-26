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
  title: string | JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const MainLayout = ({
  //
  header = <MainHeader bg="transparent" left="50%" transform="translate(-50%, 0)" />,
  footer = <MainFooter left="50%" transform={"translate(-50%, 0)"}/>,
  containerProps,
  content,
}: MainLayoutProps) => {
  return (
    <>
      {header}
      <Container
        minH="782px"
        width="375px"
        display="flex"
        alignItems="center"
        flexDirection="column"
        fontSize='8pt'
        boxSizing='border-box'
        backgroundImage="/images/main1.png"
        {...containerProps}
        >
            
          <Container py={LAYOUT.HEADER.HEIGHT} display="flex" flexDirection="column" // body부분
          >
            {content}
          </Container>
      </Container>
      {footer}
    </>
  );
};

export default MainLayout;