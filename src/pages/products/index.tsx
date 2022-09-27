import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import ProductsPage from '@components/ProductsPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function Products() {
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 상품목록</title>
      </Head>
      <MainLayout content={<ProductsPage />} />
    </>
  );
}

export default Products;
