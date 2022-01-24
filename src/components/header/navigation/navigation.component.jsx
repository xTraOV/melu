import React, { useState } from "react";
import "./navigation.style.scss";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavDropDown from "./navitem-dropdown/navitem.dropdown.component";

const Navigation = () => {
    const [navbar, setNavbar] = useState(null);

    const handleNavbar = () => setNavbar(!navbar);
    const [dropDown, setDropDown] = useState(null);

    return (
        <>
            <div className="mobile-navigation-menu-open" onClick={handleNavbar}>
                <AiOutlineMenu />
            </div>
            <ul className={`navigation-menu ${navbar ? "mobile" : "web"}`}>
                <li className="navigation-menu-item">
                    <Link onClick={navbar && handleNavbar} to="/products/all">
                        <span>ყველა</span>
                        <NavDropDown props={"navDropDownAll"} />
                    </Link>
                </li>
                <li className="navigation-menu-item">
                    <Link onClick={navbar && handleNavbar} to={`/products/men`}>
                        <span>მამაკაცი</span>
                    </Link>
                </li>
                <li className="navigation-menu-item">
                    <Link
                        onClick={navbar && handleNavbar}
                        to={`/products/women`}
                    >
                        <span>ქალი</span>
                    </Link>
                </li>
                <li className="navigation-menu-item">
                    <Link onClick={navbar && handleNavbar} to={`/about-us`}>
                        <span>ჩვენს შესახებ</span>
                    </Link>
                </li>
                <li className="navigation-menu-item">
                    <Link onClick={navbar && handleNavbar} to={`/contact`}>
                        <span>კონტაქტი</span>
                    </Link>
                </li>
                <li className="navigation-menu-item authentication-link">
                    <Link
                        onClick={navbar && handleNavbar}
                        to={"/authentication"}
                    >
                        <span>მომხმარებელი</span>
                    </Link>
                </li>
                <AiOutlineClose
                    onClick={handleNavbar}
                    className="mobile-navigation-menu-close"
                />
            </ul>
        </>
    );
};

export default Navigation;
