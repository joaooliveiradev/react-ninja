import React from 'react';

const Button = ({ children, handleClick }) => {
    return (
        <button className="main-button" onClick={handleClick}>{children}</button>
    )
}

Button.propTypes = {
    handleClick: React.PropTypes.func
}

export default Button;

