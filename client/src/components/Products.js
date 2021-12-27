import React, { useState } from "react";

import Product from "./Product";

function Products({ type }) {
    const [products, setProducts] = useState({
        categories: [
            "All",
            "Hoodies & SweatShirt",
            "Shirts & Tshirts",
            "Pants & Chinos",
            "ActiveWear",
            "Accessories"
        ],
        product: [
            {
                category: "Hoodies & SweatShirt",
                brand: "Verasce Print SweatShirt",
                price: "168.00",
                img: "/img/product.png",
                rating: 1.5,
                reviews: 345,
                colorDesc: [{
                    color: "blue",
                    img: '/img/product.png'
                }, {
                    color: "green",
                    img: '/img/product.png'
                }, {
                    color: "red",
                    img: '/img/product.png'
                }, {
                    color: "yellow",
                    img: '/img/product.png'
                }]
            },
            {
                category: "Shirts & Tshirts",
                brand: "Verasce Print SweatShirt",
                price: "168.00",
                img: "/img/product.png",
                rating: 1.5,
                reviews: 345,
                colorDesc: [{
                    color: "blue",
                    img: '/img/product.png'
                }, {
                    color: "green",
                    img: '/img/product.png'
                }, {
                    color: "red",
                    img: '/img/product.png'
                }, {
                    color: "yellow",
                    img: '/img/product.png'
                }]
            },
            {
                category: "Pants & Chinos",
                brand: "Verasce Print SweatShirt",
                price: "168.00",
                img: "/img/product.png",
                rating: 1.5,
                reviews: 345,
                colorDesc: [{
                    color: "blue",
                    img: '/img/product.png'
                }, {
                    color: "green",
                    img: '/img/product.png'
                }, {
                    color: "red",
                    img: '/img/product.png'
                }, {
                    color: "yellow",
                    img: '/img/product.png'
                }]
            },
            {
                category: "ActiveWear",
                brand: "Verasce Print SweatShirt",
                price: "168.00",
                img: "/img/product.png",
                rating: 1.5,
                reviews: 345,
                colorDesc: [{
                    color: "blue",
                    img: '/img/product.png'
                }, {
                    color: "green",
                    img: '/img/product.png'
                }, {
                    color: "red",
                    img: '/img/product.png'
                }, {
                    color: "yellow",
                    img: '/img/product.png'
                }]
            },
            {
                category: "Accessories",
                brand: "Verasce Print SweatShirt",
                price: "168.00",
                img: "/img/product.png",
                rating: 1.5,
                reviews: 345,
                colorDesc: [{
                    color: "blue",
                    img: '/img/product.png'
                }, {
                    color: "green",
                    img: '/img/product.png'
                }, {
                    color: "red",
                    img: '/img/product.png'
                }, {
                    color: "yellow",
                    img: '/img/product.png'
                }]
            },
            {
                category: "Hoodies & SweatShirt",
                brand: "Verasce Print SweatShirt",
                price: "168.00",
                img: "/img/product.png",
                rating: 1.5,
                reviews: 345,
                colorDesc: [{
                    color: "blue",
                    img: '/img/product.png'
                }, {
                    color: "green",
                    img: '/img/product.png'
                }, {
                    color: "red",
                    img: '/img/product.png'
                }, {
                    color: "yellow",
                    img: '/img/product.png'
                }]
            }
        ]
    });
    const [selectedTab, setSelectedTab] = useState("All");

    return (
        <div className="flex-grow">
            <div className="flex space-x-7 font-semibold mb-6 ">
                {products.categories.map((category, idx) => {
                    return (
                        <div
                            key={idx}
                            className={`transition-all duration-200 cursor-pointer px-3 border-[3px] border-transparent ${selectedTab === category && "!border-[#FF385C]  rounded-lg"
                                } `}
                            onClick={() => {
                                setSelectedTab(category);
                            }}
                        >
                            {category}
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-3 gap-5">
                {products.product
                    .filter((prod) => {
                        return selectedTab !== "All" ? prod.category === selectedTab : true;
                    })
                    .map((prod, idx) => {
                        return (
                            <Product key={idx} prodDesc={prod}></Product>
                        );
                    })}
            </div>
        </div>
    );
}

export default Products;
