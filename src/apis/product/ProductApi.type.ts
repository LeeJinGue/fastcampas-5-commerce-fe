export type ProductDTOType = {
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
export type ProductParamGetType = {
  cursor: string,
  page_size: string,
};
export type ProductParamPutType = {
  id: string;
  data: ProductDTOType;
};
export type ProductParamPatchType = {
  id: string;
  data: Partial<ProductDTOType>;
};
