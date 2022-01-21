import React from "react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import GetProducts from "../components/get-products/get-products";
import "./home.page.style.scss";

const HomePage = () => {
    const [myData, setMyData] = useState(null);
    useEffect(() => {
        GetProducts().then((p) => setMyData(p));
    }, []);

    return (
        <div className='home-grid'>
            {myData &&
                myData.map((p) => (
                    <div
                        className='home-product-wrapper'
                        id={`id${p.id}`}
                        key={p.id}>
                        <div className='home-product-header'>
                            <h1>{p.title}</h1>
                        </div>
                        <img
                            className='home-product-image'
                            width='100%'
                            src={p.image}
                            alt={p.title}
                        />
                    </div>
                ))}
        </div>
    );
};

export default HomePage;
