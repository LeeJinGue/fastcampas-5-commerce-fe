import { ReviewImageSetType } from "@apis/review/ReviewApi.type";

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
  tags: Array<ProductTagType>,
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