import { Icon, IconProps } from '@chakra-ui/react';
type iconProps = "add" | "sub"
interface CartQuantityIconProps extends IconProps {
  iconType: iconProps,
}
const CartQuantityIcon = ({ iconType, ...props }: CartQuantityIconProps) => {
  const w = props.w ? props.w : "25"
  const h = props.h ? props.h : "25"
  if (iconType === "add") return (
    <Icon
    bgColor="white" _hover={{cursor:"pointer"}}
      width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17 12H8V13H17V12Z" fill="#4A4D55" />
      <path d="M13 17V8H12V17H13Z" fill="#4A4D55" />
    </Icon>
  )
  return (
    <Icon
    bgColor="white" _hover={{cursor:"pointer"}}
      width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17 12H8V13H17V12Z" fill="#4A4D55" />
    </Icon>
  )
};


export default CartQuantityIcon;