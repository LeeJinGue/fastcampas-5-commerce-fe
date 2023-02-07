import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import {
  ProductDetailDTOTType,
  ProductListDTOTType,
  ProductParamGetType,
  ReviewByTagParamGetType,
  ReviewByTagReturnGetType,
  TagDTOTType,
  TagReviewResultsType,
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
  getAllTagList = async (): Promise<TagDTOTType[]> => {
    const { data } = await this.axios.get<TagDTOTType[]>(`/v1/product/tag/all/`,);
    return data;
  };
  getReviewListByTagName = async (params: ReviewByTagParamGetType): Promise<TagReviewResultsType[]> => {
    const tagList = await this.getAllTagList()
    // console.log("# tagList:",tagList)
    const { tag_name } = params
    // console.log("# tag_name:",tag_name)
    const selected_tag = tagList.filter((tag) => tag.name == tag_name )
    // console.log("# selected_tag:",selected_tag)
    if(selected_tag.length > 1) return []
    const tag_id = selected_tag.length === 0 ? "" : selected_tag[0].id
    let limit = 1, offset = 0;
    const { data } = await this.axios.get<ReviewByTagReturnGetType>(`/v1/product/tag/?limit=${limit}&offset=${offset}&tag_id=${tag_id}`);
    const { count, isNext, results } = data
    // 1개밖에 없을 때에는 이미 1개를 가져왔으므로 끝냅니다.
    if(count === 1) return results
    // 1개보다 많다면, 1개를 가져왔으니까 1개 빼고 나머지를 가져옵니다.
    offset = limit, limit = count-1
    const { data:remainData } = await this.axios.get<ReviewByTagReturnGetType>(`/v1/product/tag/?limit=${limit}&offset=${offset}&tag_id=${tag_id}`);
    // 처음 1개 가져온 results에 가져온 나머지 데이터를 붙여서 return 합니다.
    return data.results.concat(remainData.results);
  };
  
}

const productApi = new ProductApi();

export default productApi;
