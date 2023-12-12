import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  counter: 0,
  cartTotalPrice:0,
};

const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    calcTotalCount: (state) => {
      const total = state.cart.map((item) => item.quantity);
      state.counter = total.reduce((acc, curr) => acc + curr, 0);
    },
    increment: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrement: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existing = state.cart.find((item) => item.id === newProduct.id);

      if (existing) {
        state.cart = state.cart.map((item) =>
          item.id === existing.id
            ? {
                ...existing,
                quantity:
                  newProduct.quantity === 1
                    ? existing.quantity + 1
                    : existing.quantity + newProduct.quantity,
              }
            : item
        );
      } else {
        state.cart.push(newProduct);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    cartTotalPrice: (state,action)=>{
    let count = state.cart.map((item)=>console.log(item))
    let total=count.reduce((acc,curr)=>acc+curr,0);
    state.cartTotalPrice=total;
    }
  },
});

export const { increment, decrement, addToCart, removeFromCart,cartTotalPrice } =
  cartSlice.actions;

export default cartSlice.reducer;
