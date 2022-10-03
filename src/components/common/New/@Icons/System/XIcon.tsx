import { Icon, IconProps } from '@chakra-ui/react';

const XIcon = ({ ...props }: IconProps) => {
  const w = props.w ? props.w : "20"
  const h = props.h ? props.h : "20"
  return (
    <Icon
      width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 5L14.4314 14.4314" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
      <path d="M14.4307 5L4.99927 14.4314" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    </Icon>
  );
};

export default XIcon;