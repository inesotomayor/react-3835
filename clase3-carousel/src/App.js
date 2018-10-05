import React, { Component } from 'react'
import './App.scss'
import Carousel from './Carousel.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">React Carousel</h1>
        <Carousel />
      </div>
    )
  }
}

export default App
