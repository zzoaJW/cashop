import { createSlice } from '@reduxjs/toolkit';


let cart = createSlice({
    name : 'cart',
    initialState : [ {id : 10, name : 'White and Black', count : 2, price : 23000}, 
                      {id : 11, name : 'Yellow Car', count : 1, price : 32000}, 
                      {id : 12, name : 'Grey Yordan', count : 1, price : 50000} ],
    reducers : {
        addCart(state, action){  // 장바구니에 상품 추가
          state.push(action.payload)
        },
        delCart(state, action){  // 장바구니에 상품 삭제
          // 상품의 cart id를 가져옴
          // 해당 id를 가진 상품의 state idx를 찾음
          let idx = state.findIndex(e => e.id == action.payload)

          // 해당 idx 삭제
          state.splice(idx, 1)
        },
        cleanCart(){  // 장바구니 비우기
          return []
        },
        minusCount(state, action){
          // 버튼을 누르면
          // 상품의 cart id를 가져옴
          let goods = state.find(e => e.id == action.payload)

          // 해당 id의 count를 +1
          if (goods.count > 0){
            goods.count -= 1 
          }
        },
        addCount(state, action){
          // 버튼을 누르면
          // 상품의 cart id를 가져옴
          let goods = state.find(e => e.id == action.payload)

          // 해당 id의 count를 +1
          goods.count += 1 
        }
    }
  })
  
export let { addCart, delCart, cleanCart, minusCount, addCount } = cart.actions
export default cart