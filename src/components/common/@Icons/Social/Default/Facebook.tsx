import { Icon, IconProps } from '@chakra-ui/react';

const DefaultFaceBookIcon = ({ ...props }: IconProps) => {
  const w = props.w? props.w : "24px"
  const h = props.h? props.h : "24px"
  return (
    <Icon width="24px" height="24px" viewBox="0 0 24px 24px" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.073 21.016V12.8H16.244V9.59996H13.073V7.55597C13.073 6.62797 13.33 5.99697 14.66 5.99697H16.36V3.13297C15.5392 3.04584 14.7143 3.00344 13.889 3.00597C13.3276 2.96524 12.7642 3.04778 12.2382 3.24782C11.7121 3.44786 11.2361 3.76054 10.8437 4.16394C10.4512 4.56735 10.1518 5.05172 9.96631 5.58309C9.78083 6.11445 9.71379 6.67996 9.76996 7.23996V9.59996H7V12.8H9.76501V21.017L13.073 21.016Z" fill="#1877F3"/>
    </Icon>
  );
};

export default DefaultFaceBookIcon;