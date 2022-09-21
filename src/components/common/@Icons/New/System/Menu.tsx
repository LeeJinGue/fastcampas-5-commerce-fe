import { Icon, IconProps } from '@chakra-ui/react';

const MenuIcon = ({ ...props }: IconProps) => {
  const w = props.w? props.w : "24px"
  const h = props.h? props.h : "24px"
  return (
    <Icon
      width={w} height={h} viewBox="0 0 24px 24px" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21 5H3V7.5H21V5Z" fill="#1A1A1A"/>
      <path d="M21 16H3V18.5H21V16Z" fill="#1A1A1A"/>
    </Icon>
  );
};


export default MenuIcon;