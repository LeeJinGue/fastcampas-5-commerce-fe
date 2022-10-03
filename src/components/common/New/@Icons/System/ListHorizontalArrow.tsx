import { Icon, IconProps } from '@chakra-ui/react';

type colorType= "Disabled" | "Primary" | "Black"

interface ListHorizontalArrowIconProps extends IconProps{
  state: boolean    // true면 오른쪽 방향 화살, false면 왼쪽 방향 화살
  colortype: colorType,
}

const ListHorizontalArrowIcon = ({ ...props }: ListHorizontalArrowIconProps) => {
  const { state, colortype} = props
  let lineColor, d = ""
  switch(colortype){
    case "Disabled":
      lineColor = "#CBCED6"
      break
    case "Primary":
      lineColor = "#FF710B"
      break
    default:
      lineColor = "#1A1A1A"
  }
  if(state === true) d="M8.5 18.8781L15.523 11.9298L8.5 5.50012"
  else d="M15.523 18.8781L8.5 11.9298L15.523 5.50012"
  return (
    <Icon
      width="24px" height="24px" viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d={d} stroke={lineColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  )
};

export default ListHorizontalArrowIcon;