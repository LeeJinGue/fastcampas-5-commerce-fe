import { Icon, IconProps } from '@chakra-ui/react';

type colorType = "Disabled" | "Primary" | "Default"
type directionType = "Left" | "Right"
interface ListNumberArrowIconProps extends IconProps {
  direction: directionType,
  count?: number,
  colortype: colorType,
}

const ListNumberArrowIcon = ({ ...props }: ListNumberArrowIconProps) => {
  const w = props.w ? props.w : "24"
  const h = props.h ? props.h : "24"
  const { direction, count, colortype } = props
  let lineColor = ""
  let d = ""
  switch (colortype) {
    case "Disabled":
      lineColor = "#CBCED6"
      break
    case "Primary":
      lineColor = "#FF710B"
      break
    default:
      lineColor = "#1A1A1A"
  }
  switch (direction) {
    case "Left":
      d = "M14.3821 16.7039L9.64111 12.0139L14.3821 7.6731"
      break
    default:
      d = "M9.64111 16.7039L14.3821 12.0139L9.64111 7.6731"
  }
  return (
    <Icon
      width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d={d} stroke={lineColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};

export default ListNumberArrowIcon;