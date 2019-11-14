import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from 'react-dom'
import React from 'react'

import Bio from './Bio'
import Sky from './Sky'
import reducer from './store/reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
