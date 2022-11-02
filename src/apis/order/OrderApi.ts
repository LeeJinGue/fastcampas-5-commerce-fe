import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import {
  OrderGetAllParamType,
  OrderGetAllReturnType,
  OrderGetByIdParamType,
  OrderGetByIdReturnType,
  OrderGetStatusParamType,
  OrderGetStatusReturnType,
  OrderPatchByIdParamType,
  OrderPatchByIdReturnType,
  OrderPostParamType,
  OrderPostReturnType,
  OrderPostStatusParamType,
  OrderPostStatusReturnType,
  OrderPutByIdParamType,
  OrderPutByIdReturnType,
} from './OrderApi.type';

export class OrderApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getOrderList = async (
    params?: OrderGetAllParamType,
  ): Promise<OrderGetAllReturnType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/order/`,
      data:params,
    });
    return data;
  };
  postOrder = async (params: OrderPostParamType): Promise<OrderPostReturnType> => {
    const userData = await this.axios({
      method: 'GET',
      url: `/v1/user/me/`,
    })
    const orderParam = {
      userId: userData.data.id,
      ...params}
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/order/`,
      data: orderParam,
    });
    return data;
  };

  getOrderById = async (params: OrderGetByIdParamType): Promise<OrderGetByIdReturnType> => {
    const { uuid } = params
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/order/${uuid}/`,
    });
    return data;
  };
  putOrderById = async (params: OrderPutByIdParamType): Promise<OrderPutByIdReturnType> => {
    const { uuid, ...etc } = params
    const { data } = await this.axios({
      method: 'PUT',
      url: `/v1/order/${uuid}/`,
      data: etc,
    });
    return data;
  };
  patchOrderById = async (params: OrderPatchByIdParamType): Promise<OrderPatchByIdReturnType> => {
    const { uuid, ...etc } = params
    const { data } = await this.axios({
      method: 'PATCH',
      url: `/v1/order/${uuid}/`,
      data: etc,
    });
    return data;
  };
  getOrderStatus = async (params: OrderGetStatusParamType): Promise<OrderGetStatusReturnType> => {
    const userData = await this.axios({
      method: 'GET',
      url: `/v1/user/me/`,
    })
    const {user_id, ...paramWithoutId} = params
    const orderStatusParam = {
      user_id: userData.data.id,
      ...paramWithoutId}
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/order/status/`,
      data: orderStatusParam,
    });
    return data;
  };
  postOrderStatus = async (params: OrderPostStatusParamType): Promise<OrderPostStatusReturnType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/order/status/`,
      data: params,
    });
    return data;
  };
  
}

const orderApi = new OrderApi();

export default orderApi;
