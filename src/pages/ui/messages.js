import React, { Component } from 'react';
import { Card, Button, message } from 'antd';
import './style.less';

class Messages extends Component {
  handleShowMessages(type) {
    message[type]('恭喜你，已成功进入游佳后台管理系统!');
  }

  render() {
    return (
      <div>
        <Card title="全局提示框">
          <Button type="primary" onClick={this.handleShowMessages.bind(this, 'success')}>Success</Button>
          <Button type="primary" onClick={this.handleShowMessages.bind(this, 'info')}>Info</Button>
          <Button type="primary" onClick={this.handleShowMessages.bind(this, 'warning')}>Warning</Button>
          <Button type="primary" onClick={this.handleShowMessages.bind(this, 'error')}>Error</Button>
          <Button type="primary" onClick={this.handleShowMessages.bind(this, 'loading')}>Loading</Button>
        </Card>

      </div>
    )
  }
}

export default Messages;