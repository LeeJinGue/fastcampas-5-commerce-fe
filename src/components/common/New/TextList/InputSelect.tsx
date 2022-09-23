import { ActionMeta, ChakraStylesConfig, Select } from 'chakra-react-select';
import React from 'react'

const inputSelectStyle: ChakraStylesConfig = {
  option: (provided, state) => {
    return {
    ...provided,
    background: state.isSelected ? 'grey' : "white",
  }},
  downChevron: (provided, state) => ({
    w:"24px",
    h:"24px"
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    background: "white",
    p:0,
  }),
  valueContainer:(provided, state) => ({
    ...provided,
    p: 0,
    textStyle: "title",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    p: 0,
    textStyle: "text",
  }),
  placeholder:(provided, state) => ({
    ...provided,
    p: 0,
    textStyle: "text",
    color: "gray.400",
  }),
  container: (provided, state) => ({
    ...provided,
    background: "white",
    border: "0px solid white",
    borderBottom: "2px solid #CBCED6",
    p: 0,
  }),
}
type selectOptionType = {
  value: string,
  label: string
}
interface InputSelectProps{
  selectOption: selectOptionType[],
  placeholder:string,
  onChange:(newValue: unknown, actionMeta: ActionMeta<unknown>) => void,
}

const InputSelect = ({
  selectOption,
  placeholder,
  onChange,
  ...basisProps
}:InputSelectProps) => {
  return (
        <Select
        isSearchable={false}
        chakraStyles={inputSelectStyle}
        components={
          {IndicatorSeparator : ()=>null,
        }}
        onChange={onChange}
        placeholder={placeholder}
        options={selectOption}
        {...basisProps}
    />
  )
}
export default InputSelect;



