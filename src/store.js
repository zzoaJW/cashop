import { configureStore, createSlice } from '@reduxjs/toolkit'

// slice == state
let userName = createSlice({
  name : 'userName',
  initialState : 'kim'
})

let stock = createSlice({
  name : 'stock',
  initialState : [10, 12, 8]
})

export default configureStore({
  reducer: { // slice 등록
    userName : userName.reducer,
    stock : stock.reducer
  }
})