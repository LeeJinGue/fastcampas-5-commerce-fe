import { Button, ButtonProps, Text } from "@chakra-ui/react";
type modeType = "on" | "off"
interface BadgeProps extends ButtonProps{
  mode: modeType,
}
const Badge = ({ ...props }: BadgeProps) => {
  const {children, mode, bgColor, textColor} = props
  return (
    <Button
    pl="15px"
    h="30px"
    backgroundColor={bgColor ? bgColor : 
      (mode==="on" ? "primary.500" : "gray.200")}
    borderRadius="15px"
      {...props}>
        {typeof children === 'string' ? 
        <Text textAlign="center" 
        color={textColor ? textColor : 
          (mode === "on" ? "white" : "black")}
        textStyle={mode==="on" ? "buttonSmall" : "textSmall"}>{children}</Text> : children}
    </Button>
  );
};


export default Badge;