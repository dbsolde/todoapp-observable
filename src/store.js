import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epics'
import rootReducer from './reducers'

const epicMiddleWare = createEpicMiddleware()

const configureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(
                epicMiddleWare, 
                routerMiddleware(browserHistory)
            )
        )
    )

    epicMiddleWare.run(rootEpic)

    return store
}

export default configureStore