import React from 'react'
// import PropTypes from 'prop-types';
const UserInfo = ({avatarURL, public_repo, followers, following, className, profileLink, children}) => {
    return (
        <div className={className}>
            <img src={avatarURL} style={{ width: '100px' }} />
            <h1><a href={profileLink}>{children}</a></h1>
            <ul>
                <li>{`Repositórios: ${public_repo}`}</li>
                <li>{`Seguidores: ${followers}`}</li>
                <li>{`Seguindo: ${following}`}</li>
            </ul>
        </div>
    )
}


export default UserInfo;



