import converterActionTypes from './types';

const INITIAL_STATE = {
    arrayValues: []
}

const converterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case converterActionTypes.SET_BUTTON_OUTPUT:
            return {
                ...state,
                arrayValues: [...state.arrayValues, ...action.payload]
            };
        default:
            return state;
    }
}

export default converterReducer;
