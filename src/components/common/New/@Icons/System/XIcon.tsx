import { Icon, IconProps } from '@chakra-ui/react';
type colortype = "White" | "Black" | "Gray3" | "Gray4"
interface XIconProps extends IconProps{
  xsize: string | number,
  xcolor: colortype,
  fillcolor?: colortype,
}
const XIcon = ({fillcolor,xsize,xcolor, ...props }: XIconProps) => {
  let w = "20"
  let h = "20"
  let strokeColor = "#1A1A1A" 
  switch(xcolor){
    case "White": 
      strokeColor = "#FFFFFF" 
      break
    case "Gray3": 
      strokeColor = "#757983" 
      break
    case "Gray4": 
      strokeColor = "#4A4D55" 
      break
    default: 
      strokeColor = "#1A1A1A" 
      break
  }
  if(fillcolor !== undefined && typeof xsize === "string" && xsize==="Circle"){
    w = "20", h = "20"
    let bgcolor = ""
    switch(fillcolor){
      case "White": 
        bgcolor = "#FFFFFF" 
        break
      case "Gray3": 
        bgcolor = "#757983" 
        break
      case "Gray4": 
        bgcolor = "#4A4D55" 
        break
      default: 
        bgcolor = "#1A1A1A" 
        break
    }
    return (
      <Icon
      _hover={{cursor:"pointer", backgroundColor:"bgHover"}}
        width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10 0C11.9778 0 13.9112 0.58649 15.5557 1.6853C17.2002 2.78412 18.4819 4.3459 19.2388 6.17317C19.9957 8.00043 20.1937 10.0111 19.8079 11.9509C19.422 13.8907 18.4696 15.6725 17.0711 17.0711C15.6725 18.4696 13.8907 19.422 11.9509 19.8079C10.0111 20.1937 8.00043 19.9957 6.17317 19.2388C4.3459 18.4819 2.78412 17.2002 1.6853 15.5557C0.58649 13.9112 0 11.9778 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0V0Z" fill={bgcolor}/>
        <path d="M13.032 6.66797L6.66802 13.0319" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13.032 13.032L6.66802 6.66802" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round"/>
      </Icon>
    )
  }
  if(typeof xsize === "number"){
    w = xsize.toString(), h = xsize.toString()
    return (
      <Icon
      _hover={{cursor:"pointer", backgroundColor:"bgHover"}}
        width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M5 5L14.4314 14.4314" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
          <path d="M14.4309 5L4.99952 14.4314" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      </Icon>
    );
  }
  return (
    <Icon
    _hover={{cursor:"pointer"}}
    width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M5 5L14.4314 14.4314" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14.4309 5L4.99952 14.4314" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </Icon>
  );
};



export default XIcon;