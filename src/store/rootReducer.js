import { combineReducers } from 'redux';

import converterReducer from './converter-reducer/reducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['inputItens']
}
const rootReducer = combineReducers({
    inputItens: converterReducer,
});

export default persistReducer(persistConfig, rootReducer);