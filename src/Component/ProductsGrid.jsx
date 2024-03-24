import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { formatPrice } from '../Utils/Index';

export const ProductsGrid = () => {
  const { products } = useLoaderData();
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products?.map((product) => {
        const { id, attributes } = product;
        const { title, price, image } = attributes;
        const dollarAmount = formatPrice(price);

        return (
          <a key={id} href={`/products/${id}`} className='card w-full shadow-xl hover:shadow-2xl transition duration-300'>
            <figure className='px-4 pt-4'>
              <img src={image} alt="" className='h-64 md:h-48 w-full object-cover' />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{title}</h2>
              <span className='text-secondary'>{dollarAmount}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
};
