import React, { Component } from 'react'

class Thumbnail extends Component {
  render() {
    return (
      <li key={this.props.id} className={this.props.className}>
        <img src={this.props.url} alt={this.props.title} />
      </li>
    )
  }
}

export default Thumbnail
