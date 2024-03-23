import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CardItemLists } from '../Component/CardItemLists';
import { CartTotals } from '../Component/CardTotals';
import { SectionTitle } from '../Component/SectionTitle';
import React from 'react';
export const Cart = () => {
  const user = useSelector((state:any) =>state.userSlice.user);
  const numItemsInCart = useSelector((state:any) =>state.cartSlice.numItemsInCart);
  if(numItemsInCart === 0) {
    return <SectionTitle text="Your Cart is Empty"/>
  }
  return (
    <>
     <SectionTitle text="Shopping Cart"/>
      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CardItemLists/>
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals/>
          {
            user ? (
                <Link to="/checkout" className='btn btn-primary btn-block mt-8'>
                    proceed to checkout
                </Link>
            ): (
                <Link to="/login" className='btn btn-primary btn-block mt-8'>
                    Login Please
                </Link>
            )
          }
        </div>
      </div>
    </>
  )
}