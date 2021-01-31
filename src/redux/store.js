import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import imagesReduser from './redusers/imagesReduser';
import itemsReduser from './redusers/itemsReduser'
import isAuthReduser from './redusers/isAuthReduser'
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    images: imagesReduser,
    items: itemsReduser,
    isAuth: isAuthReduser,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;