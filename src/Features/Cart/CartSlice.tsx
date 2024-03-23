import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
    cartItems: [],
    numItemsInCart: 0,
    cartTotal:0,
    shipping: 500,
    tax:0,
    orderTotal:0,
};

const getCartFromLocalStorage = () => {
    const cartString = localStorage.getItem("cart");
    return cartString ? JSON.parse(cartString) : defaultState;
}

  

 const CartSlice = createSlice({
    name: "cart",
    initialState: getCartFromLocalStorage(),
    reducers: {
        addItems: (state, action) => {
         const {product} = action.payload;
         console.log("product", product)
         const item = state.cartItems.find((i:any) => i.cartId === product.cartId);
         if(item) {
            item.amount += product.amount; 
         }else {
            state.cartItems.push(product);
         }
         state.numItemsInCart += product.amount;
         state.cartTotal += product.price * product.amount;
         CartSlice.caseReducers.calculateTotals(state);
         console.log("numItemsInCart: " + state)
         toast.success('Item added to cart');   
        },
        clearCart: (state) => {
            localStorage.setItem("cart", JSON.stringify(defaultState));
            return defaultState;
        },
        removeItems: (state, action) => {
            const {cartId} = action.payload;
            const product = state.cartItems.find((i:any) => i.cartId === cartId);
            state.cartItems =  state.cartItems.filter((i:any) => i.cartId !== cartId);
            state.numItemsInCart -= product.amount;
            state.cartTotal -= product.price * product.amount;
            CartSlice.caseReducers.calculateTotals(state);
            toast.success('Item removed from cart'); 
        },
        editItem: (state, action) => {
            const {cartId, amount} = action.payload;
            const item = state.cartItem.find((i) => i.cartId === cartId);
            state.numItemsInCart += amount - item.amount;
            state.cartTotal += item.price * (amount - item.amount);
            item.amount = amount;
            CartSlice.caseReducers.calculateTotals(state);
            toast.success('Card Updated');
        },
        calculateTotals: (state) => {
            state.tax = 0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem("cart", JSON.stringify(state))
        }
    }
 })
 export const {addItems, clearCart, removeItems, editItem} = CartSlice.actions;
 export default CartSlice.reducer;