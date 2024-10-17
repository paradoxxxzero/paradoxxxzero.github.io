import { hydrateRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { thunk } from 'redux-thunk'
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

hydrateRoot(document.getElementById('root'), App)
