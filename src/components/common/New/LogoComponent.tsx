import { Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'
import ExitIcon from '../@Icons/System/Exit'
import LogoPrimaryIcon from './@Icons/LogoPrimary'
import LogoWhiteIcon from './@Icons/LogoWhite'

const COMPONENT_WIDTH = "215px"
const COMPONENT_HEIGHT = "80px"
interface LogoComponentProps extends FlexProps{
  align: string,
}
const LogoComponent = ({ align, ...props}:LogoComponentProps) => {
  return (
    <Flex flexDir="column" w={COMPONENT_WIDTH} h={COMPONENT_HEIGHT} justifyContent="center"
    alignItems="start" {...props}>
      <LogoPrimaryIcon />
    </Flex>
  )
}
export default LogoComponent;