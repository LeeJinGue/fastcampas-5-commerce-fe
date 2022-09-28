import { Button, ButtonProps, Text } from "@chakra-ui/react";

type btntypes = "Solid" | "Line"
type btnstates = "Primary" | "gray"
type btnshapes = "Round" | "Rectangle"
interface PrimaryButtonProps extends ButtonProps{
  btntype: btntypes,
  btnstate: btnstates,
  btnshape: btnshapes,
}

const PrimaryButton = ({ ...props }: PrimaryButtonProps) => {
  const {children, btntype, btnstate, btnshape} = props
  let bgColor, textColor;
  if(btnstate === "Primary"){
    bgColor = "primary.500"
    textColor = "white"
  }else{
    bgColor = "gray.400"
    textColor = "white"
  }
  return (
    <Button
    px="15px"
    bg={btntype === "Solid" ? bgColor : textColor}
    border={btntype === "Line" ? "1px solid" : "0px"}
    borderColor={btntype === "Line" ? bgColor : "white"}
    borderRadius={btnshape === "Round" ? "25px" : "5px"}
    boxSizing="border-box"
      {...props}>
        {typeof children === 'string' ? 
        <Text textAlign="center" textColor={btntype === "Solid" ? textColor : bgColor} 
        textStyle={btnshape==="Round" ? "button" : "buttonSmall"}>{children}</Text> : children}
    </Button>
  );
};


export default PrimaryButton;