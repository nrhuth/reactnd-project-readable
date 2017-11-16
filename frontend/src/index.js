import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { addPost } from './actions'


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

/*const uuidv1 = require('uuid/v1')
store.dispatch(addPost ({
    id: uuidv1(),
    timestamp: Date.now(),
    title: 'Action test',
    body: 'Test test!',
    author: 'Test auhtor',
    category: 'redux',
}))*/

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
)
registerServiceWorker()