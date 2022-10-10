import { useQuery } from '@tanstack/react-query';

import { QueryHookParams } from '@apis/type';

import userApi from './UserApi';
import { UserGetMeParamType } from './UserApi.type';

export const USER_API_QUERY_KEY = {
  GET_ME: (param: UserGetMeParamType) => ['user-me', param],
};

export function useGetUserMeQuery(
  params: QueryHookParams<typeof userApi.getUserMe>,
) {
  const queryKey = USER_API_QUERY_KEY.GET_ME(params.variables);
  const query = useQuery(
    queryKey,
    () => userApi.getUserMe(params?.variables),
    params?.options,
  );
  return { ...query, queryKey };
}