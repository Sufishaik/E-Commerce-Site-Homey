import { Form, Link, useLoaderData } from 'react-router-dom';
import { FormCheckbox } from './FormCheckbox';
import { FormInputs } from './FormInputs';
import { FormRange } from './FormRange';
import { FormSelect } from './FormSelect';
import React from 'react';

export const Filters = () => {
    const { meta, params } = useLoaderData();
    console.log("meta ", meta)

    const { search, company, category, shipping, order, price } = params;
    return (
        <>
            <div className=' flex items-center justify-center'>

                <Form className='bg-base-200 w-[312px] lg:w-full   rounded-md px-8 py-4 grid gap-x-4 gap-y-8 '>
                    <div className='flex   flex-wrap justify-between w-full items-center gap-8'>

                        <FormInputs type="search" label="search product" name="search" size="input-sm" defaultValue={search} />
                        <FormSelect label="select category" name="category" size="select-sm" defaultValue={category} list={meta.categories} />
                        <FormSelect label="select company" name="company" size="select-sm" defaultValue={company} list={meta.companies} />
                        <FormSelect label="sort by" name="order" size="select-sm" defaultValue={order} list={['a-z', 'z-a', 'high', 'low']} />
                    </div>
                    <div className='flex flex-wrap w-full items-center justify-between gap-12'>

                        <FormRange name="price" label="select price" size="range-sm" price={price} />
                        <FormCheckbox name='shipping' label="free shipping" size="checkbox-sm" defaultValue={shipping} />
                        <button type='submit' className='btn btn-primary btn-primary btn-sm'>search</button>
                        <Link to="/products" className='btn btn-primary btn-sm'>
                            reset
                        </Link>
                    </div>
                </Form>
            </div>
        </>
    )
}