import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import { Select } from 'chakra-react-select';

import {
  Box,
  BoxProps,
  Button,
  ChakraProps,
  FormLabelProps,
  Input,
  InputProps,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';

import FormHelper from '@components/common/FormHelper';

import { FormDataType } from './_hooks/useExampleForm';

interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}
const FormLabelProp: FormLabelProps = {
  marginBottom: "10px",
  color: "primary.500",
  fontSize: "12px",
  lineHeight: "18px",
  fontWeight: 700,
  fontStyle: "normal",
}

const SignupInput = ( {...basisProps}) => {
  return <Input boxSizing='border-box' p="0px 0px 0px 20px" textStyle="text" h="40px" w="343px" border={"1px solid #1A1A1A"} borderRadius="100px" {...basisProps} />
}

const FormPageView = ({
  formData: {
    register,
    control,
    formState: { errors },
  },
  onSubmit,
  ...basisProps
}: FormPageProps) => {
  console.log("errors:", errors)
  return (
    <Box as="form" onSubmit={onSubmit} {...basisProps}>
      <FormHelper mb="50px" label="이름" labelProps={FormLabelProp} errorText={errors.username?.message}>
        <Input 
        boxSizing='border-box' p="0px 0px 0px 20px" textStyle="text" h="40px" w="343px" border={"1px solid #1A1A1A"} borderRadius="100px"
        {...register('username')} autoComplete="off" />
      </FormHelper>
      <FormHelper mb="50px" label="닉네임" labelProps={FormLabelProp} errorText={errors.username?.message}>
        <Input {...register('nickname')} autoComplete="off"
        boxSizing='border-box' p="0px 0px 0px 20px" textStyle="text" h="40px" w="343px" border={"1px solid #1A1A1A"} borderRadius="100px"
        />
      </FormHelper>
      <FormHelper mb="50px" label="이메일" textStyle="titleSmall" 
      labelProps={FormLabelProp} 
      errorText={errors.email?.message}>
        <Input {...register('email')} autoComplete="off"
        boxSizing='border-box' p="0px 0px 0px 20px" textStyle="text" h="40px" w="343px" border={"1px solid #1A1A1A"} borderRadius="100px"
        />
      </FormHelper>

      <FormHelper mb="50px" label="전화번호" labelProps={FormLabelProp} errorText={errors.phone?.message}>
        <Input flexGrow={1} {...register('phone')} autoComplete="off"
        boxSizing='border-box' p="0px 0px 0px 20px" textStyle="text" h="40px" w="343px" border={"1px solid #1A1A1A"} borderRadius="100px"
        />
      </FormHelper>

      <Controller
        control={control}
        name="gender"
        render={({ field: { onChange } }) => (
          <FormHelper
            mb="50px"
            label="성별"
            labelProps={FormLabelProp}
            errorText={errors.gender?.value?.message}
          >
            <Select
              isSearchable={false}
              onChange={onChange}
              options={[
                { value: 'men', label: '남자' },
                { value: 'women', label: '여자' },
              ]}
              placeholder=""
            />
          </FormHelper>
        )}
      />

      <Controller
        control={control}
        name="fruit"
        render={({ field: { onChange } }) => (
          <FormHelper mb="40px" label="과일" errorText={errors.fruit?.message}>
            <RadioGroup onChange={onChange}>
              <Stack direction="row">
                <Radio value="apple">사과</Radio>
                <Radio value="banana">바나나</Radio>
                <Radio value="orange">오렌지</Radio>
              </Stack>
            </RadioGroup>
          </FormHelper>
        )}
      />

      <Button border="1px solid black" type="submit" position="fixed">
        확인
      </Button>
    </Box>
  );
};

export default FormPageView;
