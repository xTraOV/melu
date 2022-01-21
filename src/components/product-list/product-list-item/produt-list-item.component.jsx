import React from "react";
import "./product-list-item.style.scss";

import { Link } from "react-router-dom";

const ProductListItem = ({ id, title, image }) => (
    <div className='product-list-item' key={id}>
        <Link
            className='product-list-item-wrapper-link'
            to={"/product/" + `${id}`}>
            <div className='product-list-item-header'>
                <h1>{title}</h1>
            </div>
            <img
                className='product-list-item-image'
                src={image}
                alt={title}
                width='150px'
            />
        </Link>
    </div>
);

export default ProductListItem;
