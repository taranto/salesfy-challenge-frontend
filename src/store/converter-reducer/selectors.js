import { createSelector } from 'reselect';

const selectInputItens = state => state.inputItens;

export const itensLength = createSelector(
    [selectInputItens],
    (itens) => itens.arrayValues.length
)