import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React from 'react'
import ListNumberArrowIcon from './@Icons/System/ListNumberArrow';
interface PaginationProps extends FlexProps {

}
function Pagination({ ...props }: PaginationProps) {
  return (
    <Flex // Pagination
      mt="50px" textStyle="title" alignSelf="center" {...props}>
      <Text _hover={{ cursor: "pointer" }} mr="30px" textColor="black">{"1"}</Text>
      <Text _hover={{ cursor: "pointer" }} mr="30px" textColor="gray.200">{"2"}</Text>
      <Text _hover={{ cursor: "pointer" }} mr="30px" textColor="gray.200">{"3"}</Text>
      <Text _hover={{ cursor: "pointer" }} mr="30px" textColor="gray.200">{"4"}</Text>
      <Text _hover={{ cursor: "pointer" }} mr="30px" textColor="gray.200">{"5"}</Text>
      <ListNumberArrowIcon _hover={{ cursor: "pointer" }} colortype={'Default'} />
    </Flex>
  )
}

export default Pagination;
