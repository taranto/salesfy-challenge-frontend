import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { Container } from './styles';
import { Divider } from 'antd';
import { Tag } from 'antd';
const { Search } = Input;



export default function Converter() {
    return (
        <Container>
            <Search
                placeholder="input search text"
                enterButton="Convert!"
                size="large"
                onSearch={value => console.log(value)}
            />
            <Tag className="tag" color="purple"> number translated </Tag>
            <div className="historyBox">
                <div className="boxTitle">
                    <div>There’s twinty ejkaocijiaec lajierv alcinie nenu numbers translated</div>
                </div>
                <Divider />
                <div> 5: five </div>
            </div>
        </Container>
    );
}

