import { useMutation } from '@tanstack/react-query';

import { MutationHookParams } from '../type';

import CartApi from './CartApi';

export const usePostCartMutation = (
  params?: MutationHookParams<typeof CartApi.postCart>,
) => {
  return useMutation(CartApi.postCart, {
    ...params?.options,
  });
};
export const usePostCartItemMutation = (
  params?: MutationHookParams<typeof CartApi.postCartItem>,
) => {
  return useMutation(CartApi.postCartItem, {
    ...params?.options,
  });
};

export const usePatchCartItemByCartItemIdMutation = (
  params?: MutationHookParams<typeof CartApi.patchCartItemByCartItemId>,
) => {
  return useMutation(CartApi.patchCartItemByCartItemId, {
    ...params?.options,
  });
};
export const useDeleteCartItemByCartItemIdMutation = (
  params?: MutationHookParams<typeof CartApi.deleteCartItemByCartItemId>,
) => {
  return useMutation(CartApi.deleteCartItemByCartItemId, {
    ...params?.options,
  });
};
