export type OrderDTOType = {
  id: number,
  userId: number,
  price: number,
  shippingPrice: number,
  amount: number,
  method: string,
  status: string,
  userName: string,
  userPhone: string,
  userAddr: string,
  shipName: string,
  shipPhone: string,
  shipAddr: string,
  orderMessage: string,
  created: string,
};

export type OrderParamGetType = {};
export type OrderParamPutType = {
  id: string;
  data: OrderDTOType;
};
export type OrderParamPatchType = {
  id: string;
  data: Partial<OrderDTOType>;
};

// GET /v1/order/
export type OrderGetAllParamType = {
  limit?:number;
  offset?:number;
  user_id: number;
}
export type OrderGetAllReturnType = {
  count: number,
  next?: string,
  previous?: string,
  results: OrderDTOType[],
}

// POST /v1/order/
export type OrderPostParamType = {
  userId: number,
  price: number,
  paymentKey: string,
  method: string,
  userName: string,
  userPhone: string,
  userAddr: string,
  shipName: string,
  shipPhone: string,
  shipAddr: string,
  orderMessage: string,
}
export type OrderPostReturnType = OrderDTOType

// GET /v1/order/{id}/
export type OrderGetByIdParamType = {
  uuid: string;
}
export type OrderGetByIdReturnType = OrderDTOType

// PUT /v1/order/{id}/
export type OrderPutByIdParamType = {
  uuid: string;
  price: number,
  method: string,
  userName: string,
  userPhone: string,
  userAddr: string,
  shipName: string,
  shipPhone: string,
  shipAddr: string,
  orderMessage: string
}
export type OrderPutByIdReturnType = OrderDTOType

// PATCH /v1/order/{id}/
export type OrderPatchByIdParamType = {
  uuid: string;
  price: number,
  method: string,
  userName: string,
  userPhone: string,
  userAddr: string,
  shipName: string,
  shipPhone: string,
  shipAddr: string,
  orderMessage: string
}
export type OrderPatchByIdReturnType = OrderDTOType
// GET /v1/order/status/ 주문 내역
export type OrderGetStatusParamType = {
  page?: number,
  page_size?: number,
  user_id: number,
}
export type OrderGetStatusReturnType = {
  count: number,
  next?: string,
  previous?: string,
  results: OrderStatusType[]
}
export type OrderStatusType = {
  id: number,
  orderId: string,
  productId: number,
  count: number,
  shippingStatus: string,
  created: string,
}
// POST /v1/order/status/
export type OrderPostStatusParamType = {
  orderId: string,
  productId: number,
  count: number,
}
export type OrderPostStatusReturnType = {
  id: number,
  orderId: string,
  productId: number,
  count: number,
  shippingStatus: string,
  created: string,
}