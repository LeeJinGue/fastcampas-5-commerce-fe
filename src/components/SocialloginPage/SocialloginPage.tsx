import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text } from '@chakra-ui/react';

interface SocialloginPageProps extends ChakraProps {}

function SocialloginPage({ ...basisProps }: SocialloginPageProps) {
  return (
    <Box {...basisProps}>
      <Text>SocialloginPage</Text>
    </Box>
  );
}

export default SocialloginPage;
