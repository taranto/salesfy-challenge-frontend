import React from 'react';
import 'antd/dist/antd.css';
import { Container } from './styles';
import { Divider, Button } from 'antd';
import { connect } from 'react-redux';
import { itensLength, convertLastValue, lengthFeature } from '../store/converter-reducer/selectors';
import SubmitForm from './form';
import HistoryMap from './historyMap';



function Converter(props) {
    const { itensLength, convertedLastValue, lengthFeature, inputItens } = props
    return (
        <Container>
            <SubmitForm />
            <div className="tag" onClick={() => console.log(inputItens)} placeholder='waiting...' color="purple">
                {
                    convertedLastValue === 'ZERO' ? 'Nenhum número convertido ainda :(' :
                        <div>
                            <span>last number converted: </span>
                            <strong >{convertedLastValue}</strong>
                        </div>
                }
            </div>
            <div className="historyBox">
                <div className="boxTitle">
                    <div className={JSON.stringify(lengthFeature)}>There’s {itensLength} numbers translated</div>
                </div>
                <Divider />
                <HistoryMap />
            </div>
            <Divider />
            <Button onClick={() => { window.localStorage.clear(); window.location.reload(false) }}> Resetar historico </Button>
        </Container>
    );
}

const mapStateToProps = state => ({
    inputItens: state.inputItens.arrayValues,
    itensLength: itensLength(state),
    convertedLastValue: convertLastValue(state),
    lengthFeature: lengthFeature(state)

});

export default connect(mapStateToProps)(Converter);
