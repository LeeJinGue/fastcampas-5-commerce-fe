import { Icon, IconProps } from '@chakra-ui/react';

const ExitIcon = ({ ...props }: IconProps) => {
  const w = props.w? props.w : "24px"
  const h = props.h? props.h : "24px"
  return (
    <Icon
      width={w} height={h} viewBox="0 0 24px 24px" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clip-path="url(#clip0_5113_12900)">
      <path d="M16.3135 8.0625L20.2499 12L16.3135 15.9375" stroke="#1A1A1A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.75 12H20.2472" stroke="#1A1A1A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.75 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H9.75" stroke="#1A1A1A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </Icon>
  );
};


export default ExitIcon;