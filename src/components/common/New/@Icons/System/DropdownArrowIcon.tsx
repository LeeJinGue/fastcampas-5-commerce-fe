import { Icon, IconProps } from '@chakra-ui/react';

interface DropdownArrowIconProps extends IconProps{
  isopen: boolean,
}

const DropdownArrowIcon = ({ isopen, ...props }: DropdownArrowIconProps) => {
  if(isopen) return (
    <Icon
      width="17px" height="28px" viewBox={`0 0 17 28`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2.7002 11.9717L8.32617 18.3118L14.1522 11.9717" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  )
  return (
    <Icon
      width="17px" height="28px" viewBox={`0 0 17 28`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.4209 14.672L11.9119 9.08093L5.17188 14.672" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  )

};

export default DropdownArrowIcon;
