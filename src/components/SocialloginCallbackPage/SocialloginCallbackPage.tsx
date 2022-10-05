import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { SOCIAL } from '@constants/social';
interface SocialloginCallbackPageProps extends ChakraProps {}
const grant_type= "authorization_code"
const client_id=SOCIAL.KAKAO_CLIENT_ID
const redirect_url=""
function SocialloginCallbackPage({
  ...basisProps
}: SocialloginCallbackPageProps) {
  const route = useRouter()
  const {code, state} = route.query
  React.useEffect(()=>{
    if(code !== undefined){
      console.log("#code:",code)
      // axios.post(`https://api.commerce.incourse.run/v1/user/social_login?code=${code}&state=${state}`,{},{headers: {
      //   "Content-type": 'application/json'
      // }}
      // ).then((res) => {
      //   console.log("#get res:",res)
      // }).catch((err) => {
      //   console.log("#get err:",err)
      // })
      axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_url=${redirect_url}&code=${code.toString()}`,{},
        { headers:{
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },}).then((response) => {
        console.log("#response:",response) 
        // 일단 무조건 회원가입 페이지로 이동
        route.replace("/signup")
      }).catch((err) => {
        console.log("#error:",err)
      })
    }
  }, [code])
  
  return (
    <Box {...basisProps}>
      <Text>SocialloginCallbackPage</Text>
    </Box>
  );
}

export default SocialloginCallbackPage;
