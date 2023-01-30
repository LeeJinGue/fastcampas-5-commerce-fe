import { AxiosInstance, AxiosPromise } from 'axios';

import instance from '@apis/_axios/instance';

import {
  OrderDTOType,
  OrderGetAllParamType,
  OrderGetAllReturnType,
  OrderGetByIdParamType,
  OrderGetByIdReturnType,
  OrderGetStatusParamType,
  OrderGetStatusReturnType,
  OrderGetStatusWithOrderReturnType,
  OrderPatchByIdParamType,
  OrderPatchByIdReturnType,
  OrderPostParamType,
  OrderPostReturnType,
  OrderPostStatusParamType,
  OrderPostStatusReturnType,
  OrderPutByIdParamType,
  OrderPutByIdReturnType,
  OrderStatusGetByIdParamType,
  OrderStatusIdGetParamType,
  OrderStatusIdGetReturnType,
  OrderStatusType,
} from './OrderApi.type';
import { UserDTOType } from '@apis/user/UserApi.type';

export class OrderApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getOrderList = async (
    params?: OrderGetAllParamType,
  ): Promise<OrderGetAllReturnType> => {
    const { data: userData } = await this.axios.get<UserDTOType>(`/v1/user/me/`)
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/order/?limit=${params?.limit}&offset=${params?.offset}&user_id=${userData.id}`,
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
      ...params
    }
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
    const { data: userData } = await this.axios.get<UserDTOType>(`/v1/user/me/`)
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/order/status/?user_id=${userData.id}&page=${params.page}`,
      data: params,
    });
    return data;
  };
  getOrderStatusWithOrder = async (params: OrderGetStatusParamType): Promise<OrderGetStatusWithOrderReturnType> => {
    const { data: userData } = await this.axios.get<UserDTOType>(`/v1/user/me/`)
    const { data: orderStatusData } = await this.axios.get<OrderGetStatusReturnType>(
      `/v1/order/status/?user_id=${userData.id}&page=${params.page}`,
      { data: params },
    );
    const orderData = await this.getOrderList({limit: orderStatusData.count+10, offset:1})
    const orderDataList:OrderGetByIdReturnType[] = []
    orderStatusData.results.forEach((orderStatus) => {
      
      const result = orderData.results.filter(order => {
        return order.id === orderStatus.orderId
      })
      if(result.length === 0){
        console.log("이상하다")
        return
      }
      orderDataList.push(result[0])
    })
    return { orderResults:orderDataList, ...orderStatusData};
  };
  getOrderStatusById = async (params: OrderStatusGetByIdParamType): Promise<OrderStatusType[]> => {
    const { orderId } = params
    let page = 1
    const orderStatusIdParam = {
      order_id: orderId,
      page,
    }
    const { data } = await this.axios.get<OrderStatusIdGetReturnType>(`/v1/order/status/id/`, {data: orderStatusIdParam})
    if(data.results.length === 0) return []
    return data.results
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
