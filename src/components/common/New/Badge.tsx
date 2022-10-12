import { Box, BoxProps, Button, ButtonProps, Flex, FlexProps, Text } from "@chakra-ui/react";
type modeType = "on" | "off"
interface BadgeProps extends FlexProps{
  mode: modeType,
}
const Badge = ({ ...props }: BadgeProps) => {
  const {children, mode, bgColor, textColor} = props
  return (
    <Flex
    px="15px" py="6px"
    h="30px" w="full"
    backgroundColor={bgColor ? bgColor : 
      (mode==="on" ? "primary.500" : "gray.200")}
    borderRadius="15px"
      {...props}>
        {typeof children === 'string' ? 
        <Text textAlign="center" 
        color={textColor ? textColor : 
          (mode === "on" ? "white" : "black")}
        textStyle={mode==="on" ? "buttonSmall" : "textSmall"}>{children}</Text> : children}
    </Flex>
  );
};


export default Badge;