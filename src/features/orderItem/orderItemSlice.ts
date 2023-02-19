import { CartItemType } from '@apis/cart/CartApi.type';
import { UserDTOType } from '@apis/user/UserApi.type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type orderItemType = {
  productId: number,
  name: string,
  capacity: number,
  count: number,
  price: number,
  cartItemId: number, // 
}
export interface OrderItemStateType {
  orderItemList: orderItemType[],
  // orderName: string,
  totalCost: number,
  totalDeliveryCost: number,
}
export type setTotalType = {
  totalCost: number,
  totalDeliveryCost: number,
}
export type addOrderItemType = {
  orderItem: orderItemType,
  cartItemId: number
}
const noOrderName = "없음"
const initialState: OrderItemStateType = {
  orderItemList: [],
  // orderName: noOrderName,
  totalDeliveryCost: 0, // 총 배달 금액
  totalCost: 0, // 총 금액
};
export const orderItemSlice = createSlice({
  name: 'ORDER_ITEM',
  initialState,
  reducers: {
    addOrderItem: (state, action: PayloadAction<addOrderItemType>) => {
      // cartItemId 받아서 아이템을 추가하거나 cartItemId가 존재한다면 수정합니다.
      let isNewOrder = true
      state.orderItemList = state.orderItemList.map((orderItem) => {
        if(orderItem.cartItemId === action.payload.orderItem.cartItemId) {
          isNewOrder = false
          return action.payload.orderItem
        }
        return orderItem
      })
      if(isNewOrder){
        state.orderItemList.push(action.payload.orderItem)
      }
    },

    delOrderItem: (state, action: PayloadAction<number>) => {
      // cartItemId 받아서 아이템을 제거합니다.
      const delIndex = state.orderItemList.findIndex((orderItem)=> orderItem.cartItemId === action.payload)
      if(delIndex !== -1) state.orderItemList.splice(delIndex, 1)
    },
    delAllOrderItem: (state) => {
      // 아이템을 모두 제거합니다.
      state.orderItemList = []
    },
    addAllOrderItem: (state, action: PayloadAction<orderItemType[]>) => {
      // 초기화한 후 새로 추가할 때 사용합니다.
      state.orderItemList = state.orderItemList.concat(action.payload)
    },
    setTotal: (state, action: PayloadAction<setTotalType>) => {
      // 총액, 총 배달비용을 세팅합니다.
      state.totalDeliveryCost = action.payload.totalDeliveryCost
      state.totalCost = action.payload.totalCost
    },
  },
  
});

export const {
  actions: orderItemSliceActions, //
  reducer: orderItemSliceReducer,
} = orderItemSlice;

export default orderItemSlice;
