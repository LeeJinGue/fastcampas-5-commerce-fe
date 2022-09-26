import { Icon, IconProps } from '@chakra-ui/react';

const UploadIcon = ({ ...props }: IconProps) => {
  const w = props.w ? props.w : "50"
  const h = props.h ? props.h : "50"
  return (
    <Icon
      width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M25 16V34" stroke="#FF710B" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 25H16" stroke="#FF710B" strokeWidth="2" strokeLinecap="round" />
    </Icon>
  );
};


export default UploadIcon;
