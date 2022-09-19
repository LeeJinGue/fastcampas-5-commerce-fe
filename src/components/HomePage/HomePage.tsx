import React from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

interface HomePageContentProps extends BoxProps {}

function HomePageContent({ ...basisProps }: HomePageContentProps) {
  return <Box fontFamily='heading' fontWeight='black' color='secondary.500' {...basisProps}>Hello World</Box>;
}

export default HomePageContent;
