import React from 'react'
import { CardItem } from './CardItem'
import { useSelector } from 'react-redux'
export const CardItemLists = () => {
  const cardItems = useSelector((state) => state.cartSlice.cartItems);
  return (
    <div>
      {
        cardItems.map((item) => {
          return <CardItem key={item.cartId} cartItem={item} />
        })
      }
    </div>
  )
}


