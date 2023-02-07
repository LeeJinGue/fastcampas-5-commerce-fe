import { ReviewDTOType, ReviewImageSetType } from "@apis/review/ReviewApi.type";

// /v1/product/{id}/ API의 리턴타입
export type ProductDetailDTOTType = {
  id: number,
  name: string,
  description: string,
  price: number,
  capacity: number,
  detail: string,
  photo: string,
  reviewList: Array<ProductReviewType>,
  avgRate: number | null,
  reviewCount: string,
};
// 상품의 tag 타입
export type ProductTagType = {
  id: number,
  name: string,
}
// 상품 목록에서 사용할 타입
export type ProductSimpleDTOType = {
  id: number,
  name: string,
  description: string,
  price: number,
  capacity: number,
  thumbnail: string,
  tag: Array<ProductTagType>,
  reviewList?: Array<ProductReviewType>,
  avgRate: string,
  reviewCount: string,
};
// /v1/product/의 리턴타입
export type ProductListDTOTType = {
  cursor: string,
  results: ProductSimpleDTOType[],
}
// GET /v1/product/의 파라메터 타입
export type ProductParamGetType = {
  cursor?: string,
  page_size?: string,
};

// GET /v1/product/tag/의 파라메터 타입
export type ReviewByTagParamGetType = {
  tag_name: string,
}

// GET /v1/product/tag/의 리턴 타입
export type ReviewByTagReturnGetType = {
  count: number,
  isNext: boolean,
  results: TagReviewResultsType[],
}

// 태그별 리뷰의 results 타입
export type TagReviewResultsType = {
  id:number,
  name: string,
  reviewList: TagReviewDTOTType[]
}
// 태그별 리뷰의 리뷰 DTOT 타입
export type TagReviewDTOTType = {
  id: number,
  userId: number,
  nickname: string,
  rate: number,
  content: string,
  reviewimageSet: TagReviewImageSetType[],
  created: string,
  reviewreplySet: TagReviewReplyType[]
}
// 태그별 리뷰의 리뷰 이미지 세트 타입
export type TagReviewImageSetType = {
  id: number,
  reviewId: number,
  url: string,
}
// 리뷰에 대한 관리자 댓글 DTOT 타입
export type TagReviewReplyType = {
  id: number,
  created: string,
  updated: string,
  content: string,
  reply_user_id: number,
  review_id: number,
}
// 상품 정보와 함께 오는 리뷰 데이터 타입
export type ProductReviewType = {
  id: number,
  userId: number,
  nickname: string,
  rate: number,
  content: string,
  reviewimageSet: Array<ReviewImageSetType>,
  created: string,
}

// 상품 태그 타입
export type TagDTOTType = {
  id: number,
  name: string,
}
