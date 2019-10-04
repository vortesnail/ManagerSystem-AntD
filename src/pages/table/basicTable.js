import React, { Component } from 'react';
import { Table, Card, notification, Icon } from 'antd';

class BasicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      selectedRowKeys: '',
      selectedItem: '',
      selectedRows: '',
    }
  }

  componentDidMount() {
    const dataSource = [
      {
        id: '1',
        username: '胡彦斌',
        sex: '1',
        state: '1',
        hobbies: '1',
        birthday: '2011-09-05',
        address: '杭州西湖湖心',
        time: '05:10:00'
      },
      {
        id: '2',
        username: '董轩宇',
        sex: '1',
        state: '1',
        hobbies: '1',
        birthday: '2011-09-05',
        address: '杭州西湖湖心',
        time: '05:10:00'
      },
      {
        id: '3',
        username: '乐静波',
        sex: '1',
        state: '1',
        hobbies: '1',
        birthday: '2011-09-05',
        address: '杭州西湖湖心',
        time: '05:10:00'
      },
    ];
    // 添加 key
    dataSource.map((item, index) => {
      item.key = index;
    })

    this.setState({
      dataSource
    })
  }

  onRowClick(record, index) {
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record,
    }, () => {
      notification.open({
        message: '温馨提醒',
        description: `你已经选择了用户：${this.state.selectedItem.username}, 他喜欢${this.state.selectedItem.hobbies}`,
        icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
      });
    })
  }

  render() {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'username',
      },
      {
        title: '性别',
        dataIndex: 'sex',
      },
      {
        title: '状态',
        dataIndex: 'state',
      },
      {
        title: '爱好',
        dataIndex: 'hobbies',
      },
      {
        title: '生日',
        dataIndex: 'birthday',
      },
      {
        title: '地址',
        dataIndex: 'address',
      },
      {
        title: '早起时间',
        dataIndex: 'time',
      }
    ];

    const rowRadioSelection = {
      type: "radio",
      selectedRowKeys: this.state.selectedRowKeys,
    }
    const rowCheckSelection = {
      type: "checkbox",
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys,
          selectedRows,
        })
      }
    }
    return (
      <div>
        <Card title="基础表格">
          <Table columns={columns} dataSource={this.state.dataSource} pagination={false}/>
        </Card>
        <Card title="基础表格-单选">
          <Table 
            columns={columns} 
            dataSource={this.state.dataSource} 
            pagination={false}
            rowSelection={rowRadioSelection}  
            onRow={(record, index) => {
              return {
                onClick: this.onRowClick.bind(this, record, index),
              }
            }}
          />
        </Card>
        <Card title="基础表格-复选">
          <Table 
            columns={columns} 
            dataSource={this.state.dataSource} 
            pagination={false}
            rowSelection={rowCheckSelection}  
            onRow={(record, index) => {
              return {
                onClick: this.onRowClick.bind(this, record, index),
              }
            }}
          />
        </Card>
      </div>
    )
  }
}

export default BasicTable;