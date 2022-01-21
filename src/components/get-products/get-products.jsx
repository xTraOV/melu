import React from "react";

const GetProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=5`);
    const data = await response.json();
    return data;
};

export default GetProducts;
