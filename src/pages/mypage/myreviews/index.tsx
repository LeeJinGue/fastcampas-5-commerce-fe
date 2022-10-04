import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import MypageMyreviewsPage from '@components/MypageMyreviewsPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function MypageMyreviews() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 내 상품리뷰</title>
      </Head>
      <MainLayout content={<MypageMyreviewsPage />} />
    </>
  );
}

export default MypageMyreviews;
