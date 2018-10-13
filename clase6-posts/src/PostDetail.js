import React, { Component } from 'react'

class PostDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { posts: this.props.posts }
    console.log('This state:')
    console.log(this.state)
  }
  render() {
    const thePost = this.props.posts.map(post => {
      return post.id === this.props.match.params.id
    })

    console.log('THE POST:')
    console.log(thePost)

    return (
      <div className="post-detail">
        <div>Ruta: {this.props.match.url}</div>
        <div>ID: {this.props.match.params.id}</div>
        {console.log('Props de POST DETAIL')}
        {console.log(this.props)}
        {console.log(this.props.posts)}

        <p>Title: {this.props.title}</p>
        {/* <p>Text: {this.props.post.body}</p>*/}
      </div>
    )
  }
}

export default PostDetail
