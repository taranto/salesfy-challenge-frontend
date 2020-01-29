import { createSelector } from 'reselect';
import converter from 'number-to-words';

const selectInputItens = state => state.inputItens;
const selectLastValue = state => state.inputItens.lastValue;
const selectArrayValues = state => state.inputItens.arrayValues;


export const itensLength = createSelector(
    [selectInputItens],
    (itens) => converter.toWords(itens.arrayValues.length).toUpperCase()
)

export const lengthFeature = createSelector(
    [selectArrayValues],
    (itens) => {

        const match = itens.find(number => number === itens.length);
        if (match === undefined) { return false } else { return true }
    }
)


export const historyBoxArray = createSelector(
    selectArrayValues,
    (itens) => itens.map((value) => {
        return `${value} : ${converter.toWords(value).toUpperCase()}`
    })
)

export const convertLastValue = createSelector(
    [selectLastValue],
    (item) => converter.toWords(item).toUpperCase()
)

