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
  // Primary: 메인컬러가 primary, Gray: 메인컬러가 gray
  // Solid: 배경색이 메인컬러, Line: 배경색이 흰색, border-color가 메인컬러
  // 배경/보더 컬러: 메인컬러500
  // hover컬러: 메인컬러700 / 메인컬러 white시 gray200
  const {children, btntype, btnstate, btnshape} = props
  let bgColor, textColor, hoverColor, mainColor, borderRadius, border, borderColor, textStyle
  switch(btnstate){
    case "Primary":
      mainColor = "primary"
      break
    case "gray":
      mainColor = "gray"
      break
  }
  switch(btntype){
    case "Solid":
      border="0px"
      borderColor=`white`
      bgColor=mainColor+".500"
      textColor=borderColor
      hoverColor=`${mainColor}.700`
      break
    case "Line":
      border="1px solid"
      borderColor=`${mainColor}.500`
      bgColor="white"
      textColor=borderColor
      hoverColor=`gray.200`
      break
  }
  switch(btnshape){
    case "Rectangle":
      borderRadius="5px"
      textStyle="buttonSmall"
      break
    case "Round":
      borderRadius="25px"
      textStyle="button"
      break
  }
  return (
    <Button
    px="15px"
    _hover={{backgroundColor: hoverColor}}
    bg={bgColor}
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
    boxSizing="border-box"
      {...props}>
        {typeof children === 'string' ? 
        <Text textAlign="center" textColor={textColor} 
        textStyle={textStyle}>{children}</Text> : children}
    </Button>
  );
};


export default PrimaryButton;