import React from 'react';
import {
  Box,
  Text
} from '@chakra-ui/react';
import PrimaryButton from '@components/common/New/PrimaryButton';
import { SignupPageProps } from './SignupPage.type';
import ProfileForm from './_fragments/ProfileForm';
import AdditionalInfoForm from './_fragments/AdditionalInfoForm';
import TermsOfServiceForm from './_fragments/TermsOfServiceForm';

const SignupPageView = ({
  formData: {
    register,
    control,
    formState: { errors },
    setValue,
  },
  onSubmit,
  ...basisProps
}: SignupPageProps) => {
  console.log("errors:", errors)
  return (
    <Box as="form" onSubmit={onSubmit} px="16px" {...basisProps}>
      <Text textStyle="extraLargeBold" mt="10px">회원가입</Text>
      <ProfileForm mt="60px" errors={errors} register={register}  onSubmit={onSubmit} />
      <AdditionalInfoForm control={control} errors={errors} />
      <TermsOfServiceForm control={control} errors={errors} register={register} setValue={setValue}/>
      <PrimaryButton w="343px" h="50px" mb="50px" type='submit'>회원가입 완료</PrimaryButton>
    </Box>
  );
};

export default SignupPageView;
