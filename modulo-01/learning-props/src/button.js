import React from 'react';

const Button = ({ children, handleOnClick }) => {

    return (
        <button className="main-button" onClick={handleOnClick}>{children}</button>
    )
}

export default Button;

