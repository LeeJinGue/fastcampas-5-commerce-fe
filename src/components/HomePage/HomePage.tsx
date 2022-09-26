import React from 'react';

import { Box, BoxProps, Button, Circle, Container, Image, Square, Text } from '@chakra-ui/react';
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
      w="375px" h="450px"
      ></Box>
    </>)
}
const VerticalLine = ({ ...basisProps }) => {
  return <Box ml="152px" as="span" w={0} h="40px" border="2px solid" borderColor="gray.400" />
}


export default HomePageContent;
