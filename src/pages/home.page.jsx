import React from "react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import GetProducts from "../components/get-products/get-products";

const HomePage = () => {
    const [myData, setMyData] = useState(null);
    useEffect(() => {
        GetProducts().then(
            (p) =>
                categorySet.add(p.map((p) => p.category)) &
                console.log(p.map((p) => p.category) & setMyData(p))
        );
    }, []);

    const categorySet = new Set();
    return <div></div>;
};

export default HomePage;
