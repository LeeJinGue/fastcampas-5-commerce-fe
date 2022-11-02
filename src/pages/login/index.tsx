import Head from 'next/head';
import LoginPage from '@components/LoginPage';
import LoginLayout from '@components/common/@Layout/LoginLayout';

function Login() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 로그인</title>
      </Head>
      <LoginLayout content={<LoginPage />} />
    </>
  );
}

export default Login;
