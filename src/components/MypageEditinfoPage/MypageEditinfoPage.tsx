import React from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import useEditInfoForm, { EditInfoFormDataType } from './_hooks/useEditInfoForm';
import { useRouter } from 'next/router';
import EditInfoPageView from './MypageEditinfoPage.view';
import { useGetUserMeQuery } from '@apis/user/UserApi.query';
import { getToken } from '@utils/localStorage/token';
import { useDispatch } from 'react-redux';
import store from '@features/store';
import { usePatchUserMe } from '@apis/user/UserApi.mutation';
import { complete_edit_info_popup_string, PROFILE_EXAMPLE } from '@constants/string';
import { ROUTES } from '@constants/routes';
import Popup from '@components/common/New/Popup';

interface MypageEditmyinfoPageProps extends ChakraProps { }
const {bodyText, okText} = complete_edit_info_popup_string
function MypageEditmyinfoPage({ ...basisProps }: MypageEditmyinfoPageProps) {
  const {data:userData, isError:userDataError, isLoading:userDataLoading} = useGetUserMeQuery({variables:{accessToken:""}})
  if(userDataLoading) return <Text>유저정보 로딩중</Text>
  if(userDataError) return <Text>유저정보 가져오기 실패</Text>
  if(userData === undefined) return <Text>유저정보 가져오기 실패</Text>
  const formData = useEditInfoForm(userData);
  const route = useRouter()
  const { isOpen:isPopupOpen, onClose:popupClose, onOpen:popupOpen} = useDisclosure()
  const { handleSubmit } = formData;
  const { mutateAsync:editInfoMutate, isLoading, isSuccess, data} = usePatchUserMe()
  const onSubmit = handleSubmit(({ username, nickname, email, phone, gender, age }) => {
    // 회원정보 수정 성공!
    const phoneData= phone.replaceAll("-", "")
    editInfoMutate({
      name: username,
      nickname,
      phone: phoneData,
      email,
      profile: PROFILE_EXAMPLE,
      gender: gender.value,
      age: Number.parseInt(age.value),
      accessToken: getToken()?.access!
    }).then((res) => {
      // console.log("회원정보 수정 성공, ",res)
      popupOpen()
    }).catch((err) => {
      // console.log("회원정보 수정 에러, ",err)
    })
  });
  return (<>
  <EditInfoPageView {...basisProps} formData={formData} onSubmit={onSubmit} />
  <Popup isOpen={isPopupOpen} onClose={popupClose} bodyMsg={bodyText} 
  okMsg={okText} okOnclick={popupClose} children={undefined} />
  </>);

}

export default MypageEditmyinfoPage;
