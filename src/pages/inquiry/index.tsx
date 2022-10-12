import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import InquiryPage from '@components/InquiryPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function Inquiry() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 문의하기</title>
      </Head>
      <MainLayout content={<InquiryPage />} />
    </>
  );
}

export default Inquiry;
