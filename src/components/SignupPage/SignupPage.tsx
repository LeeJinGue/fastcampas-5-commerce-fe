import SignupPageContentView from './SignupPage.view';
import useExampleForm from './_hooks/useExampleForm';

const SignupPage = () => {
  const formData = useExampleForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(({ username,nickname, email, phone, gender, age,tosService,tosPrivacy,tosMarketing }) => {
    console.log(
      `submitted: ${username}, ${nickname} , ${email}, ${phone}, ${gender.value}, ${age}, ${tosService}, ${tosPrivacy}, ${tosMarketing}`,
    );
  });
  return <SignupPageContentView formData={formData} onSubmit={onSubmit} />;
};

export default SignupPage;
