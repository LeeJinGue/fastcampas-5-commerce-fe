import userApi from '@apis/user/UserApi';
import { usePostRegisterMutation } from '@apis/user/UserApi.mutation';
import { ROUTES } from '@constants/routes';
import { PROFILE_EXAMPLE } from '@constants/string';
import { setToken } from '@utils/localStorage/token';
import { useRouter } from 'next/router';
import SignupPageContentView from './SignupPage.view';
import useExampleForm from './_hooks/useSignupForm';
const SignupPage = () => {
  const formData = useExampleForm();
  const route = useRouter()
  const socialToken = route.query.socialToken
  const { handleSubmit } = formData;
  const {
    data: registerData,
    mutateAsync: registerMutate, //
    isLoading: isLoadingRegisterMutate,
  } = usePostRegisterMutation();
  const onSubmit = handleSubmit(({ username, nickname, email, phone, gender, age, tos }) => {
    // 회원가입 성공!
    if (typeof socialToken === "string") {
      const phoneServerForm = phone.replaceAll("-", "")
      const res = registerMutate({
        socialToken,
        email,
        phone: phoneServerForm,
        name: username,
        nickname,
        profile: PROFILE_EXAMPLE,
        gender: gender.value,
        age: age.value,
        marketingAdAgree: tos.marketing
      }, {
        onSuccess: (data, variables) => {
          const {access, refresh } = data
          setToken({access, refresh, isRegister: true})
          route.replace({pathname: ROUTES.SIGNUP.SUCCESS})
          // 받은 Token을 저장합니다. access, refresh
        },
        onError: (error, variables) => {
        }
      })
      res.catch((err) => {
      })

    }
  });

  return <SignupPageContentView formData={formData} onSubmit={onSubmit} />;
};

export default SignupPage;
