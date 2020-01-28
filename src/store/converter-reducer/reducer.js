import converterActionTypes from './types';

const INITIAL_STATE = {
    lastValue: 0,
    arrayValues: []
}

const converterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case converterActionTypes.SET_BUTTON_OUTPUT:
            return {
                ...state,
                lastValue: action.payload,
                arrayValues: [...state.arrayValues, ...action.payload]
            };
        default:
            return state;
    }
}

export default converterReducer;
