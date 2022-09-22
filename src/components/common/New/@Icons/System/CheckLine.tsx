import { Icon, IconProps } from '@chakra-ui/react';

const CheckLineIcon = ({...props }) => {
  const w = props.w? props.w : "24"
  const h = props.h? props.h : "24"
  const { isIndeterminate, isChecked, ...rest } = props
  if(isChecked) return <Icon bg="white"
  width={w+"px"} height={h+"px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M5.84302 11.33L10.532 17.2469L17.465 7.51001" stroke="#CBCED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </Icon>
  return <Icon
  width={w+"px"} height={h+"px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
  <path d="M5.84302 11.33L10.532 17.2469L17.465 7.51001" stroke="#FF710B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </Icon>
};
export default CheckLineIcon;
