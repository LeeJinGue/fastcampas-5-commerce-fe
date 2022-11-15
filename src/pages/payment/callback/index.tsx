import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import PaymentCallbackPage from '@components/PaymentCallbackPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function PaymentCallback() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | callback</title>
      </Head>
      <MainLayout content={<PaymentCallbackPage />} />
    </>
  );
}

export default PaymentCallback;
