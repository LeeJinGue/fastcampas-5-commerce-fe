import Head from 'next/head';
import CartPage from '@components/CartPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function Cart() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 장바구니</title>
      </Head>
      <MainLayout content={<CartPage productsList={[]} />} />
    </>
  );
}

export default Cart;
