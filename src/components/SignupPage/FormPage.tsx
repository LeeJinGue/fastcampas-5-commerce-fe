import ExampleFormContentView from './FormPage.view';
import useExampleForm from './_hooks/useExampleForm';

const SignupPage = () => {
  const formData = useExampleForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(({ username,nickname, email, phone, gender, fruit }) => {
    console.log(
      `submitted: ${username}, ${nickname} , ${email}, ${phone}, ${gender.value}, ${fruit}`,
    );
  });
  return <ExampleFormContentView formData={formData} onSubmit={onSubmit} />;
};

export default SignupPage;
