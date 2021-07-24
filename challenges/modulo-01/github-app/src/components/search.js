import React , { PropTypes} from 'react';
const Search = ({ onChange, className, handleButton, children }) => {
    return (
        <div className={className}>
            <input type="text" placeholder="Procure um usuário Github" onChange={onChange} style={{ width: '160px', height: '20px', textAlign: 'center' }} />
        </div>
    )
}
export default Search