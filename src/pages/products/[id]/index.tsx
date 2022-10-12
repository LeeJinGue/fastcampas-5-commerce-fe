import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import ProductsDetailByIdPage from '@components/ProductsDetailByIdPage';
import MainLayout from '@components/common/@Layout/MainLayout';
import { useEffect } from 'react';
import { useGetProductByIdQuery } from '@apis/product/ProductApi.query';
import LoadingPage from '@components/common/New/LoadingPage';

function ProductsDetailById() {
  const router = useRouter();
  const { id } = router.query;
  if(!id || typeof id === "object") return
  const data = useGetProductByIdQuery({ variables: id })
  if (data.isSuccess) {
    const productData = data.data
    return (
      <>
        <Head>
          {/* ex) Your App Name | Page Name */}
          <title>인코스런 커머스트랙 | 상품 상세보기</title>
        </Head>
        <MainLayout content={<ProductsDetailByIdPage productData={productData} />} />
      </>
    );
  }

  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>인코스런 커머스트랙 | 상품 상세보기</title>
      </Head>
      <MainLayout content={<LoadingPage /> } />
    </>
  );
}

export default ProductsDetailById;
