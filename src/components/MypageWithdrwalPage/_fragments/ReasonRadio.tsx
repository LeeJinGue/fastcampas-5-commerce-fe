import { useRadio, chakra, Flex, Input, Text, RadioProps } from '@chakra-ui/react'
import CheckboxIcon from '@components/common/New/@Icons/System/CheckboxIcon'
import React, { useState } from 'react'
interface ReasonRadioProps extends RadioProps{
  reasonText: string,
  additionalReason: string,
  setAdditionalReason: React.Dispatch<React.SetStateAction<string>>,
  isAdditional: boolean,
}
const ReasonRadio = ({ ...props }: ReasonRadioProps) => {
  const { reasonText, additionalReason, setAdditionalReason,isAdditional, key, ...radioProps } = props
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(radioProps)

  return (
    <chakra.label {...htmlProps} cursor='pointer' key={key}>
      <Flex alignItems="center" mb="10px">
        <input {...getInputProps({})} hidden />
        <CheckboxIcon {...getCheckboxProps()} state={state.isChecked ? 'Select' : 'Default'} shape={'Circle'} />
        <Text textStyle="text" textColor="black" ml="10px">{reasonText}</Text>
      </Flex>
      {reasonText === "기타" &&
        <Input
          disabled={!isAdditional}
          boxSizing='border-box' pl="20px" textStyle="text" h="40px" w="full"
          border={"1px solid"} borderColor="black" borderRadius="100px"
          placeholder='사유를 입력해주세요.'
          value={additionalReason} onChange={(e) => setAdditionalReason(e.target.value)}
          autoComplete="off" />}
    </chakra.label>
  )
}

export default ReasonRadio;