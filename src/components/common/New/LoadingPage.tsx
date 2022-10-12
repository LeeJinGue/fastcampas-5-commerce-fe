import { Flex, FlexProps, Spinner } from '@chakra-ui/react';
import React from 'react'
interface LoadingPageProps extends FlexProps{

}
function LoadingPage({...basisProps}:LoadingPageProps) {
  return (
    <Flex w="375px" h="782px" justifyContent="center" alignItems="center" bgColor="white" {...basisProps} >
      <Spinner thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='primary.500' 
        w="70px" h="70px"
        size="xl"/>
    </Flex>
  )
}
export default LoadingPage;