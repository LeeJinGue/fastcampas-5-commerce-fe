import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';

interface InquiryPageProps extends ChakraProps {}

function InquiryPage({ ...basisProps }: InquiryPageProps) {
  return (
    <Box w="375px" h="782px" bgColor="white" pt={LAYOUT.HEADER.HEIGHT} {...basisProps}>
      <Text>문의하기 페이지</Text>
    </Box>
  );
}

export default InquiryPage;
