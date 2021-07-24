import React from 'react';

const Square = ({color}) => {
    return (
        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: color
        }} />
    )
}

Square.defaultProps = {
    color: 'Purple'
}

export default Square;