import React from 'react';
import 'antd/dist/antd.css';
import { Container } from './styles';
import { Divider, Form, Input, Tag } from 'antd';
import { connect } from 'react-redux';
import { itensLength, convertLastValue, historyBoxArray } from '../store/converter-reducer/selectors';
import WrappedHorizontalLoginForm from './form';



function Converter(props) {
    const { itensLength, convertedLastValue, historyBoxArray } = props

    return (
        <>
            <Container>
                <WrappedHorizontalLoginForm />
                {/* criar validação no input */}
                <div className="tag" placeholder='waiting...' color="purple">
                    <div>
                        <span>last number converted: </span>
                        <strong>{convertedLastValue}</strong>
                    </div>
                </div>
                <div className="historyBox">
                    <div className="boxTitle">
                        <div>There’s {itensLength} numbers translated</div>
                    </div>
                    <Divider />
                    <div className='convertedNumbers'>
                        {historyBoxArray.map((item, ind) => {
                            return <div key={ind}>{item}</div>
                        })}
                    </div>
                </div>
            </Container>
        </>
    );
}

const mapStateToProps = state => ({
    inputItens: state.inputItens,
    itensLength: itensLength(state),
    convertedLastValue: convertLastValue(state),
    historyBoxArray: historyBoxArray(state),

});

export default connect(mapStateToProps)(Converter);
