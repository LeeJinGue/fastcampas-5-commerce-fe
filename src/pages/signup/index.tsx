import Head from 'next/head';
import SignupPage from '@components/SignupPage';
import SignupLayout from '@components/common/@Layout/SignupLayout';

function Signup() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 회원가입</title>
      </Head>
      <SignupLayout content={<SignupPage />} />
    </>
  );
}

export default Signup;
