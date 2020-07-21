import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/lib/integration/react'
import {configureStore} from './store'
import App from './App.js'

const store = configureStore()
const persistor = persistStore(store)

ReactDOM.render(
    // Wrap app component in the provider
    <Provider store={store}>
        <PersistGate 
            persistor={persistor}
            loading={<div>Loading...</div>}
            persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)