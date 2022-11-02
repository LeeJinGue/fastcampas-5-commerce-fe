import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import HomePage from '@components/HomePage';
import HomeLayout from '@components/common/@Layout/HomeLayout';

import { ROUTES } from '@constants/routes';
import MainLayout from '@components/common/@Layout/MainLayout';
import MainHeader from '@components/common/@Layout/MainLayout/MainHeader/MainHeader';
import { getToken } from '@utils/localStorage/token';

function Home() {
  const router = useRouter();
  React.useEffect(()=>{
    if(!getToken()) router.replace({pathname:ROUTES.LOGIN})
  },[])
  return (
    <>
      <Head>
        <title>커머스 | 메인</title>
      </Head>
      <MainLayout header={<MainHeader bg="transparent" left="50%" transform="translate(-50%, 0)" />} 
      content={<HomePage/>} />
    </>
  );
}
export default Home;
