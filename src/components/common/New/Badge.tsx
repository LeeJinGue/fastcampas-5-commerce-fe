import { Box, BoxProps, Button, ButtonProps, Flex, FlexProps, Text } from "@chakra-ui/react";
type modeType = "on" | "off"
interface BadgeProps extends FlexProps{
  mode: modeType,
}
const Badge = ({ ...props }: BadgeProps) => {
  const {children, mode, textColor} = props
  const bgColorByMode = mode === "on" ? "primary.500" : "gray.200"
  const hoverColorByMode = mode === "on" ? "primary.700" : "gray.400"
  return (
    <Flex
    px="15px" py="6px"
    h="30px" w="full"
    backgroundColor={bgColorByMode}
    _hover={{backgroundColor:hoverColorByMode}}
    borderRadius="15px"
    justifyContent="center"
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