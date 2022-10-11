import { Box, BoxProps, Text } from "@chakra-ui/react";
import FormHelper from "@components/common/FormHelper/FormHelper";
import InputSelect from "@components/common/New/TextList/InputSelect";
import { GENDER_OPTION, AGE_OPTION } from "@constants/form";
import { Control, Controller, FieldErrors, UseFormGetValues, UseFormRegister } from "react-hook-form";
import { EditInfoFormDataType } from "../_hooks/useEditInfoForm";
type selectOptionType = {value: string, label: string}
interface AdditionalInfoFormProps extends BoxProps {
  errors: FieldErrors<EditInfoFormDataType>;
  getValues: UseFormGetValues<EditInfoFormDataType>;
  control: Control<EditInfoFormDataType, any>;
}
const AdditionalInfoForm = ({
  errors,
  control,
  getValues,
  ...basisProps
}: AdditionalInfoFormProps) => {
  return <>
    <Box flexDir="column"// 추가 정보 입력
    {...basisProps}
    >
      <Text mb="40px" textStyle="title">추가정보입력(선택)</Text>
      <Controller
        control={control}
        name="gender"
        render={({ field: { onChange } }) => (
          <FormHelper
            mb="50px"
            label="성별"
            errorText={errors.gender?.value?.message}
          >
            <InputSelect 
              defaultValue={getValues("gender")}
              onChange={onChange}
              selectOption={GENDER_OPTION}
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
            mb="80px"
            label="연령대"
            errorText={errors.age?.value?.message}
          >
            <InputSelect 
              defaultValue={getValues("age")}
              onChange={onChange}
              selectOption={AGE_OPTION}
              placeholder="연령대를 선택하세요"
            />
          </FormHelper>
        )}
      />
    </Box>
  </>
}
export default AdditionalInfoForm;