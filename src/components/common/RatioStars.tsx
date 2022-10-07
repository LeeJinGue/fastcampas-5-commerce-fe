import { Flex, FlexProps } from '@chakra-ui/react';
import React from 'react'
import RatioStarIcon from './New/@Icons/System/RatioStar';
interface RatioStarsProps extends FlexProps{
  size: string,
  rate: number
}
function RatioStars({rate, size, ...props}:RatioStarsProps) {
  return (
    <Flex // 별점. rate에 따라 꽉 찬 별 몇 개를 할 지 결정한다.
    >
      {Array.from({length:5}, (_,index) => index).map((value)=>{
        return <RatioStarIcon 
        ratio={rate-value <=0 ? 'empty' : 
        (rate-value>=1 ? 'full' : 'half')} size={'16'} key={value} />
      })}
    </Flex>
  )
}
export default RatioStars;