import { useMutation } from '@tanstack/react-query';

import { MutationHookParams } from '@apis/type';

import userApi from './UserApi';

// 유저 회원가입
export const usePostRegisterMutation = (
  params?: MutationHookParams<typeof userApi.postRegister>,
) => {
  return useMutation(userApi.postRegister, {
    ...params?.options,
  },);
};
// 유저 소셜 로그인
export const usePostUserSocialLogin = (
  params?: MutationHookParams<typeof userApi.postSocailLogin>,
) => {
  return useMutation(userApi.postSocailLogin, {
    ...params?.options,
  },);
};
// 유저 정보 수정
export const usePatchUserMe = (
  params?: MutationHookParams<typeof userApi.patchUserMe>,
) => {
  return useMutation(userApi.patchUserMe, {
    ...params?.options,
  },);
};

// 유저 정보 삭제
export const useDeleteWithdrawalById = (
  params?: MutationHookParams<typeof userApi.deleteUserById>,
) => {
  return useMutation(userApi.deleteUserById, {
    ...params?.options,
  },);
};
// 유저 정보 삭제 이유 작성
export const usePostWithdrawalReason = (
  params?: MutationHookParams<typeof userApi.postWithdrawalReason>,
) => {
  return useMutation(userApi.postWithdrawalReason, {
    ...params?.options,
  },);
};