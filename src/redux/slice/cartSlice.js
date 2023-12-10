import { createSlice } from "@reduxjs/toolkit";

const initialState ={
cart:[],
counter:0,
}


const  cartSlice=createSlice({
    name:"cartData",
 initialState,
 reducers:{
increment: (state)=>{
    state.counter +=1
},
decrement : (state)=>{
    if(state.counter>1){
        state.counter-=1
    }
},
addToCart:(state,action)=>{
    const newProduct=action.payload
    const existingProduct=state.cart.find((item)=>item.id===newProduct.id)

    if(state.counter>0){
        if(existingProduct){
            existingProduct.quantity += state.counter
        }else {
            state.cart.push({
                ...newProduct,
                quantity:state.counter
            })
        }
    }

   
}
}
})


export const {
    increment,
    decrement,
    addToCart
}=cartSlice.actions

export default cartSlice.reducer
