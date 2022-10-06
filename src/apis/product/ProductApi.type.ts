// 상품 상세보기에서 사용할 타입
// /v1/product/{id}/ API의 리턴타입
export type ProductDetailDTOTType = {
  id: number,
  name: string,
  description: string,
  price: number,
  capacity: number,
  detail: string,
  photo: string,
  reviewList: Array<any>,
  avgRate: string,
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
  tags: ProductTagType[],
  reviewList?: Array<any>,
  avgRate: string,
  reviewCount: string,
};
// /v1/product/의 리턴타입
export type ProductListDTOTType = {
  cursor: string,
  results: ProductSimpleDTOType[],
}
export type ProductParamGetType = {
  cursor: string,
  page_size: string,
};