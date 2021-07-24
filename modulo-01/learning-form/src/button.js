import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClick, children}) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
}

Button.defaultProps = {
    children: 'Não foi passado nenhum valor!',
    onClick: () => console.log('teste'),
}

export default Button