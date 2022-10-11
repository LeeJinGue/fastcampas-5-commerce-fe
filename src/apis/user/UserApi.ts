import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import {
  UserDeleteWithdrawalParamType,
  UserDTOType,
  UserGetMeParamType,
  UserPatchMeParamType,
  UserPostRefreshParamType,
  UserPostRefreshReturnType,
  UserPostRegisterParamType,
  UserPostRegisterReturnType,
  UserPostSocialLoginParamType,
  UserPostSocialLoginReturnType,
  UserPostWithdrawalReasonParamType,
} from './UserApi.type';

export class UserApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }
  postRefresh = async (body: UserPostRefreshParamType): Promise<UserPostRefreshReturnType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/user/refresh/`,
      data: body,
    });
    return data;
  };
  postRegister = async (body: UserPostRegisterParamType): Promise<UserPostRegisterReturnType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/user/register/`,
      data: body,
    });
    return data;
  };
  postSocailLogin = async (body: UserPostSocialLoginParamType): Promise<UserPostSocialLoginReturnType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/user/social_login/`,
      data:body,
    });
    return data;
  };
  getUserMe = async (params: UserGetMeParamType): Promise<UserDTOType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/user/me/`,
      headers: {
        Authorization: `Bearer ${params.accessToken}`,
      }
    });
    return data;
  };
  patchUserMe = async (params: UserPatchMeParamType): Promise<UserDTOType> => {
    const {accessToken, ...etc} = params
    const { data } = await this.axios({
      method: 'PATCH',
      url: `/v1/user/me/`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: etc,
    });
    return data;
  };
  deleteUserById = async (params: UserDeleteWithdrawalParamType): Promise<void> => {
    const { id } = params
    const { data } = await this.axios({
      method: 'DELETE',
      url: `/v1/user/withdrawal/${id}/`,
    });
    return data;
  };
  postWithdrawalReason = async (params: UserPostWithdrawalReasonParamType): Promise<UserPostWithdrawalReasonParamType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/user/withdrawal/reason/`,
      data: params,
    });
    return data;
  };
}

const userApi = new UserApi();

export default userApi;
