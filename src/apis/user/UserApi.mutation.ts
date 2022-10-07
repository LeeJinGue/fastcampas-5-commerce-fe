import { useMutation } from '@tanstack/react-query';

import { MutationHookParams } from '@apis/type';

import userApi from './UserApi';
import {
  UserDTOType,
  UserParamPatchType,
  UserParamPutType,
} from './UserApi.type';

export const USER_API_MUTATION_KEY = {
  POST: (param?: UserDTOType) => ['user-post', param],
  PUT: (req?: UserParamPutType) => ['user-put', req],
  PATCH: (req?: UserParamPatchType) => ['user-patch', req],
  DELETE: (id?: string) => ['user-delete', id],
};

export const usePostUserMutation = (
  params?: MutationHookParams<typeof userApi.postUser>,
) => {
  return useMutation(userApi.postUser, {
    ...params?.options,
  });
};
export const usePostRegisterMutation = (
  params?: MutationHookParams<typeof userApi.postRegister>,
) => {
  return useMutation(userApi.postRegister, {
    ...params?.options,
  },);
};
export const usePutUserMutation = (
  params?: MutationHookParams<typeof userApi.putUser>,
) => {
  return useMutation(userApi.putUser, {
    ...params?.options,
  });
};
export const usePatchUserMutation = (
  params?: MutationHookParams<typeof userApi.patchUser>,
) => {
  return useMutation(userApi.patchUser, {
    ...params?.options,
  });
};
export const useDeleteUserMutation = (
  params?: MutationHookParams<typeof userApi.deleteUser>,
) => {
  return useMutation(userApi.deleteUser, {
    ...params?.options,
  });
};
