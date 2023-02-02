import { useMutation } from '@tanstack/react-query';

import { MutationHookParams } from '../type';

import orderApi from './OrderApi';

export const usePostOrderMutation = (
  params?: MutationHookParams<typeof orderApi.postOrder>,
) => {
  return useMutation(orderApi.postOrder, {
    ...params?.options,
  });
};

export const usePutOrderByIdMutation = (
  params?: MutationHookParams<typeof orderApi.putOrderById>,
) => {
  return useMutation(orderApi.putOrderById, {
    ...params?.options,
  });
};

export const usePatchOrderByIdMutation = (
  params?: MutationHookParams<typeof orderApi.patchOrderById>,
) => {
  return useMutation(orderApi.patchOrderById, {
    ...params?.options,
  });
};
export const usePatchShippingStatusByIdMutation = (
  params?: MutationHookParams<typeof orderApi.patchOrderStatusById>,
) => {
  return useMutation(orderApi.patchOrderStatusById, {
    ...params?.options,
  });
};
export const usePosthOrderStatus = (
  params?: MutationHookParams<typeof orderApi.postOrderStatus>,
) => {
  return useMutation(orderApi.postOrderStatus, {
    ...params?.options,
  });
};
