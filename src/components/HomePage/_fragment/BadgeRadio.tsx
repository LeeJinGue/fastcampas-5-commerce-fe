import { useRadio, chakra, Flex, Input, Text, RadioProps } from '@chakra-ui/react'
import Badge from '@components/common/New/Badge';
import CheckboxIcon from '@components/common/New/@Icons/System/CheckboxIcon'
import React, { useState } from 'react'
interface BadgeRadioProps extends RadioProps{
  badgeName: string,
}
const BadgeRadio = ({ ...props }: BadgeRadioProps) => {
  const { badgeName, key, ...radioProps } = props
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(radioProps)
    // console.log(`# ${badgeName} state:`,state)
    // console.log(`# checkboxProps :`,{...getCheckboxProps()})
    return (
    <chakra.label {...htmlProps} cursor='pointer' key={key}>
      <Flex alignItems="center" ml="10px">
        <input {...getInputProps({})} hidden />
        <Badge {...getCheckboxProps()} mode={state.isChecked ? 'on' : 'off'}>{badgeName}</Badge>
      </Flex>
    </chakra.label>
  )
}

export default BadgeRadio;