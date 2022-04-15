import {applyMiddleware, combineReducers, createStore} from "@reduxjs/toolkit";
import todoItemsReducer from "./todoItems/todoItems.reducer";
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from "redux-persist";
import {logger} from "redux-logger/src";

const persistConfig = {
    key:'root',
    storage,
}

const reducer = combineReducers({
    todo:todoItemsReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer,applyMiddleware(logger));

export const persistor = persistStore(store);