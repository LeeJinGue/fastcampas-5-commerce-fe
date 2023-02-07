import { useInfiniteQuery, useQueries, useQuery } from '@tanstack/react-query';

import { InfiniteQueryHookParams, QueryHookParams } from '../type';

import productApi from './ProductApi';
import { ProductParamGetType, ReviewByTagParamGetType } from './ProductApi.type';

export const PRODUCT_API_QUERY_KEY = {
  GET: (param?: ProductParamGetType) => ['product-list', param],
  GET_BY_ID: (id?: number) => ['product-by-id', id],
  GET_BY_IDS: (id?: number) => ['product-by-ids', id],
  GET_TAG_LIST: () => ['product-tag-list'],
  GET_REVIEW_BY_TAG: (param?: ReviewByTagParamGetType) => ['review-by-tag', param],
};

export function useGetProductListQuery(
  params?: QueryHookParams<typeof productApi.getProductList>,
) {
  const queryKey = PRODUCT_API_QUERY_KEY.GET(params?.variables);
  const query = useQuery(
    queryKey,
    () => productApi.getProductList(params?.variables),
    params?.options,
  );
  return { ...query, queryKey };
}
export function useGetTagListQuery(
  params?: QueryHookParams<typeof productApi.getAllTagList>,
) {
  const queryKey = PRODUCT_API_QUERY_KEY.GET_TAG_LIST();
  const query = useQuery(
    queryKey,
    () => productApi.getAllTagList(),
    params?.options,
  );
  return { ...query, queryKey };
}
export function useGetReviewListByTagQuery(
  params: QueryHookParams<typeof productApi.getReviewListByTagName>,
) {
  const queryKey = PRODUCT_API_QUERY_KEY.GET_REVIEW_BY_TAG(params.variables);
  const query = useQuery(
    queryKey,
    () => productApi.getReviewListByTagName(params.variables),
    params?.options,
  );
  return { ...query, queryKey };
}
export function useGetProductByIdQuery(
  params: QueryHookParams<typeof productApi.getProductById>,
) {
  const queryKey = PRODUCT_API_QUERY_KEY.GET_BY_ID(params?.variables);
  const query = useQuery(
    queryKey,
    () => productApi.getProductById(params?.variables),
    params?.options,
    
  
  );

  return { ...query, queryKey };
}
export function useGetProductsByIdListQueries(
  params: QueryHookParams<typeof productApi.getProductById>[],
) {
  return useQueries({
    queries: params.map((param) => {
      const queryKey = PRODUCT_API_QUERY_KEY.GET_BY_IDS(param?.variables);
      return {
        queryKey,
        queryFn: () => productApi.getProductById(param?.variables),
        staleTime: Infinity,
        // options: param?.options,
      }
    })})
}
export function useGetProductInfiniteQuery(
  params: InfiniteQueryHookParams<typeof productApi.getProductList>,
) {
  const queryKey = PRODUCT_API_QUERY_KEY.GET(params?.variables);
  const query = useInfiniteQuery(
    queryKey,
    async ({ pageParam }) => {
      return productApi.getProductList({ ...pageParam })
    },
    {
      getNextPageParam: (last) => {
        if (last.cursor !== null) {
          return last
        }
      },
      ...params?.options,
    },
  );
  return { ...query, queryKey };
}