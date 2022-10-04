import { Icon, IconProps } from '@chakra-ui/react';
type iconColorType = "Primary" | "White" | "Gray"
interface UploadIconProps extends IconProps{
  iconcolor: iconColorType
}
const UploadIcon = ({ iconcolor, ...props }: UploadIconProps) => {
  let strokeColor = ""
  switch(iconcolor){
    case "Gray": 
      strokeColor="#CBCED6"
      break
    case "White": 
      strokeColor="#FFFFFF"
      break
    default : 
      strokeColor="#FF710B"
      break
    
    
  }
  const w = props.w ? props.w : "50"
  const h = props.h ? props.h : "50"
  return (
    <Icon
      width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M25 16V34" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 25H16" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
    </Icon>
  );
};

export default UploadIcon;