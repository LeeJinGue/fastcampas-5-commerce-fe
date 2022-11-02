//@delete:line
import counterSlice from '@features/counter/counterSlice';
import modalSlice from '@features/modal/modalSlice';
import userSlice from '@features/user/userSlice';

import { configureStore } from '@reduxjs/toolkit';
import orderItemSlice from './orderItem/orderItemSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      //@delete:line
      [counterSlice.name]: counterSlice.reducer,
      [userSlice.name]: userSlice.reducer,
      [modalSlice.name]: modalSlice.reducer,
      [orderItemSlice.name]: orderItemSlice.reducer,
    },
  });
}

const store = makeStore();

export default store;
