import { useQuery } from '@tanstack/react-query';

import { QueryHookParams } from '../type';

import CartApi from './CartApi';
import { CartGetByCartItemIdParamType, CartGetByUserIdParamType } from './CartApi.type';

export const Cart_API_QUERY_KEY = {
  GET: (param?: CartGetByUserIdParamType) => ['cart', param],
  GET_CART_ITEM_BY_ID: (param?: CartGetByCartItemIdParamType) => ['cart-item-by-id', param],
};

export function useGetCartQuery(
  params?: QueryHookParams<typeof CartApi.getCart>,
) {
  const queryKey = Cart_API_QUERY_KEY.GET(params?.variables);
  const query = useQuery(
    queryKey,
    () => CartApi.getCart(params?.variables),
    params?.options,
  );
  return { ...query, queryKey };
}

export function useGetCartItemByCartItemIdQuery(
  params: QueryHookParams<typeof CartApi.getCartItemByCartItemId>,
) {
  const queryKey = Cart_API_QUERY_KEY.GET_CART_ITEM_BY_ID(params?.variables);
  const query = useQuery(
    queryKey,
    () => CartApi.getCartItemByCartItemId(params?.variables),
    params?.options,
  );
  return { ...query, queryKey };
}