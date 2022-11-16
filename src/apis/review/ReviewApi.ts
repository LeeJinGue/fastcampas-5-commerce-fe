import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import {
  ReviewDTOType,
  ReviewGetAllParamType,
  ReviewGetAllReturnType,
  ReviewGetByIdParamType,
  ReviewGetByIdReturnType,
  ReviewPatchByIdParamType,
  ReviewPatchByIdReturnType,
  ReviewPostParamType,
  ReviewPostReturnType,
  ReviewPutByIdParamType,
  ReviewPutByIdReturnType,
} from './ReviewApi.type';

export class ReviewApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getReviewList = async (
    params?: ReviewGetAllParamType,
  ): Promise<ReviewGetAllReturnType> => {
    const query = params?.user_id ? `?user_id=${params.user_id}` : ""
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/review/${query}`,
      // data: params, data로는 안되고 query로 줘야 넘어간다.
    });
    return data;
  };
  postReview = async (
    params?: ReviewPostParamType,
  ): Promise<ReviewPostReturnType> => {
    const {data:userData} = await this.axios({
      method: 'GET',
      url: `/v1/user/me/`,
    })
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/review/`,
      data: {...params, userId:userData.id},
    });
    return data;
  };
  getReviewById = async (params?: ReviewGetByIdParamType): Promise<ReviewGetByIdReturnType> => {
    const { id } = params!
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/review/${id}/`,
    });
    return data;
  };
  putReviewById = async (params?: ReviewPutByIdParamType): Promise<ReviewPutByIdReturnType> => {
    const { id, ...etc } = params!
    const { data } = await this.axios({
      method: 'PUT',
      url: `/v1/review/${id}/`,
      data: etc,
    });
    return data;
  };
  patchReviewById = async (params?: ReviewPatchByIdParamType): Promise<ReviewPatchByIdReturnType> => {
    const { id, ...etc } = params!
    const { data } = await this.axios({
      method: 'PUT',
      url: `/v1/review/${id}/`,
      data: etc,
    });
    return data;
  };

}

const reviewApi = new ReviewApi();

export default reviewApi;
