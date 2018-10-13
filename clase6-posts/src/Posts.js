import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Posts extends Component {
  constructor(props) {
    super(props)
    console.log('LOS PROPS')
    console.log(props.posts)
  }

  render() {
    // Componente stateless:
    const Post = props => (
      <li className={props.className}>
        <Link
          to={{
            pathname: `posts/${props.post.id}`
          }}
        >
          <strong>#{props.post.id}:</strong> <em>{props.post.title}</em> &nbsp;
          <br />
          &nbsp;
          {props.post.body}
        </Link>
      </li>
    )

    // Variable que devuelve un componente stateless:
    let postsList = this.props.posts.map((post, index) => {
      let estilo = index % 2 === 0 ? 'par' : 'impar'
      return (
        <Post key={post.id} post={post} className={estilo} title={post.title} />
      )
    })

    return (
      <div className="posts">
        {console.log('Posts de POSTS')}
        {console.log(this.props.posts)}
        <p className="posts-title">
          <strong>Cantidad de posts:</strong> {this.props.posts.length}
        </p>

        <ul className="posts-list">{postsList}</ul>
      </div>
    )
  }
}

export default Posts
