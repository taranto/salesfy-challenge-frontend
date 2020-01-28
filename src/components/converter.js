import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { Container } from './styles';
import { Divider } from 'antd';
import { Tag } from 'antd';
import { connect } from 'react-redux';
import converter from 'number-to-words';
import { itensLength } from '../store/converter-reducer/selectors';
const { Search } = Input;


function Converter(props) {
    const { inputItens: { lastValue, arrayValues = [] } } = props
    const { itensLength } = props
    function dispatchProducts(data) {
        const { dispatch } = props;
        dispatch({
            type: 'SET_BUTTON_OUTPUT',
            payload: [data]
        })
    }
    return (
        <Container>
            {/* criar validação no input */}
            <Search
                placeholder="let me spell your"
                enterButton="Convert!"
                size="large"
                onSearch={value => dispatchProducts(value)}
            />
            <Tag className="tag" color="purple">{lastValue}</Tag>
            <div className="historyBox">
                <div className="boxTitle">
                    <div>There’s {itensLength} numbers translated</div>
                </div>
                <Divider />
                {arrayValues.map((number, ind) => {
                    return <div key={ind}>{number}</div>
                })}
            </div>
        </Container>
    );
}

const mapStateToProps = state => ({
    inputItens: state.inputItens,
    itensLength: itensLength(state)
});

export default connect(mapStateToProps)(Converter);
