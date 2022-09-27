import React from 'react';

import { Box, BoxProps, Button, Circle, Container, Divider, Flex, IconButton, Image, Square, Text } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import UploadIcon from '@components/common/New/@Icons/System/Upload';
import DuotoneBoxIcon from '@components/common/New/@Icons/Duotone/Box';
import CheckLineIcon from '@components/common/New/@Icons/System/CheckLine';
import DuotoneDeliveryIcon from '@components/common/New/@Icons/Duotone/Delivery';
import DuotonePaymentIcon from '@components/common/New/@Icons/Duotone/Payment';
import DuotoneAssignIcon from '@components/common/New/@Icons/Duotone/Assign';
import DistributionProcess from './_fragment/DistributionProcess';
import ElipseIcon from '@components/common/New/@Icons/Elipse';
import Badge from '@components/common/New/Badge';
import LogoWhiteIcon from '@components/common/New/@Icons/LogoWhite';
import LogoPrimaryIcon from '@components/common/New/@Icons/LogoPrimary';
import ListNumberArrowIcon from '@components/common/New/@Icons/System/ListNumberArrow';
import PrimaryButton from '@components/common/New/PrimaryButton';
import RatioStarIcon from '@components/common/New/@Icons/System/RatioStar';
import FloatingCallButton, { CallButton } from '@components/common/New/FloatingActionButtons/Call';
import CallIcon from '@components/common/@Icons/System/Call';
import DefaultInstgramIcon from '@components/common/@Icons/Social/Default/Instagram';
import FloatingDefaultButton from '@components/common/New/FloatingActionButtons/Default';

interface HomePageContentProps extends BoxProps { }

