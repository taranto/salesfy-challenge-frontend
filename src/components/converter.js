import React from 'react';
import 'antd/dist/antd.css';
import { Container } from './styles';
import { Divider, Button } from 'antd';
import { connect } from 'react-redux';
import { itensLength, convertLastValue, historyBoxArray, lengthFeature } from '../store/converter-reducer/selectors';
import WrappedHorizontalLoginForm from './form';



function Converter(props) {
    const { itensLength, convertedLastValue, historyBoxArray, lengthFeature } = props
    console.log(historyBoxArray)
    return (
        <>
            <Container>
                <WrappedHorizontalLoginForm />
                {/* criar validação no input */}
                <div className="tag" onClick={() => console.log(lengthFeature)} placeholder='waiting...' color="purple">
                    <div>
                        <span>last number converted: </span>
                        <strong>{convertedLastValue}</strong>
                    </div>
                </div>
                <div className="historyBox">
                    <div className="boxTitle">
                        <div className={JSON.stringify(lengthFeature)}>There’s {itensLength} numbers translated</div>
                    </div>
                    <Divider />
                    <div className='convertedNumbers'>
                        {Object.keys(historyBoxArray).map((item, ind) => {
                            if (itensLength === Object.values(historyBoxArray)[ind]) {
                                return <span className='true' key={ind}>{item}: {Object.values(historyBoxArray)[ind]}</span>
                            } else {
                                return <span className='false' key={ind}>{item}: {Object.values(historyBoxArray)[ind]}</span>
                            }
                        })}
                    </div>
                </div>
                <Divider />
                <Button onClick={() => { window.localStorage.clear(); window.location.reload(false) }}> Resetar historico </Button>
            </Container>
        </>
    );
}

const mapStateToProps = state => ({
    inputItens: state.inputItens,
    itensLength: itensLength(state),
    convertedLastValue: convertLastValue(state),
    historyBoxArray: historyBoxArray(state),
    lengthFeature: lengthFeature(state)

});

export default connect(mapStateToProps)(Converter);
