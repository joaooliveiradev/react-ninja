'use strict';
import React, { Component } from 'react';
import Search from './components/search';
import getGithubProfile from './api/index.js';
import Actions from './components/actions';
import UserInfo from './components/userinfo';
import Repos from './components/repos';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isSearch: false,
            searchText: '',
            name: '',
            profileLink: '',
            avatar_url: '',
            public_repo: '',
            followers: '',
            following: '',
            repositories: [],
            favorites: [],
            repoListIsClick: false,
            repoFavoritesClick: false,
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleFavorites = this.handleFavorites.bind(this);
        this.handleRepositories = this.handleRepositories.bind(this);
        this.handleApi = this.handleApi.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if(e.keyCode == 13){
            this.handleApi();
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleClick)
    }
    handleSearch(value) {
        this.setState(({ searchText: value }))
    }
    handleApi() {
        getGithubProfile(this.state.searchText).then(([profile, repositories, favorites]) => {
            console.log(profile)
            this.setState({
                isSearch: true,
                name: profile.name,
                profileLink: profile.html_url,
                avatar_url: profile.avatar_url,
                public_repo: profile.public_repos,
                followers: profile.followers,
                following: profile.following,
                repositories: repositories,
                favorites: favorites,
            })
        })
    }
    handleRepositories() { this.setState(({ repoListIsClick: !this.state.repoListIsClick })) }
    handleFavorites() { this.setState(({ repoFavoritesClick: !this.state.repoFavoritesClick })) }
    render() {
        return (
            <div className="app">
                <Search className={'searchContainer'} value={this.state.searchText} onChange={(e) => { this.handleSearch(e.target.value) }} />
                <main style={{ display: this.state.isSearch ? "block" : "none" }}>
                    <UserInfo avatarURL={this.state.avatar_url} public_repo={this.state.public_repo} followers={this.state.followers} following={this.state.following} profileLink={this.state.profileLink} children={this.state.name} className={'user-info'} />
                    <Actions handleRepositories={this.handleRepositories} handleFavorites={this.handleFavorites} className={"actions"} />
                    {this.state.repoListIsClick && <Repos className={'repos'} title={"Repositórios: "} repos={this.state.repositories} />}
                    {this.state.repoFavoritesClick && <Repos className={'starred'} title={"Favoritos: "} repos={this.state.favorites} />}
                </main>
            </div>
        )
    }
}
export default App;