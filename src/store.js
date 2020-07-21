import {createStore, combineReducers, applyMiddleware} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {todos} from './todos/reducers'

const reducers = {
    todos
}

const persistConfig = {
    key: 'root',
    storage, // Default to local storage on the web
    stateReconciler: autoMergeLevel2
}

// To be passed to the create store function
const rootReducer = combineReducers(reducers)
// Where to save our data
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => 
    createStore(
        persistedReducer,
        // Connect app to the redux devtool extension in browser
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )