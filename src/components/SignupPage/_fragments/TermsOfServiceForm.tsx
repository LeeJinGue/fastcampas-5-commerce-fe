import { Box, BoxProps, Center, FormLabelProps, IconButton, Input,  Text, Select as ChSelect, Checkbox } from "@chakra-ui/react";
import CheckLineIcon from "@components/common/New/@Icons/System/CheckLine";
import FormHelper from "@components/common/FormHelper";
import CheckCircleIcon from "@components/common/New/@Icons/System/CheckCircle";
import ProfileIcon from "@components/common/New/@Icons/System/Profile";
import InputSelect from "@components/common/New/TextList/InputSelect";
import { ChakraStylesConfig, Select, StylesConfig } from "chakra-react-select";
import React from "react";
import { Control, Controller, FieldErrors, FormState, UseFormRegister, UseFormReturn, UseFormSetValue } from "react-hook-form";
import { FormLabelProp, FormPageProps } from "../SignupPage.type";
import { FormDataType } from "../_hooks/useExampleForm";

interface AdditionalInfoFormProps extends BoxProps {
  errors: FieldErrors<FormDataType>;
  control: Control<FormDataType, any>;
  register: UseFormRegister<FormDataType>, 
  setValue: UseFormSetValue<FormDataType>,
}
const TermsOfServiceForm = ({
  errors,
  control,
  register,
  setValue,
  ...basisProps
}: AdditionalInfoFormProps) => {
  const [checkedItems, setCheckedItems] = React.useState([false, false, false])
  const allChecked = checkedItems.every(Boolean)
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  return <>
    <Box mt="80px" // 약관 동의
    {...basisProps}
    flexDir="column">
        <Text textStyle="title" mb="40px">이용약관동의</Text>
        <FormHelper mb="50px" textStyle="titleSmall"
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
    </Box>
  </>
}
export default TermsOfServiceForm;