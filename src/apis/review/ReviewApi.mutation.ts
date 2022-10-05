import { useMutation } from '@tanstack/react-query';

import { MutationHookParams } from '@apis/type';

import reviewApi from './ReviewApi';
import {
  ReviewDTOType,
  ReviewParamPatchType,
  ReviewParamPutType,
} from './ReviewApi.type';

export const REVIEW_API_MUTATION_KEY = {
  POST: (param?: ReviewDTOType) => ['review-post', param],
  PUT: (req?: ReviewParamPutType) => ['review-put', req],
  PATCH: (req?: ReviewParamPatchType) => ['review-patch', req],
  DELETE: (id?: string) => ['review-delete', id],
};

export const usePostReviewMutation = (
  params?: MutationHookParams<typeof reviewApi.postReview>,
) => {
  return useMutation(reviewApi.postReview, {
    ...params?.options,
  });
};

export const usePutReviewMutation = (
  params?: MutationHookParams<typeof reviewApi.putReview>,
) => {
  return useMutation(reviewApi.putReview, {
    ...params?.options,
  });
};
export const usePatchReviewMutation = (
  params?: MutationHookParams<typeof reviewApi.patchReview>,
) => {
  return useMutation(reviewApi.patchReview, {
    ...params?.options,
  });
};
export const useDeleteReviewMutation = (
  params?: MutationHookParams<typeof reviewApi.deleteReview>,
) => {
  return useMutation(reviewApi.deleteReview, {
    ...params?.options,
  });
};
