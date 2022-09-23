import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import { Select } from 'chakra-react-select';

import {
  Box,
  BoxProps,
  Button,
  ChakraProps,
  CheckboxGroup,
  FormLabelProps,
  Input,
  InputProps,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  Text
} from '@chakra-ui/react';

import FormHelper from '@components/common/FormHelper';

import { FormDataType } from './_hooks/useExampleForm';
import CheckLineIcon from '@components/common/New/@Icons/System/CheckLine';
import CheckCircleIcon from '@components/common/New/@Icons/System/CheckCircle';
import PrimaryButton from '@components/common/New/PrimaryButton';
import { FormLabelProp, FormPageProps } from './SignupPage.type';
import ProfileForm from './_fragments/ProfileForm';
import AdditionalInfoForm from './_fragments/AdditionalInfoForm';
import TermsOfServiceForm from './_fragments/TermsOfServiceForm';



const FormPageView = ({
  formData: {
    register,
    control,
    formState: { errors },
    setValue,
  },
  onSubmit,
  ...basisProps
}: FormPageProps) => {
  const [checkedItems, setCheckedItems] = React.useState([false, false, false])
  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  console.log("errors:", errors)
  return (
    <Box as="form" onSubmit={onSubmit} px="16px" {...basisProps}>
      <Text textStyle="extraLargeBold" mt="10px">회원가입</Text>
      <ProfileForm mt="60px" errors={errors} register={register}  onSubmit={onSubmit} />
      <AdditionalInfoForm control={control} errors={errors} />
      <TermsOfServiceForm control={control} errors={errors} register={register} setValue={setValue}/>
      <PrimaryButton mb="50px" type='submit'>회원가입 완료</PrimaryButton>
    </Box>
  );
};

export default FormPageView;
