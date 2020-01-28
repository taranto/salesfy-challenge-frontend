import { combineReducers } from 'redux';

import converterReducer from './converter-reducer/reducer';

import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    whitelist: ['inputItens']
}


export default combineReducers({
    inputItens: converterReducer,

});