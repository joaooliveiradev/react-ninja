import React, { PropTypes } from 'react'
import styles from './actions.css'
const Actions = ({ getRepos, getStarred }) => {
    return (
        <div className={styles.actions} >
            <button onClick={getRepos}>Ver repositórios</button>
            <button onClick={getStarred}>Ver favoritos</button>
        </div>
    )
}
Actions.propTypes = {
    getRepos: React.PropTypes.func.isRequired,
    getStarred: React.PropTypes.func.isRequired,
}
export default Actions
