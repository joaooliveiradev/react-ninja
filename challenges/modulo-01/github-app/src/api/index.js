const getGithubProfile = async function (profileUrl) {
    try {
        const [githubProfile, githubRepos, githubFavorites] = await Promise.all([
            fetch(`https://api.github.com/users/${profileUrl}`),
            fetch(`https://api.github.com/users/${profileUrl}/repos`),
            fetch(`https://api.github.com/users/${profileUrl}/starred`) 
        ])
        const profile = await githubProfile.json();
        const repositories = await githubRepos.json();
        const favorites = await githubFavorites.json();
        return [profile, repositories, favorites];
    } catch (error) {console.log(error)}
}
export default getGithubProfile;