import { ActionMeta, ChakraStylesConfig, Select } from 'chakra-react-select';
import React from 'react'

const inputSelectStyle: ChakraStylesConfig = {
  option: (provided, state) => ({
    ...provided,
    _hover: { backgroundColor: "bgHover" },
    _focus: { backgroundColor: "bgHover" },
    background: state.isSelected ? 'bgHover' : "white",
    textColor: "black",
  }),
  downChevron: (provided, state) => ({
    w: "24px",
    h: "24px"
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    background: "white",
    p: 0,
  }),
  valueContainer: (provided, state) => ({
      ...provided,
      p: 0,
      textStyle: "title",
      textColor: "black",
      _hover: {cursor:"pointer", backgroundColor: "bgHover"},
      _focus: {cursor:"pointer", backgroundColor: "bgHover"},
  }),
  singleValue: (provided, state) => ({
    ...provided,
    p: 0,
    textStyle: "text",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    p: 0,
    textStyle: "text",
    color: "gray.400",
  }),
  container: (provided, state) => ({
    ...provided,
    border: "0px solid white",
    borderBottom: "2px solid #CBCED6",
    p: 0,
  }),
}
type selectOptionType = {
  value: string,
  label: string
}
interface InputSelectProps {
  selectOption: selectOptionType[],
  placeholder: string,
  defaultValue?: selectOptionType,
  onChange: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void,
}

const InputSelect = ({
  selectOption,
  placeholder,
  defaultValue,
  onChange,
  ...basisProps
}: InputSelectProps) => {
  return (
    <Select
      defaultValue={defaultValue}
      isSearchable={false}
      chakraStyles={inputSelectStyle}
      components={
        {
          IndicatorSeparator: () => null,
        }}
      onChange={onChange}
      placeholder={placeholder}
      options={selectOption}
      {...basisProps}
    />
  )
}
export default InputSelect;



