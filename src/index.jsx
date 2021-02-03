import { renderToString } from 'preact-render-to-string'
// import 'preact/debug'
import React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { ServerStyleSheet } from 'styled-components'
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

const renderMode = import.meta.env.MODE === 'development' ? render : hydrate
renderMode(App, document.getElementById('root'))

window.__ = {
  store,
}

export default () => {
  let rendered = ''
  const sheet = new ServerStyleSheet()
  try {
    rendered = renderToString(sheet.collectStyles(App))
    const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();
    rendered += `!!CSSSTART!!${styleTags}!!CSSEND!!`
  } finally {
    sheet.seal()
  }
  return rendered
}
