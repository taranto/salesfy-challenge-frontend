import { Form, Button, InputNumber } from 'antd';
import React from 'react';
import { InputStyle } from './styles';
import { connect } from 'react-redux';
import setInputValue from '../store/converter-reducer/actions';



class HorizontalLoginForm extends React.Component {
    componentDidMount() {
        // To disable submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    dispatchNumber(integer) {
        const { dispatch } = this.props;
        dispatch(setInputValue(integer))
    }

    handleInputValue = () => {
        const inputValue = this.props.form.getFieldValue(
            'number'
        );
        this.dispatchNumber(inputValue)
        this.props.form.resetFields()
    };


    render() {
        const { getFieldDecorator } = this.props.form;

        // Only show error after a field is touched.

        return (
            <InputStyle>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('number', {
                            rules: [{
                                type: 'number',
                                message: 'Precisa ser um número inteiro'
                            }],
                        })(
                            <InputNumber
                                onChange={() => console.log(this.props)}
                                className='inputNumber'
                                placeholder="Me traga um numero"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={this.handleInputValue} type="primary" htmlType="submit">
                            Converter!
                        </Button>
                    </Form.Item>
                </Form>
            </InputStyle>
        );
    }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);



export default connect()(WrappedHorizontalLoginForm)