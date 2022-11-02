import { Icon, IconProps } from '@chakra-ui/react';
type iconType = 'fill' | 'line'
interface ChatIconProps extends IconProps {
  iconTypes: iconType,
}
const ChatIcon = ({ iconTypes, ...props }: ChatIconProps) => {
  const w = props.w ? props.w : "20"
  const h = props.h ? props.h : "20"
  return (
    <Icon
      width={w + "px"} height={h + "px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M10.086 2.49902C5.068 2.49902 1 5.89903 1 10.099C1.01139 11.6532 1.56088 13.1554 2.55499 14.35L1.10498 17.667L4.64197 16.174C6.2801 17.1797 8.16781 17.705 10.09 17.69C15.108 17.69 19.175 14.29 19.175 10.09C19.175 5.89003 15.105 2.49902 10.086 2.49902Z" 
      fill={iconTypes==="fill" ? "#FF710B" : undefined} 
      stroke="#FF710B" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  );
};

export default ChatIcon;