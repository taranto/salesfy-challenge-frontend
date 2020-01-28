import { createSelector } from 'reselect';
import converter from 'number-to-words';

function formatDate(date) {
    const monthNames = [
        "Jan", "Fev", "Mar",
        "Abr", "Mai", "Jun", "Jul",
        "Ago", "Set", "Out",
        "Nov", "Dez"
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `[${day} ${monthNames[monthIndex]} ${year} ${hour}:${minutes}]`;
}
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
        return `${value} : ${converter.toWords(value)} - ${formatDate(new Date())}`
    })
)

export const convertLastValue = createSelector(
    [selectLastValue],
    (item) => converter.toWords(item)
)

