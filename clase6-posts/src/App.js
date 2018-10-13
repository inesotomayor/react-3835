import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Nav from './Nav'
import axios from 'axios'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { posts: [] }
  }

  componentWillMount() {
    // redux.dispatch({
    //   type: 'GET_POSTS',
    //   state: {}
    // })
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.setState({ posts: response.data })
    })
  }

  render() {
    return (
      <div className="App">
        {console.log('Posts de APP')}
        {console.log(this.state.posts)}
        <Nav
          title="Formulario (prop 'title' de ‹App /›)"
          posts={this.state.posts}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default withRouter(connect(mapStateToProps)(App))
