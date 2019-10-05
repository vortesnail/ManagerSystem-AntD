import React, { Component } from 'antd';
import axios from 'axios';
import { Card, Button, Table, Form, Select, Modal, message } from 'antd';

import './style.less';

const FormItem = Form.Item;
const Option = Select.Option;

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    axios.get().then(data => {
        
    })
  }

  render() {
    const columns = [
      {
        title: "订单编号",
        dataIndex: "order_sn"
      },{
        title: "车辆编号",
        dataIndex: "bike_sn"
      },{
        title: "用户名",
        dataIndex: "user_name"
      },{
        title: "手机号",
        dataIndex: "mobile"
      },{
        title: "里程",
        dataIndex: "distance"
      },{
        title: "行驶时长",
        dataIndex: "total_time"
      },{
        title: "状态",
        dataIndex: "status"
      },{
        title: "开始时间",
        dataIndex: "start_time"
      },{
        title: "结束时间",
        dataIndex: "end_time"
      },{
        title: "订单金额",
        dataIndex: "total_fee"
      },{
        title: "实付金额",
        dataIndex: "user_pay"
      },
    ]
    return(
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card>
          <Button>订单详情</Button>
          <Button>结束订单</Button>
        </Card>
        <div className="table-style">
          <Table
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
            rowKey={record => record.id}
          />
        </div>
      </div>
    )
  }
}

export default Order;

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