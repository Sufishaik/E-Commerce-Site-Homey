import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './Features/Cart/CartSlice';
import UserSlice from './Features/User/UserSlice';

export const Store = configureStore({
    reducer: {
        cartSlice: CartSlice,
        userSlice: UserSlice
    }
})