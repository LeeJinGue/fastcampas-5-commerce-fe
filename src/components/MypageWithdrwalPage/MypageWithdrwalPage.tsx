import React, { useState } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, RadioGroup, VStack, Radio, useRadio, chakra, useRadioGroup, Stack, Input } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import CheckboxIcon from '@components/common/New/@Icons/System/CheckboxIcon';
import PrimaryButton from '@components/common/New/PrimaryButton';
import ReasonRadio from './_fragments/ReasonRadio';
import { ADDITIONAL_REASON_TEXT, WITHDRAWAL_EXPLANATION_TEXT, WITHDRAWAL_REASONS } from '@constants/string';
import { useDeleteWithdrawalById, usePostWithdrawalReason } from '@apis/user/UserApi.mutation';
import store from '@features/store';
import { useEffect } from 'react';
import { UserDTOType } from '@apis/user/UserApi.type';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes';
import { deleteToken } from '@utils/localStorage/token';
import { useGetUserMeQuery } from '@apis/user/UserApi.query';
import LoadingPage from '@components/common/New/LoadingPage';
const DEFAULT_REASON = WITHDRAWAL_REASONS[0]
interface MypageWithdrwalDataPageProps extends ChakraProps { }
interface MypageWithdrwalViewPageProps extends MypageWithdrwalDataPageProps {
    userData: UserDTOType,
 }
function MypageWithdrwalDataPage({}:MypageWithdrwalDataPageProps){
  const {data:userData, isError:userGetError, isLoading:userLoadingError} = useGetUserMeQuery({variables: {accessToken:""}})
  if(userLoadingError) return <LoadingPage />
  if(userGetError) return <Text>유저 불러오기 에러</Text>
  if(userData === undefined) return <Text>유저정보 가져오기 실패</Text>
  return <MypageWithdrwalViewPage userData={userData} />
}
function MypageWithdrwalViewPage({ userData, ...basisProps }: MypageWithdrwalViewPageProps) {
  const route = useRouter()
  const {name, phone, email} = userData;
  const [reason, setReason] = useState(DEFAULT_REASON)    // 탈퇴 사유
  const [additionalReason, setAdditionalReason] = useState("")  // 기타 사유
  const [isAdditional, setIsAdditional] = useState(false) // 기타 사유가 아니면 사유입력란 disabled
  const handleReasonChange = (reason: string) => {        // Radio 버튼 onChange 이벤트
    if(reason === ADDITIONAL_REASON_TEXT) setIsAdditional(true)
    else setIsAdditional(false), setAdditionalReason("")
    setReason(reason)
  }

  const [vfstring, setVfstring] = useState("")    // 인코스런을 입력해주세요의 input
  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: DEFAULT_REASON,
    onChange: handleReasonChange,
    name: "탈퇴 사유"
  })
  const {mutateAsync:deleteUserMutate} = useDeleteWithdrawalById()
  const {mutateAsync: postWithdrawalReasonMutate} = usePostWithdrawalReason()
  const handleWithdrawal = () => {
    if(vfstring === "인코스런"){
      const reasonParam = {reason, additionalReason}
      const {id} = userData
      postWithdrawalReasonMutate(reasonParam)
      deleteUserMutate({id})
      deleteToken()
      route.push({pathname:ROUTES.LOGIN})
    }else{
      alert("인코스런을 입력해주세요.")
    }
  }
  const handleCancel = () => route.push({pathname: ROUTES.MYPAGE.MAIN})
  return (
    <Flex pt={LAYOUT.HEADER.HEIGHT} w="375px" pb="30px" flexDir="column" bgColor="white" {...basisProps}>
      <Text mt="50px" px="16px" textStyle="titleLarge">회원탈퇴</Text>
      <Flex
        bgColor="gray.100" mt="80px" px="16px" py="18px">
        <Text textStyle="text" textColor="black">
          {WITHDRAWAL_EXPLANATION_TEXT}
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
          <Text>{name}</Text>
          <Text mt="10px">{phone}</Text>
          <Text mt="10px">{email}</Text>
        </Flex>
      </Flex>
      <Box h="10px" bgColor="gray.100" />
      <Flex px="16px" h="55px" alignItems="center" borderBottom="1px solid" borderColor="gray.100">
        <Text textStyle="title" textColor="black">{"탈퇴 사유"}</Text>
      </Flex>

      <Stack {...getRadioProps} mb="30px">
        <Flex flexDir="column" px="16px" mt="15px">
          {WITHDRAWAL_REASONS.map((reasonText) => {
            return (
              <ReasonRadio key={reasonText} reasonText={reasonText} additionalReason={additionalReason} 
              setAdditionalReason={setAdditionalReason} 
              isAdditional={isAdditional} {...getRadioProps({value:reasonText})}/>
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
        <PrimaryButton w="165px" h="50px" btntype={'Line'} btnstate={'Primary'} btnshape={'Round'} onClick={handleCancel}>취소</PrimaryButton>
        <PrimaryButton w="165px" h="50px" btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'} onClick={handleWithdrawal}>탈퇴하기</PrimaryButton>
      </Flex>
    </Flex>
  );
}

export default MypageWithdrwalDataPage;
