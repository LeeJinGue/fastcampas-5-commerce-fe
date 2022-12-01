import { useDisclosure, Flex, IconButton, MenuIcon, Text, ChakraProps } from "@chakra-ui/react";
import CartIcon from "@components/common/@Icons/System/Cart";
import { LAYOUT } from "@constants/layout";
import { footer_string } from "@constants/string";
import { MainHeaderVariantType, Main_HEADER_VARIANTS } from "./MainFooter.data";

interface MainHeaderProps extends ChakraProps {
  variant?: MainHeaderVariantType;
}

const MainFooter = ({ variant = 'light', ...basisProps }: MainHeaderProps) => {
  const {TEAM_EMAIL, TEAM_MEMBER, TEAM_NAME, COPYRIGHTS} = footer_string
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
        <Text textStyle="title" mb="30px">{TEAM_NAME}</Text>
        <Text textStyle="textSmall" mb="10px">{`팀명 | ${TEAM_NAME}`}</Text>
        <Text textStyle="textSmall" mb="10px">{`구성원 | ${TEAM_MEMBER}`}</Text>
        <Text textStyle="textSmall" mb="40px">{`이메일 | ${TEAM_EMAIL}`}</Text>
        <Text textStyle="textSmall" >{COPYRIGHTS}</Text>
      </Flex>
    </>
  );
};

export default MainFooter;
