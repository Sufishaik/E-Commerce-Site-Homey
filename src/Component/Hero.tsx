import React from 'react';
import { Link } from 'react-router-dom';
import Hero7 from "../assets/hero7.webp";

const Hero: React.FC = () => {
   return (
      <>
         <div className='grid lg:grid-cols-2 gap-24 items-center'>
            <div>
               <h1 className='max-w-2xl text-4xl font-based tracking-tight sm:text-6xl'>
                  We Change the way you design your home!
               </h1>
               <p className='mt-8 max-w-xl text-lg leading-9'>
                  Transform your space into a reflection of <strong>YOU</strong>! Our
                  expert team is dedicated to making your home or office uniquely{' '}
                  <strong>YOU</strong>, guiding you through every step of the way.
               </p>
               <div className='mt-10'>
                  <Link to="/products" className='btn btn-primary'>
                     Shop Now
                  </Link>
               </div>
            </div>
            <div className='hidden h-[35rem] lg:carousel carousel-end space-x-2 rounded-box'>
               <div className='carousel-item active'>
                  <img src={Hero7} alt="" />
               </div>
            </div>
         </div>
      </>
   );
}

export default Hero;
