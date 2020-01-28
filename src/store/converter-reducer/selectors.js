import { createSelector } from 'reselect';

const selectItens = state => state.itens;

export const selectCurrentItens = createSelector(
    [selectItens],
    (itens) => itens.currentItens
)