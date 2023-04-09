import { createSlice } from '@reduxjs/toolkit';


let cart = createSlice({
    name : 'cart',
    initialState : [ {id : 0, name : 'White and Black', count : 2, price : 23000}, 
                      {id : 2, name : 'Grey Yordan', count : 1, price : 50000} ],
    reducers : {
        addCart(state){  // 장바구니 추가
          return state + {}
        },
        cleanCart(){  // 장바구니 비우기
          return []
        },
        changeCount(state, action){
          state[0].count = action.payload
        }
    }
  })
  
export let { addCart, cleanCart, changeCount } = cart.actions
export default cart