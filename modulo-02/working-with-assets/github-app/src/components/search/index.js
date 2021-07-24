'use strict';
import React, { PropTypes } from 'react';
import style from './search.css'
const Search = ({ isDisabled, handleSearch }) => (
    <div className={style.search}>
        <input
            type="search"
            placeholder="Digite o nome do usuário GitHub"
            onKeyUp={handleSearch}
            disabled={isDisabled}
        />
    </div>
)
Search.propTypes = {
    isDisabled: React.PropTypes.bool.isRequired,
    handleSearch: React.PropTypes.func.isRequired
}
export default Search