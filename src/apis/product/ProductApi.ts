import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import {
  ProductDetailDTOTType,
  ProductListDTOTType,
  ProductParamGetType,
} from './ProductApi.type';

export class ProductApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getProductList = async (
    params?: ProductParamGetType,
  ): Promise<ProductListDTOTType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/product/`,
      params,
    });
    return data;
  };

  getProductById = async (id: number): Promise<ProductDetailDTOTType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/product/${id}/`,
    });
    return data;
  };
}

const productApi = new ProductApi();

export default productApi;
