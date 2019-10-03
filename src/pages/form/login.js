import React, { Component } from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd';

const FormItem = Form.Item;

class FormLogin extends Component {

  handleSubmit() {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if(!err) {
        message.success(`${userInfo.username}, 恭喜登陆成功！`);
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登陆行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名"/>
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" type="password"/>
            </FormItem>
            <FormItem>
              <Button type="primary">登陆</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登陆水平表单">
          <Form style={{width: '300px'}}>
            <FormItem>
              {
                getFieldDecorator('username', {
                  intialValue: '',
                  rules: [
                    { required: true, message: '用户名不能为空' },
                    { min: 5, max: 12, message: '用户名不在长度限制范围内' },
                    { pattern: /^\w+$/g, message: '用户名必须为英文字母或者数字' }
                  ]
                })(
                  <Input prefix={<Icon type="user" />} placeholder="请输入用户名"/>
                )
              }
            </FormItem>
            <FormItem>
            {
                getFieldDecorator('password', {
                  intialValue: '',
                  rules: []
                })(
                  <Input prefix={<Icon type="lock" />} placeholder="请输入密码" type="password"/>
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <a href="/" style={{float: 'right'}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit.bind(this)} htmlType="submit" style={{width: '100%'}}>登陆</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create({ name: 'normal_login' })(FormLogin);