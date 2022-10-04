import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, BoxProps, FlexProps } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import PriceCard from '@components/common/Card/PriceCard';
import PrimaryButton from '@components/common/New/PrimaryButton';
import Pagination from '@components/common/New/Pagination';

interface MypageOrderhistoryPageProps extends ChakraProps {}

function MypageOrderhistoryPage({
  ...basisProps
}: MypageOrderhistoryPageProps) {
  return (
    <Flex pt={LAYOUT.HEADER.HEIGHT} pb="80px" flexDir="column" bgColor="white" w="375px" {...basisProps}>
      <Text ml="16px" mt="50px" textStyle="titleLarge" textColor="black">주문내역</Text>
      <DateText mt="80px" ml="16px" date="2021 - 04 - 01" />
      <PriceCard px="16px" isPaymentComplete={true} />
      <PrimaryButton 
      mt="10px" mb="20px" mr="16px" 
      alignSelf="end" w="140px" h="40px" 
      btntype={'Solid'} btnstate={'Primary'} btnshape={'Rectangle'}>
        주문취소
      </PrimaryButton>
      <DateText ml="16px" date="2021 - 03 - 21" />
      <PriceCard px="16px" isPaymentComplete={true} />
      <PriceCard px="16px" isPaymentComplete={true} />
      <DateText ml="16px" date="2021 - 03 - 11" />
      <PriceCard px="16px" isPaymentComplete={true} />
      <PrimaryButton 
      mt="10px" mb="20px" mr="16px" 
      alignSelf="end" w="140px" h="40px" 
      btntype={'Line'} btnstate={'Primary'} btnshape={'Rectangle'}>
        리뷰작성
      </PrimaryButton>
      <Divider />
      <Pagination mt="50px"/>
    </Flex>
  );
}
interface DateTextProps extends FlexProps{
  date: string,
}
const DateText = ({date, ...props}:DateTextProps) => {
  return (
    <Flex h="55px" alignItems="center" borderTop="1px solid" borderColor="gray.100" {...props}>
      <Text textStyle="titleSmall">{`[${date}]`}</Text>
    </Flex>
  )
}
const Divider = ({...props}:BoxProps) => {
  return <Box border="1px solid" borderColor="gray.100" {...props}/>
}
export default MypageOrderhistoryPage;
