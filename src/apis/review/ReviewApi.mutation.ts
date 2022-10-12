import { useMutation } from '@tanstack/react-query';

import { MutationHookParams } from '@apis/type';

import reviewApi from './ReviewApi';
import {
  ReviewPatchByIdParamType,
  ReviewPostParamType,
  ReviewPutByIdParamType,
} from './ReviewApi.type';

export const REVIEW_API_MUTATION_KEY = {
  POST: (param?: ReviewPostParamType) => ['review-post', param],
  PUT_BY_ID: (param?: ReviewPutByIdParamType) => ['review-put', param],
  PATCH_BY_ID: (param?: ReviewPatchByIdParamType) => ['review-patch', param],
};

export const usePostReviewMutation = (
  params?: MutationHookParams<typeof reviewApi.postReview>,
) => {
  return useMutation(reviewApi.postReview, {
    ...params?.options,
  });
};

export const usePutByIdReviewMutation = (
  params?: MutationHookParams<typeof reviewApi.putReviewById>,
) => {
  return useMutation(reviewApi.putReviewById, {
    ...params?.options,
  });
};
export const usePatchByIdReviewMutation = (
  params?: MutationHookParams<typeof reviewApi.patchReviewById>,
) => {
  return useMutation(reviewApi.patchReviewById, {
    ...params?.options,
  });
};
