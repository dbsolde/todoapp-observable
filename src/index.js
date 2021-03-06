import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Route, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './App'
import configureStore from './store'


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App} />
        </Router>
    </Provider>
  , document.getElementById('root'));

