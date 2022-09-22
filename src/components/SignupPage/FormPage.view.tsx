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
      {/* <AdditionalInfoForm />
      <TermsOfServiceForm /> */}

      {/* <FormHelper mb="50px" label="이름" labelProps={FormLabelProp} errorText={errors.username?.message}>
        <Input
          boxSizing='border-box' p="0px 0px 0px 20px" textStyle="text" h="40px" w="343px" border={"1px solid #1A1A1A"} borderRadius="100px"
          {...register('username')} autoComplete="off" />
      </FormHelper>

      <FormHelper mb="50px" label="닉네임" labelProps={FormLabelProp} errorText={errors.nickname?.message}>
        <Input {...register('nickname')} autoComplete="off"
          boxSizing='border-box' p="0px 0px 0px 20px" textStyle="text" h="40px" w="343px" border={"1px solid #1A1A1A"} borderRadius="100px"
        />
      </FormHelper>

      <FormHelper mb="50px" label="핸드폰 번호" labelProps={FormLabelProp} errorText={errors.phone?.message}>
        <Input flexGrow={1} {...register('phone')} autoComplete="off"
          boxSizing='border-box' p="0px 0px 0px 20px" textStyle="text" h="40px" w="343px" border={"1px solid #1A1A1A"} borderRadius="100px"
        />
      </FormHelper>

      <FormHelper mb="50px" label="이메일 주소" textStyle="titleSmall"
        labelProps={FormLabelProp}
        errorText={errors.email?.message}>
        <Input {...register('email')} autoComplete="off"
          boxSizing='border-box' p="0px 0px 0px 20px" textStyle="text" h="40px" w="343px" border={"1px solid #1A1A1A"} borderRadius="100px"
        />
      </FormHelper> */}

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
              placeholder="성별을 선택하세요"
            />
          </FormHelper>
        )}
      />
      <Controller
        control={control}
        name="age"
        render={({ field: { onChange } }) => (
          <FormHelper
            mb="50px"
            label="연령대"
            labelProps={FormLabelProp}
            errorText={errors.age?.value?.message}
          >
            <Select
              isSearchable={false}
              onChange={onChange}
              options={[
                { value: '10대', label: '10대' },
                { value: '20대', label: '20대' },
                { value: '30대', label: '30대' },
                { value: '40대', label: '40대' },
                { value: '50대', label: '50대' },
                { value: '60대', label: '60대' },
                { value: '70대', label: '70대' },
                { value: '80대 이상', label: '80대 이상' },
              ]}
              placeholder="연령대를 선택하세요"
            />
          </FormHelper>
        )}
      />
      <FormHelper mb="50px" label="서비스 필수약관" textStyle="titleSmall"
        labelProps={FormLabelProp}
        errorText={errors.tosService?.message || errors.tosPrivacy?.message}>
          <Box w="343px" h="40px" display="flex" alignItems="center" justifyContent="space-between" borderBottom="2px solid" borderColor="primary.500">
            <Text textStyle="title" color="primary.500">{"아래 약관에 모두 동의합니다."}</Text>
            <Checkbox 
            isIndeterminate={isIndeterminate}
            onChange={(e) => setCheckedItems([e.target.checked, e.target.checked, e.target.checked])}
            isChecked={allChecked} icon={<CheckCircleIcon />
            }></Checkbox>
          </Box>
          <Box w="343px" h="40px" display="flex" alignItems="center" justifyContent="space-between" >
            <Text textStyle="textSmallActive" color="gray.600">{"서비스 이용을 위한 필수약관 동의"}</Text>
            <Checkbox 
            {...register('tosService')}
            onChange={(e) => {
              setCheckedItems([e.target.checked, checkedItems[1], checkedItems[2]])
              setValue('tosService', e.target.checked)
            }}
            isChecked={checkedItems[0]}
            icon={<CheckLineIcon />} 
            ></Checkbox>
          </Box>
          <Box w="343px" h="40px" display="flex" alignItems="center" justifyContent="space-between" >
            <Text textStyle="textSmallActive" color="gray.600">{"개인정보수집 및 이용, 제3자 제공 동의"}</Text>
            <Checkbox 
            {...register('tosPrivacy')}
            onChange={(e) => {
              setCheckedItems([ checkedItems[0],e.target.checked, checkedItems[2]])
              setValue('tosPrivacy', e.target.checked)
            }}
            isChecked={checkedItems[1]}
            icon={<CheckLineIcon />}
            ></Checkbox>
          </Box>
          <Box w="343px" h="40px" display="flex" alignItems="center" justifyContent="space-between" >
            <Text textStyle="textSmallActive" color="gray.600">{"마케팅 정보 수신 및 맞춤형 광고 동의(선택)"}</Text>
            <Checkbox 
            {...register('tosMarketing')}
            onChange={(e) => {
              setCheckedItems([checkedItems[0], checkedItems[1],e.target.checked])
              setValue('tosMarketing', e.target.checked)
            }}
            isChecked={checkedItems[2]}
            icon={<CheckLineIcon />}
            ></Checkbox>
          </Box>
      </FormHelper>
      <PrimaryButton mb="50px" type='submit'>회원가입 완료</PrimaryButton>
    </Box>
  );
};

export default FormPageView;
