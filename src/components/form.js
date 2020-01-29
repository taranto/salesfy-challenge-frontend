import { Form, Button, InputNumber } from 'antd';
import React from 'react';
import { InputStyle } from './styles';
import { connect } from 'react-redux';
import setInputValue from '../store/converter-reducer/actions';



class DispatchNumberForm extends React.Component {
    componentDidMount() {
        // To disable submit button at the beginning.
        this.props.form.validateFields();

    }
    dispatchNumber(integer) {
        const { dispatch } = this.props;
        dispatch(setInputValue(integer))
    }

    handleInputValue = () => {
        const inputValue = this.props.form.getFieldValue(
            'number'
        );
        this.dispatchNumber(inputValue)
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        this.handleInputValue()
        this.props.form.resetFields();

    };



    render() {
        const { getFieldDecorator } = this.props.form;
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
                        <Button type="primary" htmlType="submit">
                            Converter!
                        </Button>
                    </Form.Item>
                </Form>
            </InputStyle>
        );
    }
}

const SubmitForm = Form.create({ name: 'SubmitForm' })(DispatchNumberForm);



export default connect()(SubmitForm)