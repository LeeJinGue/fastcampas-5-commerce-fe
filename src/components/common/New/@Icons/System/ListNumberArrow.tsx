import { Icon, IconProps } from '@chakra-ui/react';

type colorType= "Disabled" | "Primary" | "Default"

interface ListNumberArrowIconProps extends IconProps{
  direction?: string,
  count?: number,
  colortype: colorType,
}

const ListNumberArrowIcon = ({ ...props }: ListNumberArrowIconProps) => {
  const w = props.w? props.w : "24"
  const h = props.h? props.h : "24"
  const { direction, count, colortype} = props
  let lineColor = ""
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
  return (
    <Icon
      width={w+"px"} height={h+"px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.64111 16.7039L14.3821 12.0139L9.64111 7.6731" stroke={lineColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  );
};

export default ListNumberArrowIcon;