import { UserDTOType } from '@apis/user/UserApi.type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserStateType {
  isLogin: boolean;
  userData: UserDTOType;
}

const initialState: UserStateType = {
  isLogin: false,
  userData: {
    id: 0,
    name: "",
    nickname: "",
    phone: "",
    email: "",
    profile: "",
    gender: "",
    age: 0,
  }
};

export const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      // console.log("# setIsLogged - 다음의 데이터가 세팅되었습니다:",action.payload)
      state.isLogin = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserDTOType>) => {
      // console.log("# setUserData - 다음의 데이터가 세팅되었습니다:",action.payload)
      state.userData = action.payload
    },
    removeUserData: (state) => {
      state.userData = initialState.userData
    },
    
  },
});

export const {
  actions: userSliceActions, //
  reducer: userSliceReducer,
} = userSlice;

export default userSlice;
