import React from 'react';
import Button from './button'

const LikeButton = () => {
    return (
        <Button handleClick={() => alert('LikeButton')} >Curtir</Button>
    )
}

export default LikeButton