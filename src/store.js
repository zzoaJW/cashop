import { configureStore, createSlice } from '@reduxjs/toolkit'

// slice == state

let cart = createSlice({
  name : 'cart',
  initialState : [ {id : 0, name : 'White and Black', count : 2, price : 23000}, 
                    {id : 2, name : 'Grey Yordan', count : 1, price : 50000} ] 
})


export default configureStore({
  reducer: { // slice 등록
    cart : cart.reducer
  }
})