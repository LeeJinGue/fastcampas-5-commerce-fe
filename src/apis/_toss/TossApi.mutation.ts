import { useMutation } from '@tanstack/react-query';

import { MutationHookParams } from '../type';

import tossApi from './TossApi';

export const usePostTossMutation = (
  params?: MutationHookParams<typeof tossApi.postConfirm>,
) => {
  return useMutation(tossApi.postConfirm, {
    ...params?.options,
  });
};