import React from 'react';
import cl from "../ButtonComponent/Button.module.sass";
import Vector from "../../../asserts/VectorButtonGroupOne.svg";


interface ButtonProps {
    nameButton: string
}

export const Button = ({nameButton}: ButtonProps) => {
    return (
        <div className={cl.borderBlur}>
             <button className={cl.buttonMain}>
                 {nameButton}
                 <img src={Vector} alt=""/>
             </button>
        </div>
    );
};

