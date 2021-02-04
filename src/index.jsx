// import 'preact/debug'
import { h, hydrate, render } from 'preact'
import { renderToString } from 'preact-render-to-string'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { ServerStyleSheet } from 'styled-components'
import Site from './Site'
import Sky from './Sky'
import reducer from './store/reducer'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

const App = (
  <Provider store={store}>
    <Sky />
    <Site />
  </Provider>
)

if (typeof window !== 'undefined') {
  const renderMode = import.meta.env.MODE === 'development' ? render : hydrate
  renderMode(App, document.getElementById('root'))
}

export default () => {
  const sheet = new ServerStyleSheet()
  try {
    const app = renderToString(sheet.collectStyles(App))
    const style = sheet.getStyleTags() // or sheet.getStyleElement();
    return { app, style }
  } finally {
    sheet.seal()
  }
}
