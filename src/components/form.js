import { Form, Button, InputNumber } from 'antd';
import React from 'react';
import { InputStyle } from './styles';
import { connect } from 'react-redux';
import setInputValue from '../store/converter-reducer/actions';



class DispatchNumberForm extends React.Component {
    componentDidMount() {
    }

    dispatchNumber(integer) {
        const { dispatch } = this.props;
        dispatch(setInputValue(integer))
    }

    handleInputValue = () => {
        const inputValue = this.props.form.getFieldValue(
            'number'
        );

        console.log(typeof inputValue)

        if(typeof inputValue === ('string' || 'undefined') ) {
            alert('preencha com algum número')
        } else { 
            typeof inputValue === 'number' ? this.dispatchNumber(inputValue) : alert('precisa ser um número')
        }
    };

    handleSubmit = e => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        if (this.props.form.getFieldValue('number') === undefined) {
            return alert('preencha com um número')
        } else {
            this.handleInputValue()
            this.props.form.resetFields()
        }

    };



    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <InputStyle>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('number', {
                            rules: [{
                                required: true,
                                type: 'number',
                                message: 'Precisa ser um número inteiro'
                            }],
                        })(
                            <InputNumber
                                onChange={(value) => this.props.form.setFieldsValue({ number: value })}
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