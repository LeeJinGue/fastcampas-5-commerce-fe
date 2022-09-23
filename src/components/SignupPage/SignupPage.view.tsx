import React from 'react';
import {
  Box,
  BoxProps,
  Text
} from '@chakra-ui/react';
import PrimaryButton from '@components/common/New/PrimaryButton';
import ProfileForm from './_fragments/ProfileForm';
import AdditionalInfoForm from './_fragments/AdditionalInfoForm';
import TermsOfServiceForm from './_fragments/TermsOfServiceForm';
import { UseFormReturn } from 'react-hook-form';
import { FormDataType } from './_hooks/useExampleForm';
interface SignupPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}
const SignupPageView = ({
  formData: {
    register,
    control,
    formState: { errors },
    setValue,
    watch,
  },
  onSubmit,
  ...basisProps
}: SignupPageProps) => {
  return (
    <Box as="form" onSubmit={onSubmit} px="16px" {...basisProps}>
      <Text textStyle="extraLargeBold" mt="10px">회원가입</Text>
      <ProfileForm mt="60px" errors={errors} register={register}  onSubmit={onSubmit} />
      <AdditionalInfoForm control={control} errors={errors} />
      <TermsOfServiceForm watch={watch} control={control} errors={errors} register={register} setValue={setValue}/>
      <PrimaryButton w="343px" h="50px" mb="50px" type='submit'>회원가입 완료</PrimaryButton>
    </Box>
  );
};

export default SignupPageView;
