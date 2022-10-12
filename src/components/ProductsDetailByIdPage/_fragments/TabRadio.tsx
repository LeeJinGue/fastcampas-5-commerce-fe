import { useRadio, chakra, Flex, Input, Text, RadioProps } from '@chakra-ui/react'
import Badge from '@components/common/New/Badge';
import CheckboxIcon from '@components/common/New/@Icons/System/CheckboxIcon'
import React, { useState } from 'react'
interface TabRadioProps extends RadioProps{
  tabName: string,
}
const TabRadio = ({ ...props }: TabRadioProps) => {
  const { tabName, key, ...radioProps } = props
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(radioProps)
  return (
    <chakra.label {...htmlProps} cursor='pointer' key={key}>
      <Flex alignItems="center" h="80px">
        <input {...getInputProps({})} hidden />
        <Text 
        textColor={state.isChecked ? "primary.500" : "gray.600"}
        textStyle={state.isChecked ? "title" : "text"}
        {...getCheckboxProps()} >{tabName}</Text>
      </Flex>
    </chakra.label>
  )
}

export default TabRadio;