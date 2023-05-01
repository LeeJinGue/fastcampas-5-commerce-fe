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
    bgColor="white" _hover={{cursor:"pointer", backgroundColor:"bgHover"}} border="1px solid" borderColor="gray.300" borderRadius= '0px 5px 5px 0px'
      width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17 12H8V13H17V12Z" fill="#4A4D55" />
      <path d="M13 17V8H12V17H13Z" fill="#4A4D55" />
    </Icon>
  )
  return (
    <Icon
    bgColor="white" _hover={{cursor:"pointer", backgroundColor:"bgHover"}} border="1px solid" borderColor="gray.300" borderRadius= '5px 0px 0px 5px'
      width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17 12H8V13H17V12Z" fill="#4A4D55" />
    </Icon>
  )
};


export default CartQuantityIcon;

// <CartQuantityIcon
//             _hover={{cursor:"pointer"}} onClick={()=>setcount(prev => prev === 1 ? 1 : prev-1)} iconType='sub' border="1px solid" borderColor="gray.300" borderRadius= '5px 0px 0px 5px' />
//             <Flex
//             boxSizing='border-box' border="1px solid" borderColor="gray.300" justifyContent="center" alignItems="center" w="25px" h="25px" bgColor="white">
//             <Text textAlign="center" textStyle="textSmall" textColor="gray.800">{count}</Text>
//             </Flex>
//             <CartQuantityIcon  _hover={{cursor:"pointer"}} onClick={()=>setcount(prev => prev+1)}iconType='add' border="1px solid" borderColor="gray.300" borderRadius= '0px 5px 5px 0px'/>