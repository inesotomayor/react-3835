import React, { Component } from 'react'
import Thumbnail from './Thumbnail.js'
import MainImage from './MainImage.js'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        {
          id: 1,
          title: 'Gato #1',
          url:
            'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350'
        },
        {
          id: 2,
          title: 'Gato #2',
          url:
            'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&h=350'
        },
        {
          id: 3,
          title: 'Gato #3',
          url:
            'https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&h=350'
        },
        {
          id: 4,
          title: 'Gato #4',
          url:
            'https://images.pexels.com/photos/1302290/pexels-photo-1302290.jpeg?auto=compress&cs=tinysrgb&h=350'
        },
        {
          id: 5,
          title: 'Gato #5',
          url:
            'https://images.pexels.com/photos/385960/pexels-photo-385960.jpeg?auto=compress&cs=tinysrgb&h=350'
        }
      ],
      currentImage: 1
    }
    this.prevImage = this.prevImage.bind(this)
    this.nextImage = this.nextImage.bind(this)
  }

  // Funciones

  prevImage() {
    let currentImageMinusOne = this.state.currentImage - 1
    if (this.state.currentImage > 1) {
      this.setState({
        currentImage: currentImageMinusOne
      })
    } else {
      this.setState({
        currentImage: 5
      })
    }
    return currentImageMinusOne
  }

  nextImage() {
    let currentImagePlusOne = this.state.currentImage + 1
    if (this.state.currentImage < 5) {
      this.setState({
        currentImage: currentImagePlusOne
      })
    } else {
      this.setState({
        currentImage: 1
      })
    }
    return currentImagePlusOne
  }

  render() {
    const URL = this.state.images[this.state.currentImage - 1].url
    return (
      <div className="carousel">
        <div className="controls">
          <button className="control prev" onClick={this.prevImage} />
          <button className="control next" onClick={this.nextImage} />
        </div>
        <MainImage id={this.state.currentImage} url={URL} />

        <ul className="thumbnails">
          {this.state.images.map(image => {
            return (
              <Thumbnail
                key={image.id}
                url={image.url}
                title={image.title}
                className={image.url === URL ? 'active' : ''}
              />
            )
          })}
        </ul>

        <h5>
          <strong>Foto:</strong> {this.state.currentImage} de{' '}
          {this.state.images.length}
        </h5>
      </div>
    )
  }
}

export default Carousel
