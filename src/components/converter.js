import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { Container } from './styles';
import { Divider } from 'antd';
import { Tag } from 'antd';
import { connect } from 'react-redux';
import { itensLength, convertLastValue, historyBoxArray } from '../store/converter-reducer/selectors';
import setInputValue from '../store/converter-reducer/actions';




function Converter(props) {
    const { itensLength, convertedLastValue, historyBoxArray } = props
    const { Search } = Input;

    function dispatchProducts(data) {
        const { dispatch } = props;
        dispatch(setInputValue(data))
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
            <Tag className="tag" color="purple">{convertedLastValue}</Tag>
            <div className="historyBox">
                <div className="boxTitle">
                    <div>There’s {itensLength} numbers translated</div>
                </div>
                <Divider />
                {historyBoxArray.map((item, ind) => {
                    return <div key={ind}>{item}</div>
                })}
            </div>
        </Container>
    );
}

const mapStateToProps = state => ({
    inputItens: state.inputItens,
    itensLength: itensLength(state),
    convertedLastValue: convertLastValue(state),
    historyBoxArray: historyBoxArray(state),

});

export default connect(mapStateToProps)(Converter);
