import React, { useState } from "react";
import "./navigation.style.scss";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [navbar, setNavbar] = useState(false);

    const handleNavbar = () => setNavbar(!navbar);

    const getResize = () => {
        return window.innerWidth;
    };

    return (
        <>
            <div className='mobile-navigation-menu-open' onClick={handleNavbar}>
                <AiOutlineMenu />
            </div>
            <ul className={`navigation-menu ${navbar ? "mobile" : "web"}`}>
                <li className='navigation-menu-item'>
                    <Link
                        onClick={navbar ? handleNavbar : null}
                        to='/products/all'>
                        <span>ყველა</span>
                    </Link>
                </li>
                <li className='navigation-menu-item'>
                    <Link
                        onClick={navbar ? handleNavbar : null}
                        to={`/products/men`}>
                        <span>მამაკაცი</span>
                    </Link>
                </li>
                <li className='navigation-menu-item'>
                    <Link
                        onClick={navbar ? handleNavbar : null}
                        to={`/products/women`}>
                        <span>ქალი</span>
                    </Link>
                </li>
                <li className='navigation-menu-item'>
                    <Link
                        onClick={navbar ? handleNavbar : null}
                        to={`/about-us`}>
                        <span>ჩვენს შესახებ</span>
                    </Link>
                </li>
                <li className='navigation-menu-item'>
                    <Link
                        onClick={navbar ? handleNavbar : null}
                        to={`/contact`}>
                        <span>კონტაქტი</span>
                    </Link>
                </li>
                <AiOutlineClose
                    onClick={handleNavbar}
                    className='mobile-navigation-menu-close'
                    onClick={handleNavbar}
                />
            </ul>
        </>
    );
};

export default Navigation;
