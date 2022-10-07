export type UserDTOType = {};
export type UserParamRegisterType = {
  socialToken: string,
  email: string,
  phone: string,
  name: string,
  nickname: string,
  profile: string,
  gender: string,
  age: number,
  marketingAdAgree: boolean,
};
export type UserParamGetType = {};
export type UserParamPutType = {
  id: string;
  data: UserDTOType;
};
export type UserParamPatchType = {
  id: string;
  data: Partial<UserDTOType>;
};
