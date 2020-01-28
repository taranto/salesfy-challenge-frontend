import styled from 'styled-components'


export const HeaderStyle = styled.div`
    width: 100vw;
    height: 10vh;
    background:white;
`

export const Container = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 70%;
    background:white;
    padding:1em;
    border-radius: 3px;

    .tag {
        padding-top: 10px;
        margin-top: 30px;
        height:3em;
        text-align:center;
        text-justify: inter-word;
        font-size: 15px;
    }

    .historyBox {
        margin:2em;
        padding: 2em;
        border-radius: 2em;
        background: white;
        box-shadow: 2px 2px 5px;
    }

    .boxTitle {
        text-align:center;
    }
`
