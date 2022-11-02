import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import PriceCard from '@components/common/Card/PriceCard';
import DeliveryInfoText from '@components/PaymentPage/_fragment/DeliveryInfoText';
import PrimaryButton from '@components/common/New/PrimaryButton';
import { useRouter } from 'next/router';

interface PaymentSuccessPageProps extends ChakraProps {}
interface PaymentSuccessPageDataProps extends PaymentSuccessPageProps {}

function PaymentSuccessPageData({...basisProps}:PaymentSuccessPageDataProps){
  const route = useRouter()
  console.log("# query test:",route.query)
  return <PaymentSuccessPage {...basisProps} />
}

function PaymentSuccessPage({ ...basisProps }: PaymentSuccessPageProps) {
  return (
    <Flex {...basisProps} pt={LAYOUT.HEADER.HEIGHT} pb="30px" 
    flexDir="column" bgColor="white" w="375px">
      <Text mx="16px" mt="50px" textStyle="titleLarge">{"결제내역"}</Text>
      <Box mt="80px" w="375px" border="1px solid" borderColor="gray.100"/>
      <Flex   // 결제 시간
      px="16px" h="55px" justifyContent="start" alignItems="center">
        <Text textStyle="titleSmall" textColor="black">{`[2021-04-01]`}</Text>
      </Flex>
      <PriceCard px="16px" ispaymentcomplete={true} productid={58} count={0} status={'테스트중'} />
      <Box bgColor="gray.100" h="10px"/>
      <Flex   // 배송지 정보
      h="55px" alignItems="center" px="16px">
        <Text textStyle="title" textColor="black">{"배송지 정보"}</Text>
      </Flex>
      <Box w="375px" border="1px solid" borderColor="gray.100"/>
      <Flex   // 배송지 정보 텍스트
      flexDir="column" pt="15px" pb="24px" px="16px">
        <DeliveryInfoText title={"이름"} content={"김인코스런"} />
        <DeliveryInfoText title={"핸드폰번호"} content={"010-1234-1234"} />
        <DeliveryInfoText title={"우편번호"} content={"01234"} />
        <DeliveryInfoText title={"주소"} content={"서울특별시 마포구 성산동 123-3"} />
        <DeliveryInfoText title={""} content={"성산빌딩 B동 302호"} />
        <DeliveryInfoText title={"배송요청사항"} content={"문앞에 두고 가주세요"} />
      </Flex>
      <Box bgColor="gray.100" h="10px"/>
      <Flex   // 결제정보
      h="55px" alignItems="center" px="16px">
        <Text textStyle="title" textColor="black">{"결제정보"}</Text>
      </Flex>
      <Box w="375px" border="1px solid" borderColor="gray.100"/>
      <Flex   // 결제정보 텍스트
      px="16px" flexDir="column">
        <Flex justifyContent="space-between" mt="15px"
        textStyle="text" textColor="gray.700">
          <Text>{"총 상품금액"}</Text>
          <Text>{27000}{" 원"}</Text>        
        </Flex>
        <Flex justifyContent="space-between" mt="10px"
        textStyle="text" textColor="gray.700">
          <Text>{"총 배송비"}</Text>
          <Text>{2500}{" 원"}</Text>        
        </Flex>
        <Flex justifyContent="space-between" mt="10px"
        textStyle="text" textColor="gray.700">
          <Text>{"결제수단"}</Text>
          <Text textStyle="title">{"신용카드 결제"}</Text>        
        </Flex>
      </Flex>
      <Box mt="30px" w="375px" border="1px solid" borderColor="gray.100"/>
      <Flex   // 결제금액
      justifyContent="space-between" mt="15px"
      textStyle="text" px="16px">
        <Text textColor="black">{"결제금액"}</Text>
        <Text textColor="primary.500" textStyle="title">{29500}{" 원"}</Text>        
      </Flex>
      <Flex   // 이동 버튼들
      justifyContent="space-between" mt="50px" px="16px">
        <PrimaryButton w="165px" h="50px" btntype={'Line'} btnstate={'Primary'} btnshape={'Round'}>{"메인화면 이동"}</PrimaryButton>
        <PrimaryButton w="165px" h="50px" btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'}>{"주문내역 이동"}</PrimaryButton>
      </Flex>
    </Flex>
  );
}

export default PaymentSuccessPage;
