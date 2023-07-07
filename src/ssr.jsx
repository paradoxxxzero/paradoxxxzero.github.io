import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { ServerStyleSheet } from 'styled-components'

import Sky from './Sky'
import Site from './Site'
import reducer from './store/reducer'

const store = createStore(reducer, compose(applyMiddleware(thunk)))

const sheet = new ServerStyleSheet()
export const render = () => {
  let StaticApp = (
    <Provider store={store}>
      <Sky />
      <Site />
    </Provider>
  )

  const appHtml = renderToString(sheet.collectStyles(StaticApp))
  const appJss = sheet.getStyleTags()
  sheet.seal()
  return { appHtml, appJss }
}
