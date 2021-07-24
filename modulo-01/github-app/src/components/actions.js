import React, { PropTypes } from 'react'

const Actions = ({ getRepos, getStarred }) => {
    return (
        <div className="actions" >
            <button onClick={getRepos}>Ver repositórios</button>
            <button onClick={getStarred}>Ver favoritos</button>
        </div >
    )
}
Actions.propTypes = {
    getRepos: React.PropTypes.func.isRequired,
    getStarred: React.PropTypes.func.isRequired,
}
export default Actions