//@delete:line
import { configureStore } from '@reduxjs/toolkit';
import orderItemSlice from '@features/orderItem/orderItemSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      //@delete:line
      [orderItemSlice.name]: orderItemSlice.reducer,
    },
  });
}

const store = makeStore();

export default store;
