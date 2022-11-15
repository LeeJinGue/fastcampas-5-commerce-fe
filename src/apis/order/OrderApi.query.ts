import { useQuery } from '@tanstack/react-query';

import { QueryHookParams } from '../type';

import orderApi from './OrderApi';
import {OrderStatusGetByIdParamType, OrderGetAllParamType, OrderGetByIdParamType, OrderGetStatusParamType, OrderParamGetType } from './OrderApi.type';

export const ORDER_API_QUERY_KEY = {
  GET: (param?: OrderGetAllParamType) => ['order-list', param],
  GET_BY_ID: (param?: OrderGetByIdParamType) => ['order-by-id', param],
  GET_STATUS: (param?: OrderGetStatusParamType) => ['order-status', param],
  GET_STATUS_BY_ID: (param?: OrderStatusGetByIdParamType) => ['order-status-by-id', param],
  
};

export function useGetOrderListQuery(
  params?: QueryHookParams<typeof orderApi.getOrderList>,
) {
  const queryKey = ORDER_API_QUERY_KEY.GET(params?.variables);
  const query = useQuery(
    queryKey,
    () => orderApi.getOrderList(params?.variables),
    params?.options,
  );
  return { ...query, queryKey };
}

export function useGetOrderByIdQuery(
  params: QueryHookParams<typeof orderApi.getOrderById>,
) {
  const queryKey = ORDER_API_QUERY_KEY.GET_BY_ID(params?.variables);
  const query = useQuery(
    queryKey,
    () => orderApi.getOrderById(params?.variables),
    params?.options,
  );
  return { ...query, queryKey };
}
export function useGetOrderStatusQuery(
  params: QueryHookParams<typeof orderApi.getOrderStatus>,
) {
  const queryKey = ORDER_API_QUERY_KEY.GET_STATUS(params?.variables);
  const query = useQuery(
    queryKey,
    () => orderApi.getOrderStatus(params?.variables),
    params?.options,
  );
  return { ...query, queryKey };
}
export function useGetOrderStatusByIdQuery(
  params: QueryHookParams<typeof orderApi.getOrderStatusById>,
) {
  const queryKey = ORDER_API_QUERY_KEY.GET_STATUS_BY_ID(params?.variables);
  const query = useQuery(
    queryKey,
    () => orderApi.getOrderStatusById(params?.variables),
    params?.options,
  );
  return { ...query, queryKey };
}