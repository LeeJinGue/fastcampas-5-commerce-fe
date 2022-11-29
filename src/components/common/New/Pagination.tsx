import { Flex, FlexProps, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import ListNumberArrowIcon from './@Icons/System/ListNumberArrow';
interface PaginationProps extends FlexProps {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  lastPage: number,
}
const firstPage = 1
function Pagination({ ...props }: PaginationProps) {
  const { page, setPage, lastPage } = { ...props }
  const [startPage, setStartPage] = useState(1)
  const [endPage, setEndPage] = useState(5)
  const handlePageClick = (page: number) => {
    setPage(page)
  }
  const handleClickNext = () => {
    if (page === lastPage) return
    if (page === endPage) {
      setStartPage(prev => prev + 5)
      setEndPage(prev => prev + 5)
    }
    setPage(prev => prev + 1)
  }
  const handleClickPrev = () => {
    if (page === firstPage) return
    if (page === startPage) {
      setStartPage(prev => prev - 5)
      setEndPage(prev => prev - 5)
    }
    setPage(prev => prev - 1)
  }
  return (
    <Flex // Pagination
      mt="50px" textStyle="title" alignSelf="center" {...props}>

      <ListNumberArrowIcon mr="30px" visibility={startPage === 1 ? "hidden" : "visible" } 
      direction='Left' _hover={{ cursor: "pointer" }} colortype={'Default'}
        onClick={() => handleClickPrev()} />
      {Array.from({ length: 5 }, (_, index) => index + startPage).map((value) => {
        if(value > lastPage) return
        return <Text key={value} _hover={{ cursor: "pointer" }} mr="30px" onClick={() => handlePageClick(value)} textColor={value === page ? "black" : "gray.200"}>{value}</Text>
      })}
      <ListNumberArrowIcon direction='Right' _hover={{ cursor: "pointer" }} colortype={'Default'}
        onClick={() => handleClickNext()} />
    </Flex>
  )
}

export default Pagination;
