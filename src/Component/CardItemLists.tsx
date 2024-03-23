import React from 'react'
import { CardItem } from './CardItem'
import { useSelector } from 'react-redux'
export const CardItemLists = () => {
    const cardItems = useSelector((state:any) => state.cartSlice.cartItems);
  return (
    <div>
      {
        cardItems.map((item:any) => {
            return <CardItem key={item.cartId} cartItem={item}/>
        })
      }
    </div>
  )
}