function HomePageContent({ ...basisProps }: HomePageContentProps) {
  return (
    <>
      <Box pt={LAYOUT.HEADER.HEIGHT} display="flex" flexDirection="column"
        h="782px"
        mb="0"
        w={"375px"}
        px="16px"
        backgroundImage="/images/main1.png" {...basisProps}>
        <Text mt="80px" textStyle="extraLargeBold">{"지속 가능한 클린"}<br />{"클린&비건뷰티, 인코스런"}</Text>
        <Text mt="20px" textStyle="textLarge">{"자연과 사람에게"}<br />{"책임질 수 있는 지속 가능한"}<br />{"제품을 만듭니다."}</Text>
      </Box>
      <Box h="782px" w="375px" bg="pointSub">
        <Box position="absolute" mt="20px" ml="31px" w="244px" h="140px" bgImage={"/images/main_box1.png"} />
        <Box position="absolute" mt="160px" ml="139px" w="236px" h="180px" bgImage={"/images/main_box2.png"} />
        <Box position="absolute" mt="307px" w="175px" h="204px" bgImage={"/images/main_box3.png"} />
        <Box position="absolute" mt="481px" ml="75px" display="flex" flexDir="row">
          <Button p="0" alignSelf="flex-end" bg="transparent"><UploadIcon /></Button>
          <Text color="black" textStyle="extraLargeBold">{"불합리한 유통구조"}<br />{"과도한 패키징"}<br />{"과장된 광고"}</Text>
        </Box>
        <Text color="black" textStyle="textLarge" position="absolute" mt="635px" ml="75px">
          {"부풀려지는 가격은 이제 그만!"}<br /><Text color={"primary.500"} as="span">{"인코스런"}</Text>{"은 가격거품을 제거한"}<br />{"착한소비를 위해 태어났습니다."}
        </Text>
      </Box>
      <Box h="430px" w="375px" bgImage="/images/main3.png">
        <Text textStyle="extraLargeBold" ml="106px" mt="180px">{"이제 합리적으로"}<br />{"지갑을 지키세요!"}</Text>
      </Box>
      <Text mt="80px" color="primary.500" textStyle="extraLargeBold">{"부풀려지는 가격 이제 그만!"}</Text>
      <Text textAlign="center" mt="20px" color="black" textStyle="textLarge">
        {"불합리한 "}<Text fontWeight="700" as="span">{"중간 유통 거품을 제거"}</Text>{"한"}<br />
        {"인코스런만의 투명한 유통혁신"}
      </Text>
      <Box h="828px" mt="60px" w="375px" bg="white" >
        <DistributionProcess iconType="Box" isChecked={true} title="STEP 1" contents={<>{"제조공장의"}<br />{"제조 및 개발비용"}</>} />
        <VerticalLine />
        <DistributionProcess iconType='Delivery' isChecked={false} title="STEP 2" contents={<>{"물류 및 운송비용"}</>} />
        <VerticalLine />
        <DistributionProcess iconType='Payment' isChecked={false} title="STEP 3" contents={<>{"결제 수수료"}</>} />
        <VerticalLine />
        <DistributionProcess iconType="Assign" isChecked={true} title="STEP 4" contents={<>{"소비자 가격"}</>} />
        <ElipseIcon mt="23px" />
        <Text mt="20px" textAlign="center" textStyle="title" color="primary.500">{"SAVE MONEY"}</Text>
      </Box>
      <Text textAlign="center" textStyle="text" color="black" mt="30px">
        <Text textStyle="title" color="primary.500">
          {"*온라인 직접판매"}<br />
        </Text>
        {"인코스런은 온라인으로만 직접 판매하여,"}<br />
        {"더 낮은 가격을 만들어냅니다."}
      </Text>
      <Box w="100%" h="762px"   // 이렇게 비교하세요!
      >

        <Text textAlign="center" mt="80px" color="black" textStyle="extraLarge">
          {"이렇게 "}
          <Text as="span" textStyle="extraLargeBold">{"비교하세요!"}</Text>
        </Text>
        <Text textAlign="center" textStyle="textLarge" mt="20px">
          {"인코스런은 부담스러운"}<br />
          {"영유아 화장품의"}
          <Text textDecoration="underline" textDecorationColor="primary.500" textDecorationThickness="10px" textStyle="titleLarge" as="span">
            {"가격거품을 제거해"}<br />
            {"투명한 가격"}
          </Text>
          {"을 만들어 갑니다."}
        </Text>
        <Box mt="70px" display="flex" flexDir="row" justifyContent="space-around" // 가격비교
        >
          <Box // 시중 주요 브랜드
          >
            <Box w="150px" h="360px" bg="gray.400" // 시중 주요 브랜드 가격
            display="flex" justifyContent="center"
            >
              <Badge mode="off" mt="20px" textColor="white" bgColor="gray.700" children="2~30,000원" />
            </Box>
            <Text mt="10px" textAlign="center" textStyle="textLarge" color="gray.700">{"시중 주요 브랜드"}</Text>
          </Box>
          <Box alignSelf="end" // 인코스런
          >
            <Box w="150px" h="120px" bg="secondary.100" // 인코스런 가격
            display="flex" flexDir="column" alignItems="center"
            >
              <Badge mode="on" mt="20px" children="9,900원" />
              <LogoPrimaryIcon mt="20px" w="104" h="14" />
            </Box>
            <Text mt="10px" textAlign="center" textStyle="titleLarge" color="primary.500">{"인코스런"}</Text>
          </Box>
        </Box>
      </Box>
      <Box // 가입 이벤트 박스
      bgImage={"/images/main_event_bg.png"}
      w="375px" h="450px" pl="16px"
      >
        <Text mt="100px" textStyle="extraLarge" textColor="black">
          <Text as="span" textStyle="extraLargeBold" textColor="primary.500">{"인코스런"}</Text>
          {"가입하고"}<br />
          <Text as="span" textStyle="extraLargeBold">{"전상품 1000원 혜택"}<br /></Text>
          {"받아보세요"}
        </Text>
        <Flex mt="20px" flexDir="row" alignItems="center" >
          <Text textStyle="text" textColor="black">{"이벤트 상세보기"}</Text>
          <ListNumberArrowIcon colortype='Default' />
        </Flex>
      </Box>
      <Flex // 소중한 우리 아이를 위해... 배경 박스
        w="375px" h="1354px"
        bgImage="/images/main_bg5.png"
        px="16px" py="20px"
      >
        <Flex // 내용 박스
          flexDir="column"
          bgColor="white"
          alignItems="center"
          w="100%"
        >
          <Text mt="71px" textColor="black" textStyle="extraLargeBold">{"소중한 우리 아이를 위해"}</Text>
          <Text mt="20px" textColor="black" textStyle="text" textAlign="center">
            {"순수 자연유래 / 자연유래 유화제 / 자연유래"}<br />
            {"계면활성제 99.9% 타가는 EWG 그린등급"}<br />
            {"성분 100% 만을 사용한 건강한 화장품입니다"}
          </Text>
          <PrimaryButton mt="30px" children="상품전체보기"/>
          <Image mt="80px" src="/images/cosmetics_img_with_mask.png" w="151px" h="189px" />
          <Text mt="10px" textStyle="title" textColor="black">{"바스 & 샴푸"}</Text>
          <Image mt="80px" src="/images/cosmetics_img_with_mask.png" w="151px" h="189px" />
          <Text mt="10px" textStyle="title" textColor="black">{"오일"}</Text>
          <Image mt="80px" src="/images/cosmetics_img_with_mask.png" w="151px" h="189px" />
          <Text mt="10px" textStyle="title" textColor="black">{"파우더 로션"}</Text>
        </Flex>
      </Flex>
      <Flex // 솔직한 리뷰 박스
      h="876px"
      w="375px"
      flexDir="column"
      bgColor="white"
      alignItems="center"
      position="relative"
      >
        <FloatingCallButton // 전화 Floating 버튼
          position="absolute" right="16px" bottom="20px" aria-label={'call'}/>
        <Text mt="80px" textStyle="extraLarge" textColor="black" textAlign="center">
          {"인코스런을 "}<Text as="span" textStyle="extraLargeBold">{"직접 사용해본"}</Text> <br />
          {"고객님의 솔직한 리뷰"}
        </Text>
        <Flex // Tab Component
        mt="50px"
        flexDir="row"
        >
          <Badge mode={'on'} children="전체" />
          <Badge ml="10px" mode={'off'} children="바스&샴푸" />
          <Badge ml="10px" mode={'off'} children="오일" />
          <Badge ml="10px" mode={'off'} children="로션" />
          <Badge ml="10px" mode={'off'} children="크림" />
          <Badge ml="10px" mode={'off'} children="파우더 로션" />
        </Flex>
        <Flex // Cards Component
        h="464px"
        flexDir="row"
        mt="76px"
        >
          <Flex // Card 1
          w="325px" h="100%"
          px="20px" pt="23px" flexDir="column"
          borderRadius="20px" bgColor="white"
          boxShadow="0px 0px 10px rgba(26, 26, 26, 0.1)"
          >
            <Flex // ID & Stars
            flexDir="row"
            justifyContent="space-between"
            >
              <Text // 리뷰어 아이디
              textStyle="titleSmall"
              textColor="black"
              >
                {"incourse.run"}
              </Text>
              <Flex // 리뷰어가 준 별점
              flexDir="row"
              >
                <RatioStarIcon size="12" ratio='full' />
                <RatioStarIcon size="12" ratio='full' />
                <RatioStarIcon size="12" ratio='full' />
                <RatioStarIcon size="12" ratio='full' />
                <RatioStarIcon size="12" ratio='empty' />
              </Flex>
            </Flex>
            <Text // 날짜
            textStyle="textSmall"
            textColor="gray.700"
            >{"2021.03.29"}</Text>
            <Text // 리뷰 내용
            textStyle="text"
            textColor="black"
            w="285px" h="225px"
            mt="30px"
            >
              {"순해서 아이피부에도 자극없이 사용할 수 있어요! 아이 뿐 만아니라 온 가족이 사용할 수 있는 화장품이라고 추천받았어요. 처음엔 반신반의하는 마음으로 사용하기 시작했는데 지금은 모든 단계에서 인코스런 제품을 사용하고있어요! 아토피로 고생했던 우리 아이 피부도 지금은 거의 완치단계입니다 . 아이 엄마들에게 추천드려요!"}
            </Text>
            <Divider my="20px" borderColor="gray.300" />
            <Flex // 이미지 박스
            >
              <Image borderRadius="5px" src="/images/review_img1.png" w="80px" h="80px" />
              <Image ml="10px" borderRadius="5px" src="/images/review_img2.png" w="80px" h="80px" />
              <Image ml="10px" borderRadius="5px" src="/images/review_img3.png" w="80px" h="80px" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex // 인코스런에 대해 더 궁금하신가요?
      flexDir="column" alignItems="center"
      bg={"linear-gradient(90deg, #FF710B 0%, #FFAB2E 100%)"}
      w="375px" h="300px"
      position="relative"
      >
        <FloatingDefaultButton // 맨 위로 Floating 버튼
        position="absolute" right="16px" bottom="20px" aria-label={'up'} />
        <Text mt="83px" textStyle="titleLarge" textAlign="center" textColor="white" >
          {"인코스런에 대해 더 궁금하신가요?"}
        </Text>
        <Text mt="10px" textStyle="text" textAlign="center" textColor="white" >
          {"인스타그램을 방문하시면 더욱 다양한"}<br/>
          {"인코스런의 이야기를 확인하실 수 있어요"}
        </Text>
        <Button p="0" iconSpacing="5px" backgroundColor={"transparent"} mt="12px" leftIcon={<DefaultInstgramIcon iconColor='White' />} textColor="white" textStyle="button">{"INCOURSE.RUN"}</Button>
      </Flex>
    </>)
}
const VerticalLine = ({ ...basisProps }) => {
  return <Box ml="152px" as="span" w={0} h="40px" border="2px solid" borderColor="gray.400" />
}


export default HomePageContent;
