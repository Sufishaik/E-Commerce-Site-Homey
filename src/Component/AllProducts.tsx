import { Link } from 'react-router-dom';
import React from 'react';
export const AllProducts = () => {
    return (
    <>
    <div className='mt-10 text-center'>
        <Link className='btn btn-primary' to="/products" >
           All Products
        </Link>
    </div>
    </>
    )
}