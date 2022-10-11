import React from 'react';
import {
  Box,
  BoxProps,
  Flex,
  Text
} from '@chakra-ui/react';
import PrimaryButton from '@components/common/New/PrimaryButton';
import ProfileForm from './_fragments/ProfileForm';
import AdditionalInfoForm from './_fragments/AdditionalInfoForm';
import { UseFormReturn } from 'react-hook-form';
import { EditInfoFormDataType } from './_hooks/useEditInfoForm';
import { LAYOUT } from '@constants/layout';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes';
interface EditInfoPageProps extends BoxProps {
  formData: UseFormReturn<EditInfoFormDataType>;
}
const EditInfoPageView = ({
  formData: {
    register,
    control,
    getValues,
    formState: { errors },
  },
  onSubmit,
  ...basisProps
}: EditInfoPageProps) => {
  const route = useRouter()
  const handleCancel = () => {
    route.replace({pathname:ROUTES.MYPAGE.MAIN})
  }
  return (
    <Box as="form" onSubmit={onSubmit} px="16px" pb="30px" bgColor="white" w="375px" pt={LAYOUT.HEADER.HEIGHT} {...basisProps}>
      <ProfileForm mt="50px" errors={errors} register={register}  onSubmit={onSubmit} />
      <AdditionalInfoForm mt="80px" getValues={getValues} control={control} errors={errors} />
      <Flex
      justifyContent="space-between">
        <PrimaryButton btntype='Line' btnshape='Round' btnstate='Primary' w="165px" h="50px" onClick={handleCancel}>취소</PrimaryButton>
        <PrimaryButton btntype='Solid' btnshape='Round' btnstate='Primary' w="165px" h="50px" type='submit'>저장</PrimaryButton>
      </Flex>
    </Box>
  );
};

export default EditInfoPageView;
