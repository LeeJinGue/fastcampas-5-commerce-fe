import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import PaymentSuccessPage from '@components/PaymentSuccessPage';
import MainLayout from '@components/common/@Layout/MainLayout';
import { GetServerSideProps } from 'next';
type PaymentQueryData = {
  resOrderId?: string, 
  paymentTime?: string,
}
const PaymentSuccess: React.FC<PaymentQueryData> = ({resOrderId, paymentTime}) => {
  // console.log("resOrderId: ",resOrderId, ", paymentTime:", paymentTime)
  if(resOrderId === undefined || paymentTime === undefined) {
    return <>잘못된 접근입니다.</>
  }
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 결제내역</title>
      </Head>
      <MainLayout content={<PaymentSuccessPage resOrderId={resOrderId} paymentTime={paymentTime} />} />
    </>
  );
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  const {resOrderId, paymentTime} = context.query
  return {
    props: { 
      resOrderId, paymentTime
    },
  }
}

export default PaymentSuccess;
