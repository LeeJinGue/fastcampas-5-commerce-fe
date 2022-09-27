import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import ProductsDetailByIdPage from '@components/ProductsDetailByIdPage';
import MainLayout from '@components/common/@Layout/MainLayout';

function ProductsDetailById() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>인코스런 커머스트랙 | 상세 페이지</title>
      </Head>
      <MainLayout content={<ProductsDetailByIdPage id={id} />} />
    </>
  );
}

export default ProductsDetailById;
