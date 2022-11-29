import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import { CartDeleteByCartItemIdParamType, CartGetByCartItemIdParamType, CartGetByCartItemIdReturnType, CartGetByUserIdParamType, CartGetByUserIdReturnType, CartPatchByCartItemIdParamType, CartPatchByCartItemIdReturnType, CartPostByUserIdParamType, CartPostByUserIdReturnType, CartPostItemByCartIdParamType, CartPostItemByCartIdReturnType } from './CartApi.type';
import { getToken } from '@utils/localStorage/token';
import { UserDTOType } from '@apis/user/UserApi.type';

export class CartApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getCart = async (
    params?: CartGetByUserIdParamType,
  ): Promise<CartGetByUserIdReturnType> => {
    const {data:userData} = await this.axios.get<UserDTOType>(`/v1/user/me/`,)

    const param = {userId:userData.id}
    const { data } = await this.axios.get<CartGetByUserIdReturnType>(
      `/v1/cart/?user_id=${param.userId}`,
    );
    if(data.length === 0){
      const cartList:CartGetByUserIdReturnType = []
      const newCartData = await this.postCart({userId:userData.id})
      cartList.push(newCartData)
      return cartList
    }
    return data;
  };
  postCart = async (params: CartPostByUserIdParamType): Promise<CartPostByUserIdReturnType> => {
    const token = getToken()!
    const userData = await this.axios({
      method: 'GET',
      url: `/v1/user/me/`,      
    })
    const param = {userId:userData.data.id}
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/cart/`,
      data: param,
    });
    return data;
  };

  postCartItem = async (params: CartPostItemByCartIdParamType): Promise<CartPostItemByCartIdReturnType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/cart/item/`,
      data:params,
    });
    return data;
  };
  getCartItemByCartItemId = async (params: CartGetByCartItemIdParamType): Promise<CartGetByCartItemIdReturnType> => {
    const { cartItemId } = params
    const { data } = await this.axios({
      method: 'PUT',
      url: `/v1/cart/item/${cartItemId}/`,
    });
    return data;
  };
  patchCartItemByCartItemId = async (params: CartPatchByCartItemIdParamType): Promise<CartPatchByCartItemIdReturnType> => {
    const { cartItemId, ...etc } = params
    const { data } = await this.axios({
      method: 'PATCH',
      url: `/v1/cart/item/${cartItemId}/`,
      data: etc,
    });
    return data;
  };
  deleteCartItemByCartItemId = async (params: CartDeleteByCartItemIdParamType): Promise<undefined> => {
    const {cartItemId} = params
    const { data } = await this.axios({
      method: 'DELETE',
      url: `/v1/cart/item/${cartItemId}/`,
    });
    return data;
  };
}

const cartApi = new CartApi();

export default cartApi;
