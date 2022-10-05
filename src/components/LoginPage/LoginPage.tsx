import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import LogoWhiteIcon from '@components/common/New/@Icons/LogoWhite';
import { CONFIG } from '@config';
import { SOCIAL } from '@constants/social';
import KakaoButton, { SocialType } from '@components/common/KakaoButton';

interface LoginPageProps extends ChakraProps {}
const REDIRECT_URL="http://localhost:3000/social_login/callback"
const SOCIAL_REDIRECT_URL = `${CONFIG.DOMAIN}`;

const SOCIAL_DATA: { social: SocialType; link: string } = 
  {
    social: 'kakao',
    link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${SOCIAL.KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL.REDIRECT_URL}&state=kakao`,
  }

const LoginPage = ({ ...basisProps }: LoginPageProps) => {
  return (
    <>
      <LogoWhiteIcon w="262" h="36" mt="340px"/>
      <KakaoButton mt="340px" data={SOCIAL_DATA}></KakaoButton>
      </>
  );
}

export default LoginPage;
