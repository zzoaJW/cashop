import { createSlice } from '@reduxjs/toolkit';


let user = createSlice({
    name : 'user',
    initialState : { name : 'jenny', age : 20 },
    reducers : {
      addAge(state, a){
        state.age += a.payload
      },
      changeName(state){
        state.name = 'kai'
      }
    }
  })
  
export let { addAge, changeName } = user.actions
export default user