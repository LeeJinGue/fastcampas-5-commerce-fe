import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ListNumberArrowIcon from './New/@Icons/System/ListNumberArrow';
import styled, { keyframes, css} from 'styled-components'
import { Text } from '@chakra-ui/react';
interface BadgeSliderProps {
  children: JSX.Element[],
}

const BadgeSlider = ({ children }: BadgeSliderProps) => {
  const settings = {
    slidesToShow: 3,
    swipeToSlide: true,
    infinite: false,
    speed: 500,
    variableWidth: true,
    nextArrow: <></>,
    prevArrow: <></>,
  }
  return (

      <StyledSlider {...settings}>
        {children}
      </StyledSlider>

  )
}
const StyledSlider = styled(Slider)`
margin-top: 50px;
width: 100%;
.slick-list {  //슬라이드 스크린
 width: 100%;
 height: 100%;
 margin: 0 auto;
 overflow-x: hidden;
}

`;
export default BadgeSlider;