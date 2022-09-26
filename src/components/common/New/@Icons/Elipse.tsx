
import { Icon, IconProps } from '@chakra-ui/react';

const ElipseIcon = ({ ...props }: IconProps) => {
  const w = props.w? props.w : "375"
  const h = props.h? props.h : "39"
  return (
    <Icon
      width={w+"px"} height={h+"px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M376 4.17195C322.562 25.5821 163.296 69.7897 -1.00001 1" stroke="#FF710B" strokeWidth="2"/>
    </Icon>
  );
};
export default ElipseIcon;
