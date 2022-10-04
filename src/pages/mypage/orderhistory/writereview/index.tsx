import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import MypageOrderhistoryWritereviewPage from '@components/MypageOrderhistoryWritereviewPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function MypageOrderhistoryWritereview() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 리뷰작성</title>
      </Head>
      <MainLayout content={<MypageOrderhistoryWritereviewPage />} />
    </>
  );
}

export default MypageOrderhistoryWritereview;
