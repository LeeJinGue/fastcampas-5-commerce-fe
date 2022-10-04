import React, { useState } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, RadioGroup, VStack, Radio, useRadio, chakra, useRadioGroup, Stack, Input } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import CheckboxIcon from '@components/common/New/@Icons/System/CheckboxIcon';
import PrimaryButton from '@components/common/New/PrimaryButton';

interface MypageWithdrwalPageProps extends ChakraProps { }
const reasons = ["아이디 변경(재가입)", "낮은 구매 빈도", "서비스 및 고객지원 불만족", "타 브랜드 이용", "기타"]
function MypageWithdrwalPage({ ...basisProps }: MypageWithdrwalPageProps) {
  const handleChange = (value: string) => {
    console.log("# value:", value)
  }
  const [etc, setEtc] = useState("")
  const [vfstring, setVfstring] = useState("")
  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: '아이디 변경(재가입)',
    onChange: handleChange,
  })
  return (
    <Flex pt={LAYOUT.HEADER.HEIGHT} w="375px" pb="30px" flexDir="column" bgColor="white" {...basisProps}>
      <Text mt="50px" px="16px" textStyle="titleLarge">회원탈퇴</Text>
      <Flex
        bgColor="gray.100" mt="80px" px="16px" py="18px">
        <Text textStyle="text" textColor="black">
          {"회원 탈퇴 시 개인 정보 및 인코스런에서 만들어진 모든 데이터는 삭제됩니다. 한 번 삭제된 정보는 복구가 불가능합니다."}
        </Text>
      </Flex>
      <Flex px="16px" h="55px" alignItems="center" borderBottom="1px solid" borderColor="gray.100">
        <Text textStyle="title" textColor="black">{"회원 정보"}</Text>
      </Flex>
      <Flex // 회원정보 텍스트들
        textStyle="text" mt="15px" mb="20px" px="16px">
        <Flex textColor="black" flexDir="column">
          <Text>이름</Text>
          <Text mt="10px">핸드폰 번호</Text>
          <Text mt="10px">이메일 주소</Text>
        </Flex>
        <Flex textColor="gray.700" ml="24px" flexDir="column">
          <Text>{"김인코스런"}</Text>
          <Text mt="10px">{"010-1234-1234"}</Text>
          <Text mt="10px">{"incourse.run@gmail.com"}</Text>
        </Flex>
      </Flex>
      <Box h="10px" bgColor="gray.100" />
      <Flex px="16px" h="55px" alignItems="center" borderBottom="1px solid" borderColor="gray.100">
        <Text textStyle="title" textColor="black">{"탈퇴 사유"}</Text>
      </Flex>

      <Stack {...getRadioProps} mb="30px">
        <Flex flexDir="column" px="16px" mt="15px">
          {reasons.map((reason) => {
            return (
              <CustomRadio
                etc={etc} setEtc={setEtc}
                key={reason}
                text={reason}
                {...getRadioProps({ value: reason })}
              />
            )
          })}
        </Flex>
      </Stack>
      <Box bgColor="gray.100" h="10px" />
      <Flex px="16px" h="55px" alignItems="center" borderBottom="1px solid" borderColor="gray.100">
        <Text textStyle="title" textColor="black">{"인코스런을 입력해주세요"}</Text>
      </Flex>
      <Input
          boxSizing='border-box' pl="20px" textStyle="text" h="40px" w="343px" alignSelf="center"
          border={"1px solid"} borderColor="black" borderRadius="100px"
          value={vfstring} onChange={(e)=>setVfstring(e.target.value)} autoComplete="off" />
      <Flex mt="80px" px="16px" justifyContent="space-between">
        <PrimaryButton w="165px" h="50px" btntype={'Line'} btnstate={'Primary'} btnshape={'Round'}>취소</PrimaryButton>
        <PrimaryButton w="165px" h="50px" btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'}>탈퇴하기</PrimaryButton>
      </Flex>
    </Flex>
  );
}

const CustomRadio = ({ ...props }) => {
  const { text, etc, setEtc, ...radioProps } = props
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =
    useRadio(radioProps)

  return (
    <chakra.label {...htmlProps} cursor='pointer'>
      <Flex alignItems="center" mb="10px">
        <input {...getInputProps({})} hidden />
        <CheckboxIcon {...getCheckboxProps()} state={state.isChecked ? 'Select' : 'Default'} shape={'Circle'} />
        <Text textStyle="text" textColor="black" ml="10px">{text}</Text>
      </Flex>
      {text === "기타" &&
        <Input
          disabled={text !== "기타"}
          boxSizing='border-box' pl="20px" textStyle="text" h="40px" w="full"
          border={"1px solid"} borderColor="black" borderRadius="100px"
          placeholder='사유를 입력해주세요.'
          value={etc} onChange={(e) => setEtc(e.target.value)}
          autoComplete="off" />}
    </chakra.label>
  )
}
export default MypageWithdrwalPage;
