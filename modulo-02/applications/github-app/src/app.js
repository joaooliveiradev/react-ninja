'use strict'
import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'
class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
    this.getRepos = this.getRepos.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGithubApiUrl (username, type) {
    const internalUsername = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUsername}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.value
    const ENTER = 13
    if (keyCode === ENTER) {
      this.setState({ isFetching: true })
      ajax().get(this.getGithubApiUrl(value))
        .then((response) => {
          this.setState({
            userinfo: {
              username: response.name,
              photo: response.avatar_url,
              login: response.login,
              repos: response.public_repos,
              followers: response.followers,
              following: response.following
            },
            repos: [],
            starred: []
          })
        })
        .always(() => this.setState({ isFetching: false })
        )
    }
  }

  getRepos (type) {
    return () => {
      const username = this.state.userinfo.login
      ajax().get(this.getGithubApiUrl(username, type))
        .then((result) => {
          this.setState({
            [type]: result.map(repo => ({ name: repo.name, link: repo.html_url }))
          })
        })
    }
  }

  render () {
    return (
      <AppContent
        {...this.state}
        handleSearch={this.handleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    )
  }
}
export default App
