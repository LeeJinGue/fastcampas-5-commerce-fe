import { Icon, IconProps } from '@chakra-ui/react';
type iconType = 'Disabled' | 'Select' | 'Default'
interface CheckboxIconProps extends IconProps {
  state: iconType,
}
const CheckboxIcon = ({ state, ...props }: CheckboxIconProps) => {
  const w = props.w ? props.w : "20"
  const h = props.h ? props.h : "20"
  switch (state) {
    case 'Disabled':
      return (
        <Icon
          width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M16 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z" fill="#757983" />
          <path d="M4.38989 9.75208L8.7309 13.965L14.9989 6.61597" stroke="#4A4D55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
      )

    case 'Select':
      return (
        <Icon
          width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M16 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z" fill="#FF710B" />
          <path d="M4.38989 9.75208L8.7309 13.965L14.9989 6.61597" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </Icon>
      )


    default:
      return (
        <Icon
          width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
          <path d="M16 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z" fill="white" />
          <path d="M16 0.5H4C2.067 0.5 0.5 2.067 0.5 4V16C0.5 17.933 2.067 19.5 4 19.5H16C17.933 19.5 19.5 17.933 19.5 16V4C19.5 2.067 17.933 0.5 16 0.5Z" stroke="#CBCED6" />
        </Icon>
      )
  }
};


export default CheckboxIcon;