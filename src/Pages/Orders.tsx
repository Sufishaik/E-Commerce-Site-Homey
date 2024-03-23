import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PaginationContainer } from '../Component/PaginationContainer';
import { OrderList } from '../Component/OrderList';
import { SectionTitle } from '../Component/SectionTitle';
import { customFetch } from '../Utils/Index';
import React from 'react';
const ordersQuery = (params, user) => {
    return {
        queryKey: [
            "orders",
            user.username,
            params.page ? parseInt(params.page) : 1,
        ],
        queryFn: () =>
            customFetch.get("/orders", {
                params,
                headers: {
                    Authorization: `Bearer ${user.token}`,
                }
            })
    }
}

export const loader =
    (store, queryClient) =>
        async ({ request }) => {
            const user = store.getState().userSlice.user;
            if(!user) {
                toast.warn('You have to be logged in to view orders')
                return redirect("/login");
            }
            const params = Object.fromEntries([
                ...new URL(request.url).searchParams.entries(),
            ]);
            try {
                const response = await queryClient.ensureQueryData(
                    ordersQuery(params, user),
                );
                return {orders: response.data.data, meta: response.data.meta};
            }catch(error) {
                const errMessage = 
                error?.response?.data?.error?.message || "There was an error";
                toast.error(errMessage);
                if(error?.response?.status === 401 || 403) return request("/login");
                return null;
            }
        }

export const Orders = () => {
    const {meta} = useLoaderData();
    if(meta.pagination.total <1 ) {
        return <SectionTitle text="Please make an order"/>
    }
    return (
        <>
        <SectionTitle text="Your Orders"/>
        <OrderList/>
        <PaginationContainer/>
        </>
    )
}
