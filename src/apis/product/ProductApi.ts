import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import {
  ProductDTOType,
  ProductParamGetType,
  ProductParamPatchType,
  ProductParamPutType,
} from './ProductApi.type';

export class ProductApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getProductList = async (
    params?: ProductParamGetType,
  ): Promise<ProductDTOType[]> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/product`,
      params,
    });
    return data;
  };

  getProductById = async (id: string): Promise<ProductDTOType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/product/${id}/`,
    });
    return data;
  };

  postProduct = async (body: ProductDTOType): Promise<ProductDTOType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/product`,
      data: body,
    });
    return data;
  };

  putProduct = async (req: ProductParamPutType): Promise<ProductDTOType> => {
    const { data } = await this.axios({
      method: 'PUT',
      url: `/v1/product/${req.id}`,
      data: req.data,
    });
    return data;
  };
  patchProduct = async (
    req: ProductParamPatchType,
  ): Promise<ProductDTOType> => {
    const { data } = await this.axios({
      method: 'PATCH',
      url: `/v1/product/${req.id}`,
      data: req.data,
    });
    return data;
  };

  deleteProduct = async (id: string): Promise<boolean> => {
    const { data } = await this.axios({
      method: 'DELETE',
      url: `/v1/product/${id}`,
    });
    return data;
  };
}

const productApi = new ProductApi();

export default productApi;
