import { Button, ButtonProps, Icon, IconButton, IconButtonProps, IconProps, Text } from "@chakra-ui/react";

const FloatingDefaultButton = ({ ...props }: IconButtonProps) => {
  const {children, bgColor, textColor} = props
  return (
    <IconButton
      w="50px" h="50px"
      borderRadius="50%" border="1px solid" borderColor="black"
      _hover={{backgroundColor: "bgHover"}}
      icon={<ArrowIcon />}
      {...props}
      >
    </IconButton>
  );
};

const ArrowIcon = ({...props}: IconProps) => {
  const w = props.w? props.w: "16";
  const h = props.h? props.h: "16";
  return (
    <Icon
    backgroundColor="transparent"
    width={w+"px"} height={h+"px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.539 3.949V15.5H7.461L7.461 3.948V2.74074L6.60741 3.59448L1.45497 8.74786L0.707107 8L8 0.707108L15.2929 8L14.545 8.74789L9.39255 3.59545L8.539 2.74189V3.949Z" fill="#1A1A1A" stroke="#1A1A1A"/>
    </Icon>
  )
}
export default FloatingDefaultButton;