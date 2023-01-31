import { ChakraProps, Flex, Text } from "@chakra-ui/react";
import PrimaryButton from "@components/common/New/PrimaryButton";
import { LAYOUT } from "@constants/layout";
import { ROUTES } from "@constants/routes";
import { useRouter } from "next/router";

interface EmptyCartPageProps extends ChakraProps {
}
function EmptyCartPage({ ...basisProps }: EmptyCartPageProps) {
  const route = useRouter()
  const handleGoProducts = () => route.push({pathname: ROUTES.PRODUCTS})
  return (
    <Flex
      flexDir="column" pt={LAYOUT.HEADER.HEIGHT} w="375px"
      alignItems="center" pb="80px" bgColor="white" {...basisProps}>
      <Text textStyle="title" textColor="black" textAlign="center" mt="100px">
        {"장바구니가 비어있습니다."}<br />
        {"상품을 추가해보세요!"}
      </Text> 
      <PrimaryButton onClick={handleGoProducts} mt="30px" w="180px" h="50px" btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'}>{"상품보러가기"}</PrimaryButton>
    </Flex>
  )
}

export default EmptyCartPage;