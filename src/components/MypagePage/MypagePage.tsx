import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import EstimateIcon from '@components/common/New/@Icons/Line/Estimate';
import OrderHistoryIcon from '@components/common/New/@Icons/Line/OrderHistory';
import BookIcon from '@components/common/New/@Icons/Line/Book';
import MenuText from '@components/common/New/TextList/MenuText';

interface MypagePageProps extends ChakraProps {}

function MypagePage({ ...basisProps }: MypagePageProps) {
  return (
    <Flex {...basisProps} pt={LAYOUT.HEADER.HEIGHT} flexDir="column" bgColor="white">
      <Flex mt="70px" flexDir="column" px="16px">
        <Text textStyle="titleLarge" textColor='black'>{"김인코스런"}</Text>
        <Text textStyle="text" textColor="gray.400">{"incourse.run@gmail.com"}</Text>
      </Flex>
      <Box mt="30px" h="10px" bgColor="gray.100"/>
      <Flex   // 페이지 이동 버튼들
      >
        <Flex w="125px" h="150px" flexDir="column" alignItems="center" justifyContent="center">
          <EstimateIcon fillcolor='Primary' />
          <Text textStyle="text" textColor="gray.800">{"회원정보 수정"}</Text>
        </Flex>
        <Flex w="125px" h="150px" flexDir="column" alignItems="center" justifyContent="center">
          <OrderHistoryIcon fillcolor='Primary' />
          <Text textStyle="text" textColor="gray.800">{"주문내역"}</Text>
        </Flex>
        <Flex w="125px" h="150px" flexDir="column" alignItems="center" justifyContent="center">
          <BookIcon fillcolor='Primary' />
          <Text textStyle="text" textColor="gray.800">{"내 상품 리뷰"}</Text>
        </Flex>
      </Flex>
      <Box h="10px" bgColor="gray.100"/>
      <MenuText title="회원탈퇴" />
      <Box border="1px solid" borderColor="gray.100"/>
      <MenuText title="로그아웃" />
      <Box h="30px" bgColor="gray.100"/>
    </Flex>
  );
}

export default MypagePage;
