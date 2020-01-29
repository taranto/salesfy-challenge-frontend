import converterActionTypes from './types';

const setInputValue = function (inputValue) {
    return {
        type: converterActionTypes.SET_BUTTON_OUTPUT,
        payload: inputValue
    }
};

export default setInputValue