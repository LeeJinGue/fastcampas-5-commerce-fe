export type ReviewDTOType = {
  id: number,
  userId: number,
  productId: number,
  rate: number,
  content: string,
  reviewimageSet: Array<ReviewImageSetType>,
  created: string,
};
export type ReviewImageSetType = {
  reviewId: number,
  url: string,
}
export type ReviewParamGetType = {};
export type ReviewParamPutType = {
  id: string;
  data: ReviewDTOType;
};
export type ReviewParamPatchType = {
  id: string;
  data: Partial<ReviewDTOType>;
};
