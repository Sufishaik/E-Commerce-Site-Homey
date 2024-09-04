import React, { useState } from 'react'
import { formatPrice } from '../Utils/Index.jsx';

export const FormRange = ({ label, name, size, price }) => {
    const step = 1000;
    const maxPrice = 100000;
    const [selectPrice, setSelectedPrice] = useState(price || maxPrice)
    return (
        <div className='form-control'>
            <label htmlFor={name} className='label flex gap-10 cursor-pointer'>
                <span className='label-text capitalize'>{label}</span>
                <span>{formatPrice(selectPrice)}</span>
            </label>
            <input type="range" name={name} min={0} max={maxPrice} value={selectPrice} onChange={(e) => setSelectedPrice(e.target.value)}
                className={`range range-primary ${size}`}
                step={step}
            />
            <div className='w-full flex justify-between text-xs px-2 mt-2'>
                <span className='font-bold text-md'>0</span>
                <span className='font-bold text-md'>Max: {formatPrice(maxPrice)}</span>
            </div>
        </div>
    )
}


