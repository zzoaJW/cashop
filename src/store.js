import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './slices/userSlice';
import cart from './slices/cartSlice';


export default configureStore({
  reducer: { // slice 등록
    cart : cart.reducer,
    user : user.reducer
  }
})