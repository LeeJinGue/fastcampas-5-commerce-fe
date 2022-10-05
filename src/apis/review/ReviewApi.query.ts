import { useQuery } from '@tanstack/react-query';

import { QueryHookParams } from '@apis/type';

import reviewApi from './ReviewApi';
import { ReviewParamGetType } from './ReviewApi.type';

export const REVIEW_API_QUERY_KEY = {
  GET: (param?: ReviewParamGetType) => ['review-list', param],
  GET_BY_ID: (id?: string) => ['review-by-id', id],
};

export function useGetReviewListQuery(
  params?: QueryHookParams<typeof reviewApi.getReviewList>,
) {
  const queryKey = REVIEW_API_QUERY_KEY.GET(params?.variables);
  const query = useQuery(
    queryKey,
    () => reviewApi.getReviewList(params?.variables),
    params?.options,
  );
  return { ...query, queryKey };
}

export function useGetReviewByIdQuery(
  params: QueryHookParams<typeof reviewApi.getReviewById>,
) {
  const queryKey = REVIEW_API_QUERY_KEY.GET_BY_ID(params?.variables);
  const query = useQuery(
    queryKey,
    () => reviewApi.getReviewById(params?.variables),
    params?.options,
  );

  return { ...query, queryKey };
}
