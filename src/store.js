import { configureStore, createSlice } from '@reduxjs/toolkit'

// slice == state
let 변수명 = createSlice({
  name : 'state 이름',
  initialState : '값'
})

export default configureStore({
  reducer: { 
    작명 : 변수명.reducer
  }
})