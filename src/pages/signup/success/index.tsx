import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import SignupSuccessPage from '@components/SignupSuccessPage';
import SignupLayout from '@components/common/@Layout/SignupLayout';

function SignupSuccess() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 회원가입 성공</title>
      </Head>
      <SignupLayout header={undefined} content={<SignupSuccessPage />} />
    </>
  );
}

export default SignupSuccess;
