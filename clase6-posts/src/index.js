import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// REACT ROUTER DOM - tag que envuelve la App:

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
