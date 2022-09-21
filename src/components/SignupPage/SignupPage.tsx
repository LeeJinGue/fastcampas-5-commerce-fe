import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, IconButton, Center } from '@chakra-ui/react';
import ProfileIcon from '@components/common/New/@Icons/System/Profile';

interface SignupPageProps extends ChakraProps {}

function SignupPage({ ...basisProps }: SignupPageProps) {
  return (
    <Box w="100%" bg="white" {...basisProps}>
      <Text textStyle="extraLargeBold" mt="10px">회원가입</Text>
      <Box flexDir="column" mt="60px" // 프로필 입력 리스트
      >
        <Text textStyle="title">회원정보입력</Text>
        <Center flexDir="column">
          <IconButton mt="80px" aria-label='Change Profile' icon={<ProfileIcon shape='Fill' />} />
        </Center>
      </Box>
      <Box mt="80px" // 추가 정보 입력
      >
        <Text textStyle="title">추가정보입력(선택)</Text>

      </Box>
      <Box mt="80px" // 약관 동의
      >
        <Text textStyle="title">이용약관동의</Text>

      </Box>
      <Button mt="80px" // 회원가입 완료
      >
        회원가입 완료
      </Button>
    </Box>
  );
}

export default SignupPage;
