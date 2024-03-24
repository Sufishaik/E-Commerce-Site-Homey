import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearCart } from '../Features/Cart/CartSlice';
import { customFetch, formatPrice } from '../Utils/Index';
import { FormInputs } from './FormInputs';
import { SubmitButton } from './SubmitButton';
import React from 'react';
export const action =
    (store, queryClient) =>
        async ({ request }) => {
            const formData = await request.formData();
            const { name, address } = Object.fromEntries(formData);
            const user = store.getState().userSlice.user;
            const { cartItems, orderTotal, numItemsInCart } = store.getState().cartSlice;
            const infor = {
                name, address, chargeTotal: orderTotal, orderTotal: formatPrice(orderTotal), cartItems, numItemsInCart,
            };
            try {
                const resp = await customFetch.post(
                    "/orders",
                    {
                        data: infor
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        }
                    }
                )
                queryClient.removeQueries(['orders']);
                store.dispatch(clearCart());
                toast.success("Order Places Successfully");
                return redirect("/orders");
            }catch(error) {
                const errorMess = 
                error?.response?.data?.error?.message || "There is an Error";
                toast.error(errorMess);
                if(error?.response?.status === 401 || 403) return redirect("/login");
                return null;
            }
        };

export const CheckOutForm = () => {
 return (
    <>
    <Form method='POST' className='flex flex-col gap-y-4'>
     <h4 className='font-medium text-xl capitalize'>Shipping information</h4>
     <FormInputs label="first name" name="name" type="text" defaultValue="" size=""/>
     <FormInputs label="address" name="address" type="text" defaultValue="" size=""/>
     <div className='mt-4'>
            <SubmitButton text="place your order"/>
     </div>
    </Form>
    </>
 )
}
