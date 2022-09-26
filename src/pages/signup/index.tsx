import Head from 'next/head';
import SignupPage from '@components/SignupPage';
import SignupLayout from '@components/common/@Layout/SignupLayout';
import SignupHeader from '@components/common/@Layout/SignupLayout/SignupHeader';

function Signup() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 회원가입</title>
      </Head>
      <SignupLayout header={<SignupHeader />} content={<SignupPage />} />
    </>
  );
}

export default Signup;
