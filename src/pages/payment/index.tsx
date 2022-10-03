import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import PaymentPage from '@components/PaymentPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function Payment() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 주문결제</title>
      </Head>
      <MainLayout content={<PaymentPage />} />
    </>
  );
}

export default Payment;
