import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type EditInfoFormDataType = {
  username: string;
  nickname: string;
  email: string;
  phone: string;
  gender: {
    label: string;
    value: string;
  };
  age: {
    label: string;
    value: string;
  }
};
const initialFormData:EditInfoFormDataType = {
  username: '',
  nickname: '',
  email: '',
  phone: '',
  gender: {
    label: '',
    value: ''
  },
  age: {
    label: '',
    value: ''
  },
}
/**
 * yup 을 이용하여 form의 유효성 검사를 도와줍니다.
 * react-hook-form과 yup을 연결해 줄 yupResolver 을 함께 사용합니다.
 *
 * validation에 반복되는 값은 상수로 빼서 관리합니다.
 *
 *
 *
 * @see https://github.com/jquense/yup#getting-started
 * @see https://yarnpkg.com/package/@hookform/resolvers#readme
 * */
export const EditInfoFormSchema = yup.object().shape({
  username: yup.string().required('해당 항목은 필수값 입니다.').min(2, "최소 2자 이상 입력해주세요."),
  nickname: yup.string().required('해당 항목은 필수값 입니다.').test(
    'isValidNickname',
    "한글 1~5자, 영문 및 숫자 2~10자 사이로 입력해주세요.",
    (val) => {
      if(val !==undefined){
        const regKor = /^[ㄱ-ㅎ가-힣]{1,5}$/
        const regEng = /^[a-zA-Z0-9]{2,10}$/
        const testKor = regKor.test(val)
        const testEng = regEng.test(val)
        return testKor || testEng
      }
      console.log("# 닉네임 입력 에러")
      return false
    }
    
  ),
  email: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .email('올바르지 않은 이메일 입니다.'),
  phone: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .test(
      'isPhone',
      '정확히 핸드폰 번호를 입력해주세요.',
      (val) => {
        if(val !== undefined){
          const regPhone = /\d{2,3}\-\d{3,4}\-\d{4}/
          const testPhone = regPhone.test(val)
          return testPhone
        }
        console.log("# 핸드폰 입력 에러")
        return false
      },
    ),
});

const useEditInfoForm = (options?: UseFormProps<EditInfoFormDataType>) => {
  return useForm<EditInfoFormDataType>({
    resolver: yupResolver(EditInfoFormSchema),
    mode: 'onChange',
    defaultValues: initialFormData,
    ...options,
  });
};

export default useEditInfoForm;
