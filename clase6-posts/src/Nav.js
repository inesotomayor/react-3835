import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Form from './Form'
import Posts from './Posts'
import PostDetail from './PostDetail'

class Nav extends Component {
  render() {
    return (
      <Router>
        <nav>
          {console.log('Posts de NAV')}
          {console.log(this.props.posts)}
          <ul className="top-nav">
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/posts" activeClassName="active">
                Posts
              </NavLink>
            </li>
          </ul>
          <h1 className="App-intro">{this.props.title}</h1>

          <Route exact path="/" component={Form} />
          <Route
            exact
            path="/posts"
            render={props => <Posts {...props} posts={this.props.posts} />}
          />
          <Route
            path={`/posts/:id`}
            render={props => <PostDetail {...props} posts={this.props.posts} />}
          />
        </nav>
      </Router>
    )
  }
}

export default Nav
