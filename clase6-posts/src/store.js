import { createStore } from 'redux'
import axios from 'axios'

let initialState = { posts: [], pinned: null }

const rootReducer = function(state = initialState, action) {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  switch (action.type) {
    case 'DELETE_ALL_POSTS':
      state.posts = []
      console.log(state.posts)
      break

    case 'GET_POSTS':
      axios.get(url).then(response => {
        state.posts = state.posts.concat(response.data)
      })
      break

    case 'ADD_POST':
      state.posts = state.posts.concat(action.post)
      break

    case 'UPDATE_POST':
      state.posts.map(post => {
        if (post.id === action.postId) {
          post = []
          return post.concat(action.post)
        }
        return post
      })
      break

    case 'LIKE_POST':
      state.posts.map(post => {
        if (post.id === action.postId) {
          return post.likes++
        }
        return post
      })
      break

    case 'FAVORITE_POST':
      state.posts.map(post => {
        if (post.id === action.postId) {
          return (post.favorite = true)
        }
        return post
      })
      break

    case 'PIN_POST':
      state.posts.map(post => {
        if (post.id === state.pinned) {
          return post
        }
        return post
      })
      break

    default:
      console.log('DEFAULT')
  }

  return state
}

// redux.dispatch({
//   type: 'GET_POST'
// })

const store = createStore(rootReducer)

export default store
