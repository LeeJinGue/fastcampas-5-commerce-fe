import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import useEditInfoForm from './_hooks/useEditInfoForm';
import { useRouter } from 'next/router';
import EditInfoPageView from './MypageEditinfoPage.view';

interface MypageEditmyinfoPageProps extends ChakraProps {}

function MypageEditmyinfoPage({ ...basisProps }: MypageEditmyinfoPageProps) {
  const formData = useEditInfoForm();
  const route = useRouter()
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(({ username,nickname, email, phone, gender, age }) => {
    // 회원정보 수정 성공!
    console.log(
      `submitted: ${username}, ${nickname} , ${email}, ${phone}, ${gender.value}, ${age.value}`,
    );
    route.replace('/signup/success')
  });

  return <EditInfoPageView {...basisProps} formData={formData} onSubmit={onSubmit} />;
}

export default MypageEditmyinfoPage;
