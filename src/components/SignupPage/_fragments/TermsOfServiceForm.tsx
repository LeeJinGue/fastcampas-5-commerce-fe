import { Box, BoxProps, Text, Checkbox, Input, chakra, useCheckbox, Flex, useCheckboxGroup, Stack, Button } from "@chakra-ui/react";
import CheckLineIcon from "@components/common/New/@Icons/System/CheckLine";
import FormHelper from "@components/common/FormHelper/FormHelper";
import CheckCircleIcon from "@components/common/New/@Icons/System/CheckCircle";
import React from "react";
import { Control, FieldErrors, UseFormGetValues, UseFormRegister, UseFormSetValue, UseFormWatch, useWatch } from "react-hook-form";
import { FormDataType } from "../_hooks/useExampleForm";
import Link from "next/link";

interface TermsOfServiceFormProps extends BoxProps {
  errors: FieldErrors<FormDataType>;
  control: Control<FormDataType, any>;
  register: UseFormRegister<FormDataType>,
  setValue: UseFormSetValue<FormDataType>,
  watch: UseFormWatch<FormDataType>,
}
const TermsOfServiceForm = ({
  errors,
  control,
  register,
  setValue,
  watch,
  ...basisProps
}: TermsOfServiceFormProps) => {
  const [allCheck, setAllCheck] = React.useState(false);
  const tosPrivacy = useWatch({
    control,
    name: "tos.privacy"
  })
  const tosService = useWatch({
    control,
    name: "tos.service"
  })
  const tosMarketing = useWatch({
    control,
    name: "tos.marketing"
  })
  const isIndeterminate = (tosPrivacy || tosMarketing || tosService) && !allCheck
  React.useEffect(() => {
    setAllCheck(tosPrivacy && tosService && tosMarketing)
  }, [tosPrivacy, tosService, tosMarketing])
  return <>
    <Box mt="80px" // 약관 동의
      {...basisProps}
      flexDir="column">
      <Text textStyle="title" mb="40px">이용약관동의</Text>
      <FormHelper mb="50px" textStyle="titleSmall"
        errorText={errors.tos?.service?.message || errors.tos?.privacy?.message}>
        <Box mb="20px" w="343px" h="40px" display="flex" alignItems="center" justifyContent="space-between" borderBottom="2px solid" borderColor="primary.500">
          <Text textStyle="title" color="primary.500">{"아래 약관에 모두 동의합니다."}</Text>
          <Checkbox
            isIndeterminate={isIndeterminate}
            onChange={(e) => {
              setValue('tos.service', e.target.checked, {
                shouldValidate: true,
                shouldDirty: true
              })
              setValue('tos.privacy', e.target.checked, {
                shouldValidate: true,
                shouldDirty: true
              })
              setValue('tos.marketing', e.target.checked, {
                shouldValidate: true,
                shouldDirty: true
              })
            }}
            isChecked={allCheck}
            icon={<CheckCircleIcon isChecked={allCheck} />
            }></Checkbox>
        </Box>
        <Box mb="10px" w="343px" h="50px" display="flex" alignItems="center" justifyContent="space-between" >
          <a href={"https://www.google.com"}>
            <Text textStyle="textSmallActive" color="gray.600">{"서비스 이용을 위한 필수약관 동의"}</Text>
          </a>
          <Checkbox
            {...register('tos.service')}
            isChecked={tosService}
            icon={<CheckLineIcon isChecked={tosService} />}
          ></Checkbox>
        </Box>
        <Box mb="10px" w="343px" h="50px" display="flex" alignItems="center" justifyContent="space-between" >
          <a href={"https://www.google.com"}>
            <Text textStyle="textSmallActive" color="gray.600">{"개인정보수집 및 이용, 제3자 제공 동의"}</Text>
          </a>
          <Checkbox
            {...register('tos.privacy')}
            isChecked={tosPrivacy}
            backdropBlur="white"
            backgroundColor="white"
            icon={<CheckLineIcon isChecked={tosPrivacy} />}
          ></Checkbox>
        </Box>
        <Box w="343px" h="50px" display="flex" alignItems="center" justifyContent="space-between" >
          <a href={"https://www.google.com"}>
            <Text textStyle="textSmallActive" color="gray.600">{"마케팅 정보 수신 및 맞춤형 광고 동의(선택)"}</Text>
          </a>
          <Checkbox
            {...register('tos.marketing')}
            bg="white"
            isChecked={tosMarketing}
            icon={<CheckLineIcon isChecked={tosMarketing} />}
          ></Checkbox>
        </Box>
      </FormHelper>
    </Box>
  </>
}
export default TermsOfServiceForm;