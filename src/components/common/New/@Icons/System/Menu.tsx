import { Icon, IconProps } from '@chakra-ui/react';

const MenuIcon = ({ ...props }: IconProps) => {
  const w = props.w? props.w : "24"
  const h = props.h? props.h : "24"
  return (
    <Icon
      width={w+"px"} height={h+"px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21 5H3V7.5H21V5Z" fill="#1A1A1A"/>
      <path d="M21 16H3V18.5H21V16Z" fill="#1A1A1A"/>
    </Icon>
  );
};


export default MenuIcon;