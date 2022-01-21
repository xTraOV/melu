import React from "react";
import "./header.style.scss";

import { Link } from "react-router-dom";
import { ReactComponent as HomeLogo } from "../../assets/logos/meluHome.svg";
import Navigation from "./navigation/navigation.component";

const Header = () => (
    <>
        <div className='header-wrapper'>
            <Link to='/' className='header-home-logo-link'>
                <HomeLogo />
            </Link>
            <Navigation />
        </div>
    </>
);

export default Header;
