import ErrorLayout from "@components/common/@Layout/ErrorLayout";
import ErrorPage from "@components/common/New/ErrorPage";
import Head from "next/head";

export default function Error404() {
  return (<>
    <Head>
      {/* ex) Your App Name | Page Name */}
      <title>커머스 | 에러</title>
    </Head>
    <ErrorLayout content={<ErrorPage /> } />
  </>)
}