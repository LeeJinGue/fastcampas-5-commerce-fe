import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import ProductsDetailByIdPage from '@components/ProductsDetailByIdPage';
import MainLayout from '@components/common/@Layout/MainLayout';
import { useEffect } from 'react';
import { useGetProductByIdQuery } from '@apis/product/ProductApi.query';
import LoadingPage from '@components/common/New/LoadingPage';
import { useGetUserMeQuery } from '@apis/user/UserApi.query';
import { getToken } from '@utils/localStorage/token';
import { useGetCartQuery } from '@apis/cart/CartApi.query';
import { usePostCartMutation } from '@apis/cart/CartApi.mutation';

function ProductsDetailById() {
  const router = useRouter();
  const { id } = router.query;
  if(!id || typeof id === "object") return
  const data = useGetProductByIdQuery({ variables: Number.parseInt(id) })
  const {mutateAsync: postCartMutate} = usePostCartMutation()
  const accessToken = getToken()?.access
  if(!accessToken) return
  const userData = useGetUserMeQuery({variables: {
    accessToken
  }})
  if (data.isSuccess && userData.isSuccess) {
    const productData = data.data
    const user_id = userData.data.id
      return (
        <>
          <Head>
            {/* ex) Your App Name | Page Name */}
            <title>인코스런 커머스트랙 | 상품 상세보기</title>
          </Head>
          <MainLayout content={<ProductsDetailByIdPage user_id={user_id} product_data={productData} />} />
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
