import React, { Component } from 'react';
import { Card, Form, Button, Upload, Input, Icon, Checkbox, InputNumber, Radio, Select, Switch, DatePicker, TimePicker, message } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      imageUrl: ''
    }
  }

  handleSubmit() {
    let registerInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if(!err) {
        message.success(`${registerInfo.username}, 恭喜注册成功！`);
      }
    })
  }

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange(info) {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  }

  render() {
    const { imageUrl } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4,
      },
      wrapperCol: {
        xs: 24,
        sm: 8
      }
    }
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    }
    return (
      <div>
        <Card title="注册表单">
          <Form>
            <FormItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('username', {
                  initialValue: '',
                  rules: [
                    { required: true, message: '用户名不能为空' }
                  ]
                })(
                  <Input prefix={<Icon type="user" />} placeholder="请输入用户名"/>
                )
              }
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('password', {
                  initialValue: '',
                  rules: [
                    { required: true, message: '请输入密码' }
                  ]
                })(
                  <Input prefix={<Icon type="lock" />} placeholder="password" type="password"/>
                )
              }
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: '1',
                })(
                  <RadioGroup>
                    <Radio value="1" checked={true}>男</Radio>
                    <Radio value="2">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: 18,
                })(
                  <InputNumber />
                )
              }
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: '1',
                })(
                  <Select>
                    <Option value="1">闲鱼一条</Option>
                    <Option value="2">垃圾</Option>
                    <Option value="3">等死的家伙</Option>
                    <Option value="4">阿里P8</Option>
                    <Option value="5">创业家</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('hobbies', {
                  initialValue: '1',
                })(
                  <Select mode="multiple">
                    <Option value="1">打游戏</Option>
                    <Option value="2">看电影</Option>
                    <Option value="3">写代码</Option>
                    <Option value="4">唱歌</Option>
                    <Option value="5">听音乐</Option>
                    <Option value="6">打架</Option>
                    <Option value="7">剪辑视频</Option>
                    <Option value="8">飞天</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="婚宴状况" {...formItemLayout}>
              {
                getFieldDecorator('isMarry', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2018-08-08'),
                })(
                  <DatePicker showTime/>
                )
              }
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  initialValue: '',
                })(
                  <TextArea autosize={{ minRows: 2, maxRows: 6 }} placeholder="xx省xx市xx区xx街xx号"/>
                )
              }
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {
                getFieldDecorator('time', {
                  initialValue: moment('00:00:00', 'HH:mm:ss'),
                })(
                  <TimePicker />
                )
              }
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {
                getFieldDecorator('img')(
                  <Upload 
                    listType="picture-card" 
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    onChange={this.handleChange.bind(this)}
                  >
                    {imageUrl ? <img src={imageUrl} alt="@" style={{ width: '100%' }} /> : <Icon type="plus" />}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout} >
              {
                getFieldDecorator('xieyi')(
                  <Checkbox>我已阅读过<a href="#">游佳协议</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout} >
              {
                getFieldDecorator('xieyi')(
                  <Button type="primary" onClick={this.handleSubmit.bind(this)}>注册</Button>
                )
              }
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create({ name: 'register' })(FormRegister);