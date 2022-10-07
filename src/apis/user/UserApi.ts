import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import {
  UserDTOType,
  UserParamGetType,
  UserParamPatchType,
  UserParamPutType,
  UserParamRegisterType,
} from './UserApi.type';

export class UserApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getUserList = async (params?: UserParamGetType): Promise<UserDTOType[]> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/user`,
      params,
    });
    return data;
  };
  postRegister = async (body: UserParamRegisterType): Promise<UserParamRegisterType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/user/register/`,
      data: body,
    });
    return data;
  };
  getUserData = async (accessToken: string): Promise<UserDTOType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/user/me/`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });
    return data;
  };
  getUserById = async (id: string): Promise<UserDTOType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/user/${id}`,
    });
    return data;
  };

  postUser = async (body: UserDTOType): Promise<UserDTOType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/user`,
      data: body,
    });
    return data;
  };

  putUser = async (req: UserParamPutType): Promise<UserDTOType> => {
    const { data } = await this.axios({
      method: 'PUT',
      url: `/v1/user/${req.id}`,
      data: req.data,
    });
    return data;
  };
  patchUser = async (req: UserParamPatchType): Promise<UserDTOType> => {
    const { data } = await this.axios({
      method: 'PATCH',
      url: `/v1/user/${req.id}`,
      data: req.data,
    });
    return data;
  };

  deleteUser = async (id: string): Promise<boolean> => {
    const { data } = await this.axios({
      method: 'DELETE',
      url: `/v1/user/${id}`,
    });
    return data;
  };
}

const userApi = new UserApi();

export default userApi;
