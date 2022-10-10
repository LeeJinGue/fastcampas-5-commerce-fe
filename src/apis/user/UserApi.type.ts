import { number } from "yup"

export type UserDTOType = {
  id: number,
  name: string,
  nickname: string,
  phone: string,
  email: string,
  profile: string,
  gender: string,
  age: number,
};

// GET /v1/user/me/
export type UserGetMeParamType = {
  accessToken: string
}
// PATCH /v1/user/me/
export type UserPatchMeParamType = {
  name: string,
  nickname: string,
  phone: string,
  email: string,
  profile: string,
  gender: string,
  age: number,
  accessToken: string,
}
// POST /v1/user/social_login/
export type UserPostSocialLoginParamType = {
  code: string,
  state: string,
}
export type UserPostSocialLoginReturnType = {
  isRegister: boolean,
  socialToken?: string,
  access?: string,
  refresh?: string,
}
// POST /v1/user/register/
export type UserPostRegisterParamType = {
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
export type UserPostRegisterReturnType = {
  id: number,
  profile: string,
  marketingAdAgree: boolean,
  access: string,
  refresh: string
}

// DELETE /v1/user/withdrawal/{id}
export type UserDeleteWithdrwalParamType = {
  id: string,
  accessToken: string,  // 토큰도 줘야하나? 잘 모르겠음
}
// POST /v1/user/withdrawal/reason/
export type UserPostWithdrawalReasonParamType = {
  reason: string,
  additionalReason?: string,
  accessToken: string,  // 토큰도 줘야하나? 잘 모르겠음
}

// POST /v1/user/refresh/
export type UserPostRefreshParamType = {
  refresh: string,
}
export type UserPostRefreshReturnType = {
  access: string,
  refresh: string,
}
