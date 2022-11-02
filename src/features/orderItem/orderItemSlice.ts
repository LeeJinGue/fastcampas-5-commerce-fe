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
const initialState: OrderItemStateType = {
  orderItemList: [],
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
      if(isNewOrder) state.orderItemList.push(action.payload.orderItem)
      console.log("아이템 추가 결과:",state.orderItemList)
    },

    delOrderItem: (state, action: PayloadAction<number>) => {
      // cartItemId 받아서 아이템을 제거합니다.
      const delIndex = state.orderItemList.findIndex((orderItem)=> orderItem.cartItemId === action.payload)
      console.log("삭제한 아이템 cartItemId:",action.payload, ", index:",delIndex) 
      if(delIndex !== -1) state.orderItemList.splice(delIndex, 1)
      console.log("아이템 삭제 결과:",state.orderItemList)
    },
    delAllOrderItem: (state) => {
      // 아이템을 모두 제거합니다.
      state.orderItemList = []
      console.log("아이템 전체 삭제 결과:",state.orderItemList)
    },
    addAllOrderItem: (state, action: PayloadAction<orderItemType[]>) => {
      // 초기화한 후 새로 추가할 때 사용합니다.
      state.orderItemList = state.orderItemList.concat(action.payload)
      console.log("아이템 전체 추가 결과:",state.orderItemList)
    },
    setTotal: (state, action: PayloadAction<setTotalType>) => {
      // 총액, 총 배달비용을 세팅합니다.
      state.totalDeliveryCost = action.payload.totalDeliveryCost
      state.totalCost = action.payload.totalCost
      console.log("총액 설정 결과, totalCost:",state.totalCost, ", totalDeliveryCost:",state.totalDeliveryCost)
    },
  },
  
});

export const {
  actions: orderItemSliceActions, //
  reducer: orderItemSliceReducer,
} = orderItemSlice;

export default orderItemSlice;
