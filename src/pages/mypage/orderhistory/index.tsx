import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import MypageOrderhistoryPage from '@components/MypageOrderhistoryPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function MypageOrderhistory() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 주문내역</title>
      </Head>
      <MainLayout content={<MypageOrderhistoryPage />} />
    </>
  );
}

export default MypageOrderhistory;
