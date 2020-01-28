import { takeEvery } from 'redux-saga/effects';

import converterActionTypes from './types';

export function* convertNumberAsync() {
    yield console.log('okay')
}

export function* convertNumber() {
    yield takeEvery(
        converterActionTypes.SET_BUTTON_OUTPUT,
        convertNumberAsync)
}
