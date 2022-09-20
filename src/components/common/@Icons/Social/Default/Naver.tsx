import { Icon, IconProps } from '@chakra-ui/react';

const DefaultNaverIcon = ({ ...props }: IconProps) => {
  const w = props.w? props.w : "24px"
  const h = props.h? props.h : "24px"
  return (
    <Icon
      width={w} height={h} viewBox="0 0 24px 24px" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14.615 12.552L9.358 5H5V19.111H9.565V11.559L14.822 19.111H19.18V5.00299H14.615V12.552Z" fill="#20CF5D"/>
    </Icon>
  );
};

export default DefaultNaverIcon;