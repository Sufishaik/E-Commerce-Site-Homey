// import { Filters } from "../Component/Filters";
import React from "react";
import { customFetch } from "../Utils/Index.jsx";
import { ProductsContainer } from "../Component/ProductContainer";
import { PaginationContainer } from "../Component/PaginationContainer";
import { Filters } from "../Component/Filters.tsx";

const url = "/products";

const allProductsQuery = (queryParams) => {
    const { search, category, company, sort, price, shipping, page } = queryParams;
    console.log("params ", queryParams);
    return {
        queryKey: [
            'products',
            search ?? '',
            category ?? 'all',
            company ?? 'all',
            sort ?? 'a-z',
            price ?? 100000,
            shipping ?? false,
            page ?? 1
        ],
        queryFn: () =>
            customFetch(url, {
                params: queryParams,
            }),
    };
}

export const loader =
    (queryClient) =>
        async ({ request }) => {
            const params = Object.fromEntries([
                ...new URL(request.url).searchParams.entries(),
            ]);
            const response = await queryClient.ensureQueryData(
                allProductsQuery(params),
            );
            const products = response.data.data;
            const meta = response.data.meta;
            return {products, meta, params};
        };

export const Products = () => {
    return (
        <>
        <Filters/>
        <ProductsContainer/>
        <PaginationContainer/>
        </>
    )
}