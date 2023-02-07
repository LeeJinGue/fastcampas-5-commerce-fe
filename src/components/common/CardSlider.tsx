import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ListNumberArrowIcon from './New/@Icons/System/ListNumberArrow';
import styled, { keyframes, css} from 'styled-components'
import { Text } from '@chakra-ui/react';
interface CardSliderProps {
  children: JSX.Element[] | JSX.Element,
}

const CardSlider = ({ children }: CardSliderProps) => {
  const settings = {
    slidesToShow: 1,
    swipeToSlide: true,
    speed: 500,
    nextArrow: <></>,
    prevArrow: <></>,
    centerPadding:"0px",
  }
  return (
      <StyledSlider {...settings}>
        {children}
      </StyledSlider>
  )
}
const StyledSlider = styled(Slider)`
  width: 100%;
.slick-list {  //슬라이드 스크린
 width: 90%;
 height: 100%;

 overflow-x: hidden;
}
`;
export default CardSlider;