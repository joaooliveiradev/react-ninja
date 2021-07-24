import React , { PropTypes} from 'react';
const Actions = ({handleRepositories,handleFavorites, className}) => {
    return (
        <div className={className}>
            <button onClick={handleRepositories}>Ver repositórios</button>
            <button onClick={handleFavorites}>Ver Favoritos</button>
        </div>
    )
}
Actions.Proptypes = {
    handleRepositories: PropTypes.func.isRequired,
    handleFavorites: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
}

export default Actions