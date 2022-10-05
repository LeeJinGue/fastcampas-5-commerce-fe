export type ReviewDTOType = {
  content: string
  created: string
  id: number
  nickname: string
  rate: number
  reviewimageSet: ReviewImageSetType[]
  userId: number
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
