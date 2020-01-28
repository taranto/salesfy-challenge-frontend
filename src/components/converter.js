import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { Container } from './styles';
import { Divider } from 'antd';
import { Tag } from 'antd';
import { connect } from 'react-redux';
import converter from 'number-to-words';
const { Search } = Input;



function Converter(props) {
    const { inputItens: { arrayValues } } = props
    console.log(props)
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
            <Tag className="tag" color="purple">{arrayValues}</Tag>
            <div className="historyBox">
                <div className="boxTitle">
                    <div>There’s twinty ejkaocijiaec lajierv alcinie nenu numbers translated</div>
                </div>
                <Divider />
                <div> 5: at{`${new Date()}`} FIVE</div>
                <div> 5: at{`${new Date()}`} FIVE</div>
                <div> 5: at{`${new Date()}`} FIVE</div>
            </div>
        </Container>
    );
}

const mapStateToProps = state => ({
    inputItens: state.inputItens
});

export default connect(mapStateToProps)(Converter);
