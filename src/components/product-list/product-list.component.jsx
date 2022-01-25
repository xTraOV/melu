import React from "react";

import "./product-list.style.scss";

import { useState, useEffect } from "react";

import ProductListItem from "./product-list-item/produt-list-item.component";

const ProductList = ({ pageCategory }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch("https://fakestoreapi.com/products", {
            signal: abortCont.signal,
        })
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
        return () => abortCont.abort();
    }, []);

    return (
        <div className='products-wrapper'>
            {products &&
                (pageCategory === "allItems"
                    ? products.map((p) => (
                          <ProductListItem
                              key={p.id}
                              title={p.title}
                              image={p.image}
                          />
                      ))
                    : products
                          .filter((p) => p.category === pageCategory)
                          .map((p) => (
                              <ProductListItem
                                  key={p.id}
                                  title={p.title}
                                  image={p.image}
                              />
                          )))}
        </div>
    );
};

export default ProductList;
