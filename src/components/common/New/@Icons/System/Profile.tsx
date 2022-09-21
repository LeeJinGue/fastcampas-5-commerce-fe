import { Icon, IconProps } from '@chakra-ui/react';

type shapeType = "Line" | "Fill"
interface ProfileIconProps extends IconProps{
  shape: shapeType
}
const ProfileIcon = ({shape,  ...props }: ProfileIconProps) => {
  const w = props.w? props.w : "40px"
  const h = props.h? props.h : "40px"
  if(shape === "Fill") {
    return <Icon
  width={w} height={h} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="#A8ADBA"/>
      <path d="M6.83252 35.0166C7.11837 33.2018 7.80999 31.4749 8.85586 29.9645C9.90174 28.4541 11.2749 27.1992 12.8731 26.2931C12.9718 26.2399 13.0838 26.216 13.1957 26.2243C13.3075 26.2326 13.4147 26.2728 13.5045 26.34C15.5011 27.7349 17.8864 28.4654 20.3217 28.428C22.7775 28.466 25.1819 27.7228 27.1879 26.3057C27.2586 26.2522 27.3409 26.2163 27.428 26.2007C27.5152 26.1851 27.6049 26.1903 27.6897 26.216C27.7484 26.2367 27.8047 26.2637 27.8577 26.2966C30.6005 28.0108 33.1788 30.9508 33.9497 34.2914C30.2234 37.9386 25.2147 39.9779 20.0005 39.9708C15.1543 39.9783 10.472 38.2166 6.83252 35.0166H6.83252Z" fill="white"/>
      <path d="M11.2263 17.5052C11.2293 15.0785 12.1945 12.752 13.9103 11.0359C15.626 9.31974 17.9522 8.35397 20.3789 8.35034C22.8058 8.35397 25.1322 9.31965 26.8481 11.0357C28.5641 12.7518 29.5297 15.0783 29.5332 17.5052C29.53 19.9319 28.5645 22.2582 26.8483 23.9739C25.1322 25.6897 22.8056 26.6546 20.3789 26.6572C17.9524 26.6546 15.626 25.6896 13.9101 23.9738C12.1942 22.258 11.229 19.9317 11.2263 17.5052V17.5052Z" fill="white"/>
    </Icon>
  }
  return <Icon
  width={w} height={h} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="20" cy="20" r="19.7143" fill="white" stroke="#8C919F" stroke-width="0.571429"/>
    <circle cx="20" cy="14" r="5" stroke="#1A1A1A" stroke-width="2"/>
    <path d="M29 30C29 24.2562 24.9706 22 20 22C15.0294 22 11 24.2562 11 30" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"/>
  </Icon>
};
export default ProfileIcon;
