import { Icon, IconProps } from '@chakra-ui/react';
type iconType = 'Disabled' | 'Select' | 'Default'
type shapeType = 'Circle' | 'Rectangle'
interface CheckboxIconProps extends IconProps {
  state: iconType,
  shape: shapeType,
}
const CheckboxIcon = ({ state, shape, ...props }: CheckboxIconProps) => {
  const w = props.w ? props.w : "20"
  const h = props.h ? props.h : "20"
  let fillcolor = "", strokecolor = ""
  let d1 = ""
  let Path2 = <path></path>

  switch (state) {
    case 'Disabled':
      fillcolor="#757983"
      strokecolor="#4A4D55"
      break
    case 'Select':
      fillcolor="#FF710B"
      strokecolor="white"
      break
    default:
      fillcolor="white"
      strokecolor="#CBCED6"
      break
    }
    if(shape === "Circle"){
      d1="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
      if(state==="Default") Path2=<path stroke={strokecolor} d="M10 19.5C15.2467 19.5 19.5 15.2467 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5Z"></path>
      else Path2=<path fill="white" d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"></path> 
    }
    if(shape === "Rectangle"){
      d1="M16 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z"
      if(state==="Default") Path2=<path stroke={strokecolor} d="M16 0.5H4C2.067 0.5 0.5 2.067 0.5 4V16C0.5 17.933 2.067 19.5 4 19.5H16C17.933 19.5 19.5 17.933 19.5 16V4C19.5 2.067 17.933 0.5 16 0.5Z"></path>
      else Path2=<path strokeWidth="2.5" strokeLinecap="round" stroke={strokecolor} d="M4.38989 9.75208L8.7309 13.965L14.9989 6.61597"></path>
    }
    return (
      <Icon
        width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d={d1} fill={fillcolor} />
        {Path2}
      </Icon>
    )
    
};


export default CheckboxIcon;