import { combineReducers } from 'redux';

import converterReducer from './converter-reducer/reducer';

export default combineReducers({
    inputItens: converterReducer,

});