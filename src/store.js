import { configureStore, createSlice } from '@reduxjs/toolkit'

// slice == state
let user = createSlice({
  name : 'state 이름',
  initialState : '값'
})

export default configureStore({
  reducer: { 
    user : user.reducer
  }
})