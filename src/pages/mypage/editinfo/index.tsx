import Head from 'next/head';
import MypageEditinfoPage from '@components/MypageEditinfoPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function MypageEditinfo() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 회원정보수정</title>
      </Head>
      <MainLayout content={<MypageEditinfoPage />} />
    </>
  );
}

export default MypageEditinfo;
