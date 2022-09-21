import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import LoginPage from '@components/LoginPage';
import LoginLayout from '@components/common/@Layout/LoginLayout';

function Login() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>인코스런 커머스트랙 | login</title>
      </Head>
      <LoginLayout content={<LoginPage />} />
    </>
  );
}

export default Login;
