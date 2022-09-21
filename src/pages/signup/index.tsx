import Head from 'next/head';
import SignupPage from '@components/SignupPage';
import SignupLayout from '@components/common/@Layout/SignupLayout';

function Signup() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>인코스런 커머스트랙 | signup</title>
      </Head>
      <SignupLayout content={<SignupPage />} />
    </>
  );
}

export default Signup;
