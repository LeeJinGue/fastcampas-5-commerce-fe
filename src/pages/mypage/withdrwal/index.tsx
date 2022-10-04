import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import MypageWithdrwalPage from '@components/MypageWithdrwalPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function MypageWithdrwal() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 회원탈퇴</title>
      </Head>
      <MainLayout content={<MypageWithdrwalPage />} />
    </>
  );
}

export default MypageWithdrwal;
