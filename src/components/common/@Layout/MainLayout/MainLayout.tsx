import React from 'react';
import {
  Container,
  ContainerProps,
} from '@chakra-ui/react';
import MainHeader from './MainHeader/MainHeader';
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