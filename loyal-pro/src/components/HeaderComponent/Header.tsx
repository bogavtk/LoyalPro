import React from 'react';
import logo from "../../asserts/Logo.svg";
import cl from "./Header.module.sass"

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="" className={cl.imgLogo}/>
            <span className={cl.headerText}>Организация бизнеса</span>
        </header>
    );
};

