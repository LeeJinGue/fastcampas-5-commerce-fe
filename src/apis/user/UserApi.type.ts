export type UserDTOType = {};
export type UserParamGetType = {};
export type UserParamPutType = {
  id: string;
  data: UserDTOType;
};
export type UserParamPatchType = {
  id: string;
  data: Partial<UserDTOType>;
};
