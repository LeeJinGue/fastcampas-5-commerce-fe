import SignupPageContentView from './SignupPage.view';
import useExampleForm from './_hooks/useExampleForm';

const SignupPage = () => {
  const formData = useExampleForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(({ username,nickname, email, phone, gender, age,tos }) => {
    console.log(
      `submitted: ${username}, ${nickname} , ${email}, ${phone}, ${gender.value}, ${age.value}, ${tos.service}, ${tos.privacy}, ${tos.marketing}`,
    );
  });

  return <SignupPageContentView formData={formData} onSubmit={onSubmit} />;
};

export default SignupPage;
