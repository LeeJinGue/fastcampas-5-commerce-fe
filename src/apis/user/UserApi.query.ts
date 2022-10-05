import { useQuery } from '@tanstack/react-query';

import { QueryHookParams } from '@apis/type';

import userApi from './UserApi';
import { UserParamGetType } from './UserApi.type';

export const USER_API_QUERY_KEY = {
  GET: (param?: UserParamGetType) => ['user-list', param],
  GET_BY_ID: (id?: string) => ['user-by-id', id],
};

export function useGetUserListQuery(
  params?: QueryHookParams<typeof userApi.getUserList>,
) {
  const queryKey = USER_API_QUERY_KEY.GET(params?.variables);
  const query = useQuery(
    queryKey,
    () => userApi.getUserList(params?.variables),
    params?.options,
  );
  return { ...query, queryKey };
}

export function useGetUserByIdQuery(
  params: QueryHookParams<typeof userApi.getUserById>,
) {
  const queryKey = USER_API_QUERY_KEY.GET_BY_ID(params?.variables);
  const query = useQuery(
    queryKey,
    () => userApi.getUserById(params?.variables),
    params?.options,
  );

  return { ...query, queryKey };
}
