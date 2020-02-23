import React from 'react';
import {Row, Col, Button, Input, List} from 'antd';
import 'antd/dist/antd.css';
const TodoListStoreUI = (props) => {
  return ( 
    <Row type="flex" justify="center">
      <Col span={24} style={{width: '62%'}}>
        <h3>使用store方式</h3>
      </Col>
      <Col span={24} style={{width: '62%'}}>
        <Input
          placeholder="请输入"
          value={props.inputValue}
          style={{width: '200px', margin: '0 10px'}}
          onChange={props.inputChange}
          onKeyPress={props.addList}
        />
        <Button type="primary" onClick={props.addList}>添加</Button>
      </Col>
      <Col span={24} style={{width: '62%'}}>
        <List 
          bordered
          style={{margin: '10px 0'}}
          dataSource={props.listData}
          renderItem={(item, index) => 
            // <List.Item onClick={props.deleteList.bind(this, index)}>
            //   {item}
            // </List.Item>
            
            // 因为上面已经定义了index，无需再定义index
            <List.Item onClick={()=>{props.deleteList(index)}}>
              {item}
            </List.Item>
          }
        />
      </Col>
    </Row>
  );
}
 
export default TodoListStoreUI;