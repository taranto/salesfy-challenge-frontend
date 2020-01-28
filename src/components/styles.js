import styled from 'styled-components'


export const HeaderStyle = styled.div`
    width: 100vw;
    height: 10vh;
    background:white;
`

export const InputStyle = styled.div`
    display: flex;
    justify-content:center;

    .inputNumber{
        margin:0;
        width:auto;
    }
    .ant-row{
        margin:0
    }

    .ant-form-horizontal{
        margin-bottom: 30px;
        margin-top: 30px;
    }
    .ant-form-item-children{
        width:100%
    }

    .ant-form-item-control{
        display:flex;
        justify-content: center;
    }
    .ant-btn{
        width:100%;
        background: #8A05BE;
    }
`
export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');
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
        box-shadow: 2px 2px 5px #369c24;
    }

    .boxTitle {
        text-align:center;
        font-height:900;
    }

    
    .convertedNumbers {
        font-size:12px;
        font-family:'Source Code Pro', monospace;
    }
`
