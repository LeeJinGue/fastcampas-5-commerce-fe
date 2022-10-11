import React, { useCallback } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, IconButton, ButtonGroup } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import EstimateIcon from '@components/common/New/@Icons/Line/Estimate';
import OrderHistoryIcon from '@components/common/New/@Icons/Line/OrderHistory';
import BookIcon from '@components/common/New/@Icons/Line/Book';
import MenuText from '@components/common/New/TextList/MenuText';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes';
import { deleteToken, setToken } from '@utils/localStorage/token';
import store from '@features/store';

interface MypagePageProps extends ChakraProps { }

function MypagePage({ ...basisProps }: MypagePageProps) {
  const route = useRouter()
  const goEditInfo = useCallback(() => {route.push({ pathname: ROUTES.MYPAGE.EDIT_INFO })},[],)
  const goMyreviews = useCallback(() => {route.push({ pathname: ROUTES.MYPAGE.MY_REVIEWS })},[],)
  const goOrderhistory = useCallback(() => {route.push({ pathname: ROUTES.MYPAGE.ORDER_HISTORY }) },[],)
  const goWithdrawal = useCallback(() => {route.push({ pathname: ROUTES.MYPAGE.WITHDRWAL }) },[],)
  const goLogout = useCallback(() => {
    deleteToken()
    route.replace({ pathname: ROUTES.LOGIN }) 
  },[],)
  const {name, email} = store.getState().USER.userData
  return (
    <Flex {...basisProps} pt={LAYOUT.HEADER.HEIGHT} flexDir="column" bgColor="white">
      <Flex mt="70px" flexDir="column" px="16px">
        <Text textStyle="titleLarge" textColor='black'>{name}</Text>
        <Text textStyle="text" textColor="gray.400">{email}</Text>
      </Flex>
      <Box mt="30px" h="10px" bgColor="gray.100" />
      <Flex   // 페이지 이동 버튼들
      >
        <Button bgColor='white' w="125px" h="150px" display="flex" flexDir="column" onClick={goEditInfo}>
          <EstimateIcon fillcolor='Primary' />
          <Text textStyle="text" textColor="gray.800">{"회원정보수정"}</Text>
        </Button>
        <Button bgColor='white' w="125px" h="150px" display="flex" flexDir="column" onClick={goOrderhistory}>
          <OrderHistoryIcon fillcolor='Primary' />
          <Text textStyle="text" textColor="gray.800">{"주문내역"}</Text>
        </Button>
        <Button bgColor='white' w="125px" h="150px" display="flex" flexDir="column" onClick={goMyreviews}>
          <BookIcon fillcolor='Primary' />
          <Text textStyle="text" textColor="gray.800">{"내 상품 리뷰"}</Text>
        </Button>
      </Flex>
      <Box h="10px" bgColor="gray.100" />
      <MenuText event={goWithdrawal} title="회원탈퇴"  />
      <Box border="1px solid" borderColor="gray.100" />
      <MenuText event={goLogout} title="로그아웃" />
      <Box h="30px" bgColor="gray.100" />
    </Flex>
  );
}

export default MypagePage;
