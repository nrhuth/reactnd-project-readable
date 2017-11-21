import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { addPost } from './actions'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
)

registerServiceWorker()