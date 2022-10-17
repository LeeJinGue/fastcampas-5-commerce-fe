export type ReviewDTOType = {
  id: number,
  userId: number,
  nickname: string,
  productId: number,
  orderItemId: number,
  rate: number,
  content: string,
  reviewimageSet: Array<ReviewImageSetType>,
  created: string,
};
export type ReviewImageSetType = {
  reviewId: number,
  url: string,
}
export type ReviewImageOnlyURLType = {
  url: string,
}

// GET /v1/review/  전체 리뷰 조회
export type ReviewGetAllParamType = {
  page?: number,    // default 1, 1이상이어야함
  page_size?: number, // default 5
  user_id?:  number,   // 없으면 모든 유저의 리뷰를 갖고옵니다
};
export type ReviewGetAllReturnType = {
  count: number,
  next?: string,
  previous?: string,
  results: ReviewDTOType[],
};
// POST /v1/review/ 리뷰 작성
export type ReviewPostParamType = {
  userId: number,
  productId: number,
  rate: number,
  content: string,
  reviewimageSet: Array<ReviewImageOnlyURLType>,
};
export type ReviewPostReturnType = {
  id: number,
  userId: number,
  productId: number,
  rate: number,
  content: string,
  reviewimageSet: Array<ReviewImageSetType>,
};
// GET /v1/review/{id}/ 특정 리뷰 조회
export type ReviewGetByIdParamType = {
  id: number, // 리뷰 아이디
};
export type ReviewGetByIdReturnType = {
  id: number,
  userId: number,
  productId: number,
  rate: number,
  content: string,
  reviewimageSet: Array<ReviewImageSetType>,
  created: string,
}
// PUT /v1/review/{id}  리뷰 수정
export type ReviewPutByIdParamType = {
  id: number,
  userId: number,
  productId: number,
  rate: number,
  content: string,
  reviewimageSet: Array<ReviewImageOnlyURLType>,
}
export type ReviewPutByIdReturnType = { // ReviewGetByIdReturnType과 같음
  id: number,
  userId: number,
  productId: number,
  rate: number,
  content: string,
  reviewimageSet: Array<ReviewImageSetType>,
  created: string,
}
// PATCH /v1/review/{id}  리뷰 수정?
export type ReviewPatchByIdParamType = {
  id: number,
  userId: number,
  productId: number,
  rate: number,
  content: string,
  reviewimageSet: Array<ReviewImageOnlyURLType>,
}
export type ReviewPatchByIdReturnType = { // ReviewGetByIdReturnType과 같음
  id: number,
  userId: number,
  productId: number,
  rate: number,
  content: string,
  reviewimageSet: Array<ReviewImageSetType>,
  created: string,
}
