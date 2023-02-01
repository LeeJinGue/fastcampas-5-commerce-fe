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
    let offset = 1, limit = 1
    // 첫 GET을 통해 주문이 총 몇개인지 count와 첫 주문을 가져옵니다.
    const {results:allOrderResult, count} = await this.getOrderList({limit, offset})
    offset++, limit+=count
    if(count !== 1){
      // 주문 개수가 1개였다면 첫 GET 때 가져온 주문이 전체이므로 넘어가고 
      // 주문 개수가 1이 아니라면 2번째 주문부터 마지막 주문까지 가져옵니다.
      const {results: remainResults} = await this.getOrderList({limit, offset}) 
      allOrderResult.push(...remainResults)
    }
    const orderDataList:OrderGetByIdReturnType[] = []
    orderStatusData.results.forEach((orderStatus) => {
      const result = allOrderResult.filter(order => {
        return order.id === orderStatus.orderId
      })
      if(result.length === 0){
        return
      }
      orderDataList.push(...result)
    })
    return { orderResults:orderDataList, ...orderStatusData};
  };
  getOrderStatusById = async (params: OrderStatusGetByIdParamType): Promise<OrderStatusType[]> => {
    const { orderId } = params
    let resultArray: OrderStatusType[] = []
    let page = 1, page_size = 5
    const { data } = await this.axios.get<OrderStatusIdGetReturnType>(`/v1/order/status/id/?order_id=${orderId}&page=${page}&page_size=${page_size}`)
    resultArray = resultArray.concat(data.results)
    while(data.next !== null){
      page++
      const { data } = await this.axios.get<OrderStatusIdGetReturnType>(`/v1/order/status/id/?order_id=${orderId}&page=${page}&page_size=${page_size}`)
      resultArray = resultArray.concat(data.results)    
    }
    // if(data.results.length === 0) return resultArray
    return resultArray
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
