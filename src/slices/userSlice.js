import { createSlice } from '@reduxjs/toolkit';


let user = createSlice({
    name : 'user',
    initialState : { name : 'jenny', age : 20 },
    reducers : {
      addAge(state, a){
        state.age += a.payload
      },
      changeName(state){  // jenny -> jennyKim 변경
        state.name = 'jenny Kim'
      }
    }
  })
  
export let { addAge, changeName } = user.actions
export default user