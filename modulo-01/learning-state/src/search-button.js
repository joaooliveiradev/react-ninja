import React from 'react';
import Button from './button'

const SearchButton = () => {
    return (
        <Button  handleClick={() => alert('SearchButton')}>Search Button</Button>
    )
}

export default SearchButton