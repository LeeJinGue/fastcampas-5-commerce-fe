import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import EventinfoPage from '@components/EventinfoPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function Eventinfo() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 이벤트</title>
      </Head>
      <MainLayout content={<EventinfoPage />} />
    </>
  );
}

export default Eventinfo;
