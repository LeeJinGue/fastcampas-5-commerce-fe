import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import MypagePage from '@components/MypagePage';
import MainLayout from '@components/common/@Layout/MainLayout';

function Mypage() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 마이페이지</title>
      </Head>
      <MainLayout minH="0px" content={<MypagePage />} />
    </>
  );
}

export default Mypage;
