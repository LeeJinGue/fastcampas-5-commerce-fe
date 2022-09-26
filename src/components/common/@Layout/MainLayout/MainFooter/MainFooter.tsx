import { useDisclosure, Flex, IconButton, MenuIcon, Text, ChakraProps } from "@chakra-ui/react";
import CartIcon from "@components/common/@Icons/System/Cart";
import { LAYOUT } from "@constants/layout";
import { MainHeaderVariantType, Main_HEADER_VARIANTS } from "./MainFooter.data";

interface MainHeaderProps extends ChakraProps {
  variant?: MainHeaderVariantType;
}

const MainFooter = ({ variant = 'light', ...basisProps }: MainHeaderProps) => {
  return (
    <>
      <Flex // Footer 전체를 담음
        as="footer"
        px='16px'
        pt="35px"
        position="relative"
        flexDirection="column"
        alignItems="start"
        transition="all 0.3s"
        boxSizing="border-box"
        w="375px"
        h="280px"
        background="gray.800"
        color="white"
        {...basisProps}
      >
        <Text textStyle="title" mb="30px">INCOURSE.RUN</Text>
        <Text textStyle="textSmall" mb="10px">팀명 | 인코스런</Text>
        <Text textStyle="textSmall" mb="10px">구성원 | 홍길동, 홍길동, 홍길동, 홍길동</Text>
        <Text textStyle="textSmall" mb="40px">이메일 | incourse.run@gmail.com</Text>
        <Text textStyle="textSmall" >ⓒINCOURSE.RUN All Right Reserved</Text>
      </Flex>
    </>
  );
};

export default MainFooter;
