import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';

interface EventinfoPageProps extends ChakraProps {}

function EventinfoPage({ ...basisProps }: EventinfoPageProps) {
  return (
    <Box w="375px" h="782px" bgColor="white" pt={LAYOUT.HEADER.HEIGHT} {...basisProps}>
      <Text>이벤트 페이지</Text>
    </Box>
  );
}

export default EventinfoPage;
