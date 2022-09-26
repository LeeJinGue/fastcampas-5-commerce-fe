import { useRouter } from 'next/router';
import SignupPageContentView from './SignupPage.view';
import useExampleForm from './_hooks/useSignupForm';

const SignupPage = () => {
  const formData = useExampleForm();
  const route = useRouter()
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(({ username,nickname, email, phone, gender, age,tos }) => {
    // 회원가입 성공!
    console.log(
      `submitted: ${username}, ${nickname} , ${email}, ${phone}, ${gender.value}, ${age.value}, ${tos.service}, ${tos.privacy}, ${tos.marketing}`,
    );
    route.replace('/signup/success')
  });

  return <SignupPageContentView formData={formData} onSubmit={onSubmit} />;
};

export default SignupPage;
