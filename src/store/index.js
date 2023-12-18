import {createStore} from 'redux';
import { createSlice , configureStore } from '@reduxjs/toolkit';

const initialCounterState={
    counter:0,
    showToggle:true
}

const initialAuthState={
    authenticated:false
}

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        toggle(state){
            state.showToggle=!state.showToggle;
        }
    }
})

const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        login(state){
            state.authenticated=true
        },
        logout(state){
            state.authenticated=false
        }
    }
})

// const counterReducer = (state=initialState,action)=>{
//     if(action.type==='increment'){
//         return {
//             counter:state.counter+1,
//             showToggle:state.showToggle
//         }
//     }
//     if(action.type==='decrement'){
//         return {counter:state.counter-1,
//             showToggle:state.showToggle}
//     }
//     if(action.type==='toggle'){
//         return {
//             counter:state.counter,
//             showToggle:!state.showToggle
//         }
//     }
//     return state;
// }


const store = configureStore({
    reducer:{counter:counterSlice.reducer , auth : authSlice.reducer}
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
