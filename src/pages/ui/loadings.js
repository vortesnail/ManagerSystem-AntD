import React, { Component } from 'react';
import { Card, Icon, Spin, Alert } from 'antd';
import './style.less';

class Loadings extends Component {
  render() {
    const icon = <Icon type="loading" size="large"/>
    const loading = <Icon type="loading" size="large"/>
    return (
      <div>
        <Card title="Spin用法">
          <Spin size="small"/>
          <Spin style={{margin: '0 20px'}}/>
          <Spin size="large"/>
          <Spin indicator={icon} style={{marginLeft: '10px'}}/>
        </Card>
        <Card title="内容遮罩">
          <Alert message="游佳" description="欢迎来到游佳后台管理系统" type="info"/>
          <Spin>
            <Alert message="游佳" description="欢迎来到游佳后台管理系统" type="warning"/>
          </Spin>
          <Spin tip="加载中...">
            <Alert message="游佳" description="欢迎来到游佳后台管理系统" type="success"/>
          </Spin>
          <Spin tip="加载中..." indicator={loading}>
            <Alert message="游佳" description="欢迎来到游佳后台管理系统" type="success"/>
          </Spin>
        </Card>
      </div>
    )
  }
}

export default Loadings;