'use strict';
import React, { PropTypes } from 'react';
import style from './repos.css'
const Repos = ({ className, Title, repos }) => (
    <div className={`repos-list ${className}`}>
        <ul>
            <h2>{Title}</h2>
            {repos.map((repo, index) => (
                <li key={index}>
                    <a href={repo.link}>{repo.name}</a>
                </li>
            ))}
        </ul>
    </div >
)
Repos.defaultProps = {
    className: '',
    repos: []
}

Repos.propTypes = {
    className: PropTypes.string,
    Title: PropTypes.string.isRequired,
    repos: PropTypes.array
}


export default Repos