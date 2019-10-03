import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';
import './style.less';

class Notices extends Component {

  handleOpenNotification(...args) {
    const [type, direction] = args;
    if (typeof direction === 'string') {
      notification.config({
        placement: direction,
      });
    }

    notification[type]({
      message: '发工资啦',
      description: '这个月工资1000万，请笑纳！',
    });
  }

  render() {
    return (
      <div>
        <Card title="通知提醒框">
          <Button type="primary" onClick={this.handleOpenNotification.bind(this, 'success')}>success</Button>
          <Button type="primary" onClick={this.handleOpenNotification.bind(this, 'info')}>Info</Button>
          <Button type="primary" onClick={this.handleOpenNotification.bind(this, 'warning')}>Warning</Button>
          <Button type="primary" onClick={this.handleOpenNotification.bind(this, 'error')}>Error</Button>
        </Card>
        <Card title="通知提醒框方向改变">
          <Button type="primary" onClick={this.handleOpenNotification.bind(this, 'success', 'topLeft')}>topLeft</Button>
          <Button type="primary" onClick={this.handleOpenNotification.bind(this, 'info', 'topRight')}>topRight</Button>
          <Button type="primary" onClick={this.handleOpenNotification.bind(this, 'warning', 'bottomLeft')}>bottomLeft</Button>
          <Button type="primary" onClick={this.handleOpenNotification.bind(this, 'error', 'bottomRight')}>bottomRight</Button>
        </Card>
      </div>
    )
  }
}

export default Notices;