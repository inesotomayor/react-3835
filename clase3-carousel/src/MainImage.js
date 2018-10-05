import React, { Component } from 'react'

class MainImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImage: this.props.id
    }
  }

  // Render
  render() {
    return (
      <div className="main-image">
        <img src={this.props.url} alt="" />
      </div>
    )
  }
}

export default MainImage
