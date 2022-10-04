import { Flex, FlexProps, Text, Image } from '@chakra-ui/react';
import React from 'react'
interface PriceCardProps extends FlexProps{
  isPaymentComplete: boolean,
}
function PriceCard({isPaymentComplete ,...props}: PriceCardProps) {
  return (
    <Flex // Card/price card
      borderTop="1px solid" borderColor="gray.200"
      alignItems="center" justifyContent="space-between" {...props}
      >
        <Flex alignItems="center">
          <Image my="10px" src="/images/product_detail_img.png" w="60px" h="60px" />
          <Flex
          flexDir="column" alignItems="start" ml="10px" >
            <Text textStyle="titleSmall" textColor="black">{"샴푸 & 바디"}</Text>
            <Text textStyle="textSmall" textColor="gray.700">{`샴푸 & 바디 | 120ml`}</Text>
            <Text textStyle="titleSmall" textColor="primary.500">{`27000원 / 1개`}</Text>
          </Flex>
        </Flex>
        <Flex 
        flexDir="column" alignItems="end" visibility={isPaymentComplete ? "visible" : "hidden"} 
        >
          <Text textStyle="titleSmall" textColor="primary.500">{"결제완료"}</Text>
          <Text textStyle="textSmall" textColor="black">{`배송비 ${2500}원`}</Text>
        </Flex>
      </Flex>
  )
}
export default PriceCard;