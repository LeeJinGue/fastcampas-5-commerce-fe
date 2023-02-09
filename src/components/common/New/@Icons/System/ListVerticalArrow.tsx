import { Icon, IconProps } from '@chakra-ui/react';

type colorType= "Disabled" | "Primary" | "Black"

interface ListVerticalArrowIconProps extends IconProps{
  state: boolean    // true면 아래 방향 화살, false면 위쪽 방향 화살
  colortype: colorType,
}

const ListVerticalArrowIcon = ({ state, colortype, ...props }: ListVerticalArrowIconProps) => {
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
  if(state === true) d="M18.4209 9.328L11.9119 14.9191L5.17188 9.328"
  else d="M18.4209 14.672L11.9119 9.08093L5.17188 14.672"
  return (
    <Icon
      width="24px" height="24px" viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d={d} stroke={lineColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  )
};

export default ListVerticalArrowIcon;