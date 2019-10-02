import React, { Component } from 'react';
import { Card, Button, Icon, Radio } from 'antd';
import './style.less';

const ButtonGroup = Button.Group;

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      btnSize: 'default',

    }
  }

  handleCloseLoading() {
    this.setState({
      loading: false,
    })
  }

  handleContinueLoading() {
    this.setState({
      loading: true,
    })
  }

  handleChange(e) {
    this.setState({
      btnSize: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">游佳</Button>
          <Button>默认</Button>
          <Button type="dashed">虚线</Button>
          <Button type="danger">危险</Button>
          <Button disabled>不可用</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search" />
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮">
          <Button type="primary" loading={this.state.loading}>Loading</Button>
          <Button type="primary" shape="circle" loading={this.state.loading} />
          <Button onClick={this.handleContinueLoading.bind(this)}>点击加载</Button>
          <Button type="primary" onClick={this.handleCloseLoading.bind(this)}>停止加载</Button>
        </Card>
        <Card title="按钮组">
          <ButtonGroup>
            <Button type="primary" style={{ marginRight: '0' }}>
              <Icon type="left" />
              后退
            </Button>
            <Button type="primary">
              前进
              <Icon type="right" />
            </Button>
          </ButtonGroup>
        </Card>
        <Card title="按钮尺寸">
          <Radio.Group value={this.state.btnSize} onChange={this.handleChange.bind(this)}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.btnSize}>游佳</Button>
          <Button size={this.state.btnSize}>默认</Button>
          <Button type="dashed" size={this.state.btnSize}>虚线</Button>
          <Button type="danger" size={this.state.btnSize}>危险</Button>
        </Card>
      </div>
    )
  }
}

export default Buttons;