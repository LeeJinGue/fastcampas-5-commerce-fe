import { Button, ButtonProps, Text } from '@chakra-ui/react'
import React from 'react'
import ListVerticalArrowIcon from './@Icons/System/ListVerticalArrow'
interface DetailUnfoldButtonProps extends ButtonProps{
  isclose: boolean,
}
const OPEN_TEXT = "상세정보 접기"
const CLOSE_TEXT = "상세정보 펼쳐보기"
function DetailUnfoldButton({isclose,...props}:DetailUnfoldButtonProps) {
  return (
    <Button
    w="343px" h="50px"
    justifyContent="center"
    bg="white"
    border="1px solid"
    borderColor="black"
    borderRadius="50px"
    rightIcon={<ListVerticalArrowIcon state={isclose} colortype='Black' />}
    iconSpacing="5px"
    boxSizing="border-box"
      {...props}>
        <Text textAlign="center" textColor="black"
        textStyle="button">{isclose ? CLOSE_TEXT : OPEN_TEXT}</Text>
    </Button>
  )
}

export default DetailUnfoldButton