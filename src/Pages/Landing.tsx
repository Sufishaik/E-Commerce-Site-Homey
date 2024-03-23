import { AllProducts } from "../Component/AllProducts.js";
import { FeatureProduct } from "../Component/FeatureProduct.js";
import Hero from "../Component/Hero.tsx";
// import { Hero } from "../Component/Hero.tsx";
import { customFetch } from "../Utils/Index.jsx";
import React from "react";
const url = '/products?featured=true';

const featuredProductsQuery = {
    queryKey: ['featuredProducts'],
    queryFn: () => customFetch(url),
};

export const loader = (queryClient:any) => async () => {
    const response = await queryClient.ensureQueryData(featuredProductsQuery);
    const products = response.data.data;
    // console.log("products: " + {products})
    return { products };
};

export const Landing = () => {
    return (
        <>
            <Hero />
            <FeatureProduct/>
            <AllProducts/>
        </>
    )
}