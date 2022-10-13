export type CartDTOType = {   // 장바구니 타입
  cartId: number,
  cartItem: CartItemType[],
  userId: number,
};
export type CartItemType = {    // 장바구니에 담긴 상품의 타입
  cartItemId: number,
  cartId: number,
  proudctId: number,
  count: number
}

// GET /v1/cart/          // 장바구니 조회
export type CartGetByUserIdParamType = {
  limit?:number;
  offset?:number;
  user_id: number;
}
export type CartGetByUserIdReturnType = CartDTOType[]   // 배열이긴한데 사실 하나밖에 없음

// POST /v1/cart/ 유저 장바구니 생성
export type CartPostByUserIdParamType = {
  userId: number,
}
export type CartPostByUserIdReturnType = CartDTOType
// POST /v1/cart/item/  장바구니에 아이템 담기
export type CartPostItemByCartIdParamType = {
  productId: number,
  cartId: number,
  count: number,
}
export type CartPostItemByCartIdReturnType = {
  cartItemId: number,
  productId: number,
  cartId: number,
  count: number,
}
// GET /v1/cart/item/{id}/  장바구니에 담긴 특정 상품 개수 조회
export type CartGetByCartItemIdParamType = {
  cartItemId: number,
}
export type CartGetByCartItemIdReturnType = {
  count: number,
}

// PATCH /v1/cart/item/{id}/     장바구니에 담긴 상품 개수 수정
export type CartPatchByCartItemIdParamType = {
  cartItemId: number,
  count: number,
}
export type CartPatchByCartItemIdReturnType = {
  count: number,
}
// DELETE /v1/cart/item/{id}/     장바구니에 담긴 상품 삭제
export type CartDeleteByCartItemIdParamType = {
  cartItemId: number,
}
// export type CartDeleteByCartItemIdReturnType = {
//   count: number,
// }
