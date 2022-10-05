import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import {
  ReviewDTOType,
  ReviewParamGetType,
  ReviewParamPatchType,
  ReviewParamPutType,
} from './ReviewApi.type';

export class ReviewApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getReviewList = async (
    params?: ReviewParamGetType,
  ): Promise<ReviewDTOType[]> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/review`,
      params,
    });
    return data;
  };

  getReviewById = async (id: string): Promise<ReviewDTOType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/review/${id}`,
    });
    return data;
  };

  postReview = async (body: ReviewDTOType): Promise<ReviewDTOType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/review`,
      data: body,
    });
    return data;
  };

  putReview = async (req: ReviewParamPutType): Promise<ReviewDTOType> => {
    const { data } = await this.axios({
      method: 'PUT',
      url: `/v1/review/${req.id}`,
      data: req.data,
    });
    return data;
  };
  patchReview = async (req: ReviewParamPatchType): Promise<ReviewDTOType> => {
    const { data } = await this.axios({
      method: 'PATCH',
      url: `/v1/review/${req.id}`,
      data: req.data,
    });
    return data;
  };

  deleteReview = async (id: string): Promise<boolean> => {
    const { data } = await this.axios({
      method: 'DELETE',
      url: `/v1/review/${id}`,
    });
    return data;
  };
}

const reviewApi = new ReviewApi();

export default reviewApi;
