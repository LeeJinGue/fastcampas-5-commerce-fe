import { Flex, FlexProps, IconButton, Text } from '@chakra-ui/react';
import { ROUTES } from '@constants/routes';
import { useRouter } from 'next/router';
import React from 'react'
import PrimaryButton from './PrimaryButton';
import LogoFullIcon from './@Icons/LogoFullIcon';
interface ErrorPageProps extends FlexProps {

}
function ErrorPage({ ...basisProps }: ErrorPageProps) {
  const containerWidth = "262px"
  const route = useRouter()
  const handleGoBack = () => route.back()
  const handleGoHome = () => route.push(ROUTES.HOME)
  return (
    <Flex w="375px" h="782px" px="32px" flexDir="column" justifyContent="center" alignItems="center" bgColor="white" {...basisProps} >
      <IconButton
        aria-label='btn-header-logo'
        icon={<LogoFullIcon logoColor='#FF710B' />}
        onClick={handleGoHome}
        bgColor="transparent"
        p="5px"
        w={containerWidth} h={"36px"}
      >
      </IconButton>
      <Flex mt="40px" flexDir="column" justifyContent="start">
        <Text textStyle="title">{"죄송합니다."}</Text>
        <Text textStyle="title">{"요청하신 페이지를 찾을 수 없습니다."}</Text>
        <Text textStyle="textSmall">{"방문하시려는 페이지의 주소를 다시 한번 확인해주세요"}</Text>
      </Flex>
      <Flex w="full" mt="40px" justifyContent="space-evenly">
        <PrimaryButton onClick={handleGoHome} btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'}>{"인코스런 홈으로"}</PrimaryButton>
        <PrimaryButton onClick={handleGoBack} btntype={'Line'} btnstate={'Primary'} btnshape={'Round'}>{"이전 페이지"}</PrimaryButton>
      </Flex>
    </Flex>
  )
}
export default ErrorPage; 