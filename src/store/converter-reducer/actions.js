import converterActionTypes from './types';

const setInputValue = function (inputValue) {
    console.log(inputValue)
    return {
        type: converterActionTypes.SET_CURRENT_USER,
        payload: inputValue
    }
};

export default setInputValue