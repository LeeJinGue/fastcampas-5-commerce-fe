import { useMutation } from '@tanstack/react-query';

import { MutationHookParams } from '../type';

import productApi from './ProductApi';
import {
  ProductDTOType,
  ProductParamPatchType,
  ProductParamPutType,
} from './ProductApi.type';

export const PRODUCT_API_MUTATION_KEY = {
  POST: (param?: ProductDTOType) => ['product-post', param],
  PUT: (req?: ProductParamPutType) => ['product-put', req],
  PATCH: (req?: ProductParamPatchType) => ['product-patch', req],
  DELETE: (id?: string) => ['product-delete', id],
};

export const usePostProductMutation = (
  params?: MutationHookParams<typeof productApi.postProduct>,
) => {
  return useMutation(productApi.postProduct, {
    ...params?.options,
  });
};

export const usePutProductMutation = (
  params?: MutationHookParams<typeof productApi.putProduct>,
) => {
  return useMutation(productApi.putProduct, {
    ...params?.options,
  });
};
export const usePatchProductMutation = (
  params?: MutationHookParams<typeof productApi.patchProduct>,
) => {
  return useMutation(productApi.patchProduct, {
    ...params?.options,
  });
};
export const useDeleteProductMutation = (
  params?: MutationHookParams<typeof productApi.deleteProduct>,
) => {
  return useMutation(productApi.deleteProduct, {
    ...params?.options,
  });
};
