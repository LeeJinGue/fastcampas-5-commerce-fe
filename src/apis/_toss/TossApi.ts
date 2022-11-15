import { CONFIG } from '@config';
import {  } from '@constants/social';
import { TOSS_API_BASE_URL, TOSS_AUTH_HEADER } from '@constants/toss';
import axios, { AxiosInstance } from 'axios';

import {
  TossPostParamType, TossPostReturnType,
} from './TossApi.type';

const instance = axios.create({
  baseURL: TOSS_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': TOSS_AUTH_HEADER,
  },
});
export class TossApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  postConfirm = async (params: TossPostParamType): Promise<TossPostReturnType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/payments/confirm`,
      data: params,
    });
    return data;
  };
}

const tossApi = new TossApi();

export default tossApi;
