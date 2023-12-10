import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartCount: 0,
  totalPrice: 0,
  counter: 1,
};

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    cartIncrement: (state) => {
      state.cartCount += 1;
      return(state.cart.map((item) => (item.quantity = state.cartCount)));
    },
    cartDecrement: (state) => {
        if(state.cartCount>1){
            state.cartCount -= 1;
        }
        return(state.cart.map((item) => (item.quantity = state.cartCount)));
      },
    decrement: (state) => {
      if (state.counter > 1) {
        state.counter -= 1;
      }
    },
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.cart.find(
        (item) => item.id === newProduct.id
      );

      if (state.counter > 0) {
        if (existingProduct) {
          existingProduct.quantity += state.counter;
        } else {
          state.cart.push({
            ...newProduct,
            quantity: state.counter,
          });
        }
        state.cartCount = state.cart.reduce(
          (count, item) => count + item.quantity,
          0
        );
        state.totalPrice = state.cart.reduce(
          (total, item) => total + Number(item.price) * item.quantity,
          0
        );
      }
      state.counter = 1;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart:(state,action)=>{
        const cardId=action.payload;
        const updatedCard=state.cart.filter((item)=>item.id!=cardId)
        state.cart=updatedCard
        localStorage.setItem("cart",JSON.stringify(state.cart))
    }
  },
});

export const { increment, decrement,cartIncrement,cartDecrement, addToCart,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
