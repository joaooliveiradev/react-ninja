import React , { PropTypes} from 'react';
const Repositories = ({ className, title, repos, }) => {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <ul>
                {repos.map(repo => <li key={repo.name}><a href={repo.html_url}>{repo.name}</a></li>)}
            </ul>
        </div>
    )
}
Repositories.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired
}
export default Repositories;