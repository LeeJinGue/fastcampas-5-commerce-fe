import { Button, ButtonProps, Flex, Image, Text } from '@chakra-ui/react';
import { KAKAO_BUTTON_STRING } from '@constants/string';
import DefaultKakaoIcon from './@Icons/Social/Default/Kakao';

export type SocialType = 'kakao' | 'naver' | 'facebook' | 'google' | 'apple';
export interface SocialButtonProps extends ButtonProps {
  data: {
    social: SocialType;
    link: string;
  },
}
const BUTTON_WIDTH = "310px";
const KAKAO_ICON_ML = "27px";
const KAKAO_BUTTON_STRING_ML = "40.55px";
const KakaoButton = ({ data, ...props }: SocialButtonProps) => {
  return (
    <Button
      bg="#FFDE32"
      w={BUTTON_WIDTH}
      h="45px"
      onClick={() => window.open(data.link)}
      p="0"
      justifyContent="start"
      borderRadius="4px"
      {...props}
    >
        <DefaultKakaoIcon ml={KAKAO_ICON_ML}/>
        <Text textStyle="text" ml={KAKAO_BUTTON_STRING_ML}>
          {KAKAO_BUTTON_STRING}
        </Text>
    </Button>
  );
};

export default KakaoButton;
