import { AllProducts } from "../Component/AllProducts.jsx";
import { FeatureProduct } from "../Component/FeatureProduct.jsx";
import { Hero } from "../Component/Hero.jsx";

import { customFetch } from "../Utils/Index.jsx";
import React from "react";
const url = '/products?featured=true';

const featuredProductsQuery = {
    queryKey: ['featuredProducts'],
    queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
    const response = await queryClient.ensureQueryData(featuredProductsQuery);
    const products = response.data.data;
    // console.log("products: " + {products})
    return { products };
};

export const Landing = () => {
    return (
        <>
            <Hero />
            <FeatureProduct />
            <AllProducts />
        </>
    )
}