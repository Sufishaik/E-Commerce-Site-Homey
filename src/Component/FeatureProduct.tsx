import React from "react";
import { SectionTitle } from "./SectionTitle";
// import { ProductsGrid } from "./ProductsGrid";
import { ProductsGrid } from "./ProductsGrid.tsx";

export const FeatureProduct = () => {
    return (
        <>
        <div className="pt-24 text-center">
            <SectionTitle text="featured products"/> 
            <ProductsGrid/>
        </div>
        </>
    )
}