import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
export type FormDataType = {
  name: string;
  phone: string;
  address: {
    base: string,
    post: string;
    detail: string;
  };
}
export type OrderFormDataType = {
  order: FormDataType;
  delivery: FormDataType;
  deliveryrequest: string;
  privacyAgree: boolean;
};
const initialOrderData:OrderFormDataType = {
  order: {
    name: "",
    phone: "",
    address: {
      base: "",
      post: "",
      detail: "",
    },
  },
  delivery: {
    name: "",
    phone: "",
    address: {
      base: "",
      post: "",
      detail: "",
    },
  },
  deliveryrequest: "",
  privacyAgree: false
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
export const OrderFormSchema = yup.object().shape({
  order: yup.object().shape({
    name: yup.string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, "최소 2자 이상 입력해주세요."),
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
    address: yup.object().shape({
      base: yup.string().required('해당 항목은 필수값 입니다.'),
      detail: yup.string().required('해당 항목은 필수값 입니다.'),
    }),
  }),
  delivery: yup.object().shape({
    name: yup.string()
    .required('해당 항목은 필수값 입니다.')
    .min(2, "최소 2자 이상 입력해주세요."),
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
    address: yup.object().shape({
      base: yup.string().required('해당 항목은 필수값 입니다.'),
      detail: yup.string().required('해당 항목은 필수값 입니다.'),
    }),
  }),
  privacyAgree: yup
  .boolean()
  .required('해당 항목은 필수값입니다.')
  .isTrue('개인정보 수집항목에 동의해주세요.')
});

const useOrderForm = (options?: UseFormProps<OrderFormDataType>) => {
  return useForm<OrderFormDataType>({
    resolver: yupResolver(OrderFormSchema),
    mode: 'onChange',
    defaultValues: initialOrderData,
    ...options,
  });
};

export default useOrderForm;
