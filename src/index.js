/* eslint-disable import/first */
if (process.env.NODE_ENV === 'development') {
  require('preact/debug')
}

import React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import {
  ServerStyleSheet,
  __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS,
} from 'styled-components'
import { renderToString } from 'preact-render-to-string'

import Site from './Site'
import Sky from './Sky'
import reducer from './store/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

const App = (
  <Provider store={store}>
    <Sky />
    <Site />
  </Provider>
)

const renderMode = process.env.NODE_ENV === 'development' ? render : hydrate
renderMode(App, document.getElementById('root'))

window.__ = {
  store,
}

export default () => {
  let rendered = ''
  const { StyleSheet } = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS
  StyleSheet.reset(true)
  const sheet = new ServerStyleSheet()
  rendered = renderToString(sheet.collectStyles(App))
  const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();
  rendered += `!!CSSSTART!!${styleTags}!!CSSEND!!`
  sheet.seal()
  return rendered
}
