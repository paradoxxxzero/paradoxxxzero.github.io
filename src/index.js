/* eslint-disable import/first */
if (process.env.NODE_ENV === 'development') {
  require('preact/debug')
}

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import Bio from './Bio'
import Sky from './Sky'
import reducer from './store/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <Sky />
    <Bio />
  </Provider>,
  document.getElementById('root')
)

window.__ = {
  store,
}
