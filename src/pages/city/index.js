import React, { Component } from 'react';
import axios from 'axios';
import { Button, Card, Table, Form, Select, Modal } from 'antd';

import './style.less';

const FormItem = Form.Item;
const Option = Select.Option;

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pagination: '',
      isShowOpenCity: false,
    }
  }

  componentDidMount() {
    axios.get(' https://www.easy-mock.com/mock/5d986f8c896b9432186c1ca9/bms_antd/open_city').then(data => {
      const dataList = data.data.result;
      const list = dataList.item_list;
      this.setState({
        list: list
      })
    })
  }

  // 开通城市
  handleOpenCity() {
    this.setState({
      isShowOpenCity: true,
    })
  }

  // 开通城市提交
  handleSubmit() {
    let cityInfo = this.cityForm.props.form.getFieldsValue();
    console.log(cityInfo)
  }

  render() {
    const columns = [
      {
        title: '城市ID',
        dataIndex: 'id'
      }, {
        title: '城市名称',
        dataIndex: 'name'
      }, {
        title: '用车模式',
        dataIndex: 'mode',
        render(mode) {
          return mode === 1 ? '停车点' : '禁停区';
        }
      }, {
        title: '营运模式',
        dataIndex: 'op_mode',
        render(op_mode) {
          return op_mode === 1 ? '自营' : '加盟';
        }
      }, {
        title: '授权加盟商',
        dataIndex: 'franchisee_name'
      }, {
        title: '城市管理员',
        dataIndex: 'city_admins',
        render(arr) {
          return arr.map((item) => {
            return item.user_name
          }).join(',');
        }
      }, {
        title: '城市开通时间',
        dataIndex: 'open_time'
      }, {
        title: '操作时间',
        dataIndex: 'update_time',
        render(update_time) {
          let date = new Date(update_time);
          return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        }
      }, {
        title: '操作人',
        dataIndex: 'sys_user_name'
      },
    ]

    return (
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card>
          <Button type="primary" onClick={this.handleOpenCity.bind(this)}>开通城市</Button>
        </Card>
        <div className="table-style">
          <Table
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            rowKey={record => record.id}
          />
        </div>
        <Modal
          title="开通城市"
          visible={this.state.isShowOpenCity}
          onCancel={() => {
            this.setState({
              isShowOpenCity: false,
            })
          }}
          onOk={this.handleSubmit.bind(this)}
        >
          <OpenCityForm wrappedComponentRef={(inst) => { this.cityForm = inst; }}/>
        </Modal>
      </div>
    )
  }
}

class FilterForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <FormItem label="城市">
          {
            getFieldDecorator('city_id')(
              <Select
                placeholder="请选择"
                style={{ width: '100px' }}
              >
                <Option value="">全部</Option>
                <Option value="1">北京市</Option>
                <Option value="2">天津市</Option>
                <Option value="3">深圳市</Option>
                <Option value="4">杭州市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="用车模式">
          {
            getFieldDecorator('mode')(
              <Select
                placeholder="全部"
                style={{ width: '140px' }}
              >
                <Option value="">全部</Option>
                <Option value="1">指定停车点模式</Option>
                <Option value="2">禁停区模式</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="运营模式">
          {
            getFieldDecorator('op_mode')(
              <Select
                placeholder="全部"
                style={{ width: '80px' }}
              >
                <Option value="">全部</Option>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="加盟商授权状态">
          {
            getFieldDecorator('auth_status')(
              <Select
                placeholder="全部"
                style={{ width: '100px' }}
              >
                <Option value="">全部</Option>
                <Option value="1">已授权</Option>
                <Option value="2">未授权</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem>
          <Button type="primary" style={{ margin: '0 20px' }}>查询</Button>
          <Button>重置</Button>
        </FormItem>
      </Form>
    )
  }
}
FilterForm = Form.create({})(FilterForm);

class OpenCityForm extends Component {
  render() {
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 10
      }
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="horizontal">
        <FormItem label="选择城市" {...formItemLayout}>
          {
            getFieldDecorator('city_id', {
              initialValue: '1'
            })(
              <Select>
                <Option value="">全部</Option>
                <Option value="1">北京</Option>
                <Option value="2">杭州</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="营运模式" {...formItemLayout}>
          {
            getFieldDecorator('op_mode', {
              initialValue: '1'
            })(
              <Select>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="用车模式" {...formItemLayout}>
          {
            getFieldDecorator('mode', {
              initialValue: '1'
            })(
              <Select>
                <Option value="1">指定停车点</Option>
                <Option value="2">禁停区</Option>
              </Select>
            )
          }
        </FormItem>
      </Form>
    )
  }
}
OpenCityForm = Form.create({})(OpenCityForm);


export default City;