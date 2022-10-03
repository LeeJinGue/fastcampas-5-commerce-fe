import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import PaymentSuccessPage from '@components/PaymentSuccessPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function PaymentSuccess() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 결제내역</title>
      </Head>
      <MainLayout content={<PaymentSuccessPage />} />
    </>
  );
}

export default PaymentSuccess;
