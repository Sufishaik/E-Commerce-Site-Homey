import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CartTotals } from '../Component/CardTotals';
import { CheckOutForm } from '../Component/CheckOutForm';
import { SectionTitle } from '../Component/SectionTitle';
import React from 'react';
export const loder = (store) => {
  const user = store.getState().userSlice.user;
  if(!user) {
    toast.warn("You have to login to get access for Checkout")
    return redirect("/login");
  }
  return null;
}

export const Checkout = () => {
    const cartTotal = useSelector((state:any) => state.cartSlice.cartTotal);
    if(cartTotal === 0) {
        return <SectionTitle text="Your Cart is Empty"/>
    }
    return (
        <>
        <SectionTitle text="Place your Order"/>
        <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
           <CheckOutForm/>
           <CartTotals/>
        </div>
        </>
    )
}