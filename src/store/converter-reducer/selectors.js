import { createSelector } from 'reselect';
import converter from 'number-to-words';

const selectInputItens = state => state.inputItens;
const selectLastValue = state => state.inputItens.lastValue;
const selectArrayValues = state => state.inputItens.arrayValues;


export const itensLength = createSelector(
    [selectInputItens],
    (itens) => converter.toWords(itens.arrayValues.length)
)

export const historyBoxArray = createSelector(
    [selectArrayValues],
    (itens) => itens.map((value) => {
        return `${value} : ${converter.toWords(value)}`
    })
)

export const convertLastValue = createSelector(
    [selectLastValue],
    (item) => converter.toWords(item)
)

