import Head from 'next/head';
import HomeLayout from '@components/common/@Layout/HomeLayout';
import SocialloginCallbackPage from '@components/SocialloginCallbackPage';
import MainLayout from '@components/common/@Layout/MainLayout';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
type SocialLoginCallbackQueryData = {
  code?: string,
  state?: string,
}
const SocialloginCallback: React.FC<SocialLoginCallbackQueryData> = ({code, state}) => {
  console.log("code: ",code, ", state:", state)
  if(code === "" || state === "") {
    return <>잘못된 접근입니다.</>
  }
  return (
    <>
      <Head>
        {/* ex) Your App Name | Page Name */}
        <title>커머스 | 로그인중</title>
      </Head>
      <MainLayout content={<SocialloginCallbackPage />} />
    </>
  );
}
export const getServerSideProps:GetServerSideProps = async (context) => {
  const {code, state} = context.query
  // if(typeof code !== "string" || typeof state !== "string") return{
  //   props: {queryData: {code: "", state: ""}}
  // }
  return {
    props: { 
      code, state
    },
  }
}
export default SocialloginCallback;
