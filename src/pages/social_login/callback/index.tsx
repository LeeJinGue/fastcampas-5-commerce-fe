import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import SocialloginCallbackPage from '@components/SocialloginCallbackPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function SocialloginCallback() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 로그인중</title>
      </Head>
      <MainLayout content={<SocialloginCallbackPage />} />
    </>
  );
}

export default SocialloginCallback;
