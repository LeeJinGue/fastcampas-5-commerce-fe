import userApi from '@apis/user/UserApi';
import { useGetUserMeQuery } from '@apis/user/UserApi.query';
import { useQuery } from '@tanstack/react-query';
import { getToken } from '@utils/localStorage/token';

import { QueryHookParams } from '../type';

import CartApi from './CartApi';
import { CartGetByCartItemIdParamType, CartGetByUserIdParamType } from './CartApi.type';

export const Cart_API_QUERY_KEY = {
  GET: (param?: CartGetByUserIdParamType) => ['cart', param],
  GET_CART_ITEM_BY_ID: (param?: CartGetByCartItemIdParamType) => ['cart-item-by-id', param],
};

export function useGetCartQuery(
  params: QueryHookParams<typeof CartApi.getCart>,
) {
  const queryKey = Cart_API_QUERY_KEY.GET(params?.variables);
  const query = useQuery(
    queryKey,
    async () => {
      const accessToken = getToken()!.access
      const userData = await userApi.getUserMe({accessToken})
      // return CartApi.getCart(params.variables)
      const user_id = userData.id
      return CartApi.getCart({user_id})
    },
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