import { Icon, IconProps } from '@chakra-ui/react';
type iconfillcolor = "Default" | "White" | "Primary"
interface BookIconProps extends IconProps {
  fillcolor: iconfillcolor,
}
const BookIcon = ({ fillcolor, ...props }: BookIconProps) => {
  const w = props.w ? props.w : "50"
  const h = props.h ? props.h : "50"
  let fcolor = ""
  switch (fillcolor) {
    case "White":
      fcolor = "#FFFFFF"
      break;
    case "Primary":
      fcolor = "#FF710B"
      break;
    default:
      fcolor = "#1A1A1A"
      break;
  }
  return (
    <Icon
      width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11 13.555V36.165C11 36.165 20.8167 34.1162 24.9049 37.8719V15.2682C20.8167 11.511 11 13.555 11 13.555Z" stroke={fcolor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38.8113 13.555V36.165C38.8113 36.165 29.0026 34.1162 24.9065 37.8719V15.2682C29.0026 11.511 38.8113 13.555 38.8113 13.555Z" stroke={fcolor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};
export default BookIcon;
