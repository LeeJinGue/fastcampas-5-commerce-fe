import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import SocialloginPage from '@components/SocialloginPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function Sociallogin() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | social_login</title>
      </Head>
      <MainLayout content={<SocialloginPage />} />
    </>
  );
}

export default Sociallogin;
