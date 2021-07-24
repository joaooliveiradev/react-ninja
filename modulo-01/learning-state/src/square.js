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


export default Square;