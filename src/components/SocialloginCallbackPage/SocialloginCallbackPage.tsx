import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { SOCIAL } from '@constants/social';
import { useGetUserDataQuery } from '@apis/user/UserApi.query';
import { setToken } from '@utils/localStorage/token';
interface SocialloginCallbackPageProps extends ChakraProps { }
const grant_type = "authorization_code"
const client_id = SOCIAL.KAKAO_CLIENT_ID
const redirect_url = SOCIAL.REDIRECT_URL
function SocialloginCallbackPage({
  ...basisProps
}: SocialloginCallbackPageProps) {
  const route = useRouter()
  const { code, state } = route.query
  React.useEffect(() => {
    if (code !== undefined) {
      console.log("#code:", code)
      axios.post(`https://api.commerce.incourse.run/v1/user/social_login/`,
        { code: code, state: state },
        {
          headers: {
            "Content-type": 'application/json'
          }
        }
      ).then((res) => {
        console.log("#get res:", res)
        if (res.data) {
          const { isRegister } = res.data
          if (!isRegister) {
            // 등록이 안되어있다면 
            // socialToken을 Query로 넘기면서 
            // 회원가입 페이지로 이동합니다.
            const { socialToken } = res.data
            route.push({
              pathname: "/signup",
              query: {
                socialToken,
              }
            })
          }
          if (isRegister) {
            // 등록이 되어있다면
            // accessToken, refreshToken을 저장하고
            // 메인 페이지로 이동합니다.
            const { access, refresh } = res.data
            setToken({ isRegister, access, refresh })
            route.replace({
              pathname: "/",
            })
          }
        }
      }).catch((err) => {
        console.log("#get err:", err)
      })
      // axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_url=${redirect_url}&code=${code.toString()}`,{},
      //   { headers:{
      //   'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      //     },}).then((response) => {
      //   console.log("#response:",response) 
      //   // 일단 무조건 회원가입 페이지로 이동
      //   route.replace("/signup")
      // }).catch((err) => {
      //   console.log("#error:",err)
      // })
    }
  }, [code])

  return (
    <Box {...basisProps}>
      <Text>SocialloginCallbackPage</Text>
    </Box>
  );
}

export default SocialloginCallbackPage;
