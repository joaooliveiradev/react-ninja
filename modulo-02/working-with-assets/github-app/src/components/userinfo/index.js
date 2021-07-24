'use strict';
import React, { PropTypes } from 'react';
import './userinfo.css'
const UserInfo = ({ userinfo }) => (
    <div className="user-info">
        <img src={userinfo.photo} />
        <h1 className="username">
            <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
        </h1>
        <div className="repos-info">
            <li>Repositórios: {userinfo.repos}</li>
            <li>Seguidores: {userinfo.followers}</li>
            <li>Seguindo: {userinfo.following}</li>
        </div>
    </div>
)
UserInfo.propTypes = {
    userinfo: React.PropTypes.shape({
        username: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
    })
}
export default UserInfo