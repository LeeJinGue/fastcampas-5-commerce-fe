import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, Container } from '@chakra-ui/react';
import HandsClappingIcon from '@components/common/New/@Icons/HandsClapping';
import PrimaryButton from '@components/common/New/PrimaryButton';
import { useRouter } from 'next/router';

interface SignupSuccessPageProps extends ChakraProps {}

const SignupSuccessPage = ({ ...basisProps }: SignupSuccessPageProps) => {
  const router = useRouter()
  const handleStart = () => router.replace("/")
  return (
    <Flex flexDir="column" alignItems="center" w="100%" h="100%" px="16px" pt="80px" {...basisProps} >
      <Text textAlign="start" w="100%" color="black" textStyle="extraLargeBold">{"회원가입이"}</Text>
      <Text textAlign="start" w="100%" color="black" textStyle="extraLargeBold">{"완료되었습니다."}</Text>
      <Text textAlign="start" w="100%" mb="100px" color="gray.600" textStyle="textSmall">{"관심사별로 자유롭게 소통해보세요!."}</Text>
      <HandsClappingIcon mb="237px" />
      <PrimaryButton onClick={handleStart} w="100%" h="50px">시작하기</PrimaryButton>
    </Flex>
  );
}

export default SignupSuccessPage;
