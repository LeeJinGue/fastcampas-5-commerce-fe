import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import LogoWhiteIcon from '@components/common/New/@Icons/LogoFullIcon';
import { CONFIG } from '@config';
import { SOCIAL } from '@constants/social';
import KakaoButton, { SocialType } from '@components/common/KakaoButton';
const SOCIAL_DATA: { social: SocialType; link: string } = 
  {
    social: 'kakao',
    link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${SOCIAL.KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL.REDIRECT_URL}&state=kakao`,
  }

interface LoginPageProps extends ChakraProps {}

const LoginPage = ({ ...basisProps }: LoginPageProps) => {
  return (
    <>
      <LogoWhiteIcon logoColor='#FFFFFF' w="262" h="36" mt="340px"/>
      <KakaoButton mt="340px" data={SOCIAL_DATA}></KakaoButton>
      </>
  );
}
export default LoginPage;
