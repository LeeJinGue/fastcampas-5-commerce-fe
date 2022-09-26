import { Icon, IconProps } from '@chakra-ui/react';

const CheckCircleIcon = ({...props }) => {
  const { isindeterminate, ischecked, ...rest} = props
  const w = props.w? props.w : "24"
  const h = props.h? props.h : "24"
  if(ischecked) return <Icon
  width={w+"px"} height={h+"px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z" fill="#FF710B"/>
      <path d="M6.3894 11.7524L10.7304 15.9653L16.9984 8.61633" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
  if(isindeterminate) return <Icon
  bg="white"
  width={w+"px"} height={h+"px"} viewBox={`0 0 ${w} ${h}`} fill="white" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12Z" stroke="#FF710B" strokeWidth="1.5"/>
    <path d="M6.3894 11.7524L10.7304 15.9653L16.9984 8.61633" stroke="#FF710B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>

  return <Icon
  bg="white"
  width={w+"px"} height={h+"px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12Z" stroke="#CBCED6" strokeWidth="1.5"/>
      <path d="M6.3894 11.7524L10.7304 15.9653L16.9984 8.61633" stroke="#CBCED6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
};
export default CheckCircleIcon;
