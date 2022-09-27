import { Button, ButtonProps, Icon, IconButton, IconButtonProps, IconProps, Text } from "@chakra-ui/react";

const FloatingDefaultButton = ({ ...props }: IconButtonProps) => {
  const {children, bgColor, textColor} = props
  return (
    <IconButton
      w="50px" h="50px"
      borderRadius="50%" border="1px solid" borderColor="black"
      icon={<ArrowIcon />}
      {...props}
      >
    </IconButton>
  );
};

const ArrowIcon = ({...props}: IconProps) => {
  const w = props.w? props.w: "16";
  const h = props.h? props.h: "16";
  return (
    <Icon
    width={w+"px"} height={h+"px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.539 3.949V15.5H7.461L7.461 3.948V2.74074L6.60741 3.59448L1.45497 8.74786L0.707107 8L8 0.707108L15.2929 8L14.545 8.74789L9.39255 3.59545L8.539 2.74189V3.949Z" fill="#1A1A1A" stroke="#1A1A1A"/>
    </Icon>
  )
}


export default FloatingDefaultButton;

// <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_d_5113_21255)">
// <path d="M35 60C48.8071 60 60 48.8071 60 35C60 21.1929 48.8071 10 35 10C21.1929 10 10 21.1929 10 35C10 48.8071 21.1929 60 35 60Z" fill="url(#paint0_linear_5113_21255)"/>
// <path d="M35 59.5C48.531 59.5 59.5 48.531 59.5 35C59.5 21.469 48.531 10.5 35 10.5C21.469 10.5 10.5 21.469 10.5 35C10.5 48.531 21.469 59.5 35 59.5Z" stroke="#FF710B"/>
// </g>
// <path d="M33.9 49.1999C33.2987 49.1997 32.7001 49.1194 32.12 48.9609C29.6007 48.1929 27.328 46.7754 25.53 44.8509C23.0692 42.5366 21.4659 39.4562 20.982 36.1129C20.8617 35.0426 21.0194 33.9593 21.4398 32.9677C21.8602 31.9761 22.5291 31.1096 23.382 30.4519L23.539 30.3289C23.8894 30.0705 24.3199 29.9443 24.7543 29.9727C25.1888 30.001 25.5992 30.1821 25.913 30.4839L27.647 32.2279C27.9824 32.5686 28.1718 33.0266 28.1748 33.5047C28.1778 33.9827 27.9942 34.4431 27.663 34.7879L26.849 35.8519C26.6494 36.1153 26.5225 36.4265 26.4811 36.7543C26.4396 37.0822 26.4851 37.4152 26.613 37.7199C27.419 39.6299 29.213 42.9319 32.164 43.5949C32.434 43.6532 32.7136 43.6512 32.9828 43.589C33.2519 43.5268 33.504 43.4059 33.721 43.2349L35.036 42.2159C35.3775 41.8821 35.8371 41.6966 36.3147 41.7C36.7923 41.7034 37.2492 41.8953 37.586 42.2339L39.319 43.9779C39.6212 44.2975 39.8007 44.7136 39.826 45.1527C39.8512 45.5918 39.7205 46.0258 39.457 46.3779L39.347 46.5199C38.7018 47.3505 37.8761 48.0235 36.9324 48.4878C35.9887 48.9521 34.9517 49.1956 33.9 49.1999Z" fill="white"/>
// <path d="M31.419 39.357C31.3709 39.357 31.3232 39.3475 31.2787 39.329C31.2342 39.3106 31.1938 39.2835 31.1598 39.2494C31.1258 39.2154 31.0989 39.1749 31.0806 39.1304C31.0622 39.0858 31.0529 39.0381 31.053 38.99V33.353C30.4682 32.7392 30.0101 32.0161 29.7052 31.225C29.4003 30.434 29.2544 29.5905 29.276 28.743C29.2771 26.9564 29.9867 25.2431 31.2493 23.979C32.5119 22.7149 34.2244 22.0032 36.011 22H41.441C43.2354 22.0206 44.9483 22.7519 46.2043 24.0335C47.4603 25.3152 48.1567 27.0426 48.141 28.837C48.1567 30.6314 47.4603 32.3588 46.2043 33.6405C44.9483 34.9221 43.2354 35.6534 41.441 35.674H36.141L31.65 39.274C31.5849 39.3266 31.5037 39.3552 31.42 39.355" fill="white"/>
// <path d="M37 28C37 27.4477 36.5523 27 36 27C35.4477 27 35 27.4477 35 28V30C35 30.5523 35.4477 31 36 31C36.5523 31 37 30.5523 37 30V28Z" fill="#FF710B"/>
// <path d="M42 28C42 27.4477 41.5523 27 41 27C40.4477 27 40 27.4477 40 28V30C40 30.5523 40.4477 31 41 31C41.5523 31 42 30.5523 42 30V28Z" fill="#FF710B"/>
// <defs>
// <filter id="filter0_d_5113_21255" x="0" y="0" width="70" height="70" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
// <feFlood floodOpacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset/>
// <feGaussianBlur stdDeviation="5"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0.1 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5113_21255"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5113_21255" result="shape"/>
// </filter>
// <linearGradient id="paint0_linear_5113_21255" x1="10" y1="35" x2="60" y2="35" gradientUnits="userSpaceOnUse">
// <stop stopColor="#FFE8D7"/>
// <stop offset="1" stopColor="#FF710B"/>
// </linearGradient>
// </defs>
// </svg>
