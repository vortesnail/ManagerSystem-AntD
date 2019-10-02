import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './style.less';

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false,
    }
  }

  handleOpen(type) {
    this.setState({
      [type]: true,
    })
  }

  handleClose(type) {
    this.setState({
      [type]: false
    })
  }

  handleConfirm(type) {
    Modal[type]({
      title: "确认？",
      content: "确认要关闭吗？",
      onOk() {
        console.log('牛');
      },
      onCancel() {
        console.log('再接再厉好么!');
      }
    })
  }

  render() {
    return (
      <div>
        <Card title="基础模态框">
          <Button type="primary" onClick={this.handleOpen.bind(this, 'showModal1')}>Open</Button>
          <Button type="primary" onClick={this.handleOpen.bind(this, 'showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={this.handleOpen.bind(this, 'showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={this.handleOpen.bind(this, 'showModal4')}>水平垂直居中弹框</Button>
        </Card>
        <Card title="基础模态框">
          <Button type="primary" onClick={this.handleConfirm.bind(this, 'confirm')}>Confirm</Button>
          <Button type="primary" onClick={this.handleConfirm.bind(this, 'info')}>Infomation</Button>
          <Button type="primary" onClick={this.handleConfirm.bind(this, 'success')}>Success</Button>
          <Button type="primary" onClick={this.handleConfirm.bind(this, 'warning')}>Warning</Button>
          <Button type="primary" onClick={this.handleConfirm.bind(this, 'error')}>Error</Button>
        </Card>
        
        <Modal title="React" visible={this.state.showModal1} onCancel={this.handleClose.bind(this, 'showModal1')}>
          <p>React&AntD后台管理系统</p>
        </Modal>
        <Modal title="React" visible={this.state.showModal2} onCancel={this.handleClose.bind(this, 'showModal2')} okText="下一步" cancelText="算了">
          <p>React&AntD后台管理系统</p>
        </Modal>
        <Modal title="React" visible={this.state.showModal3} onCancel={this.handleClose.bind(this, 'showModal3')} style={{ top: 20 }}>
          <p>React&AntD后台管理系统</p>
        </Modal>
        <Modal title="React" visible={this.state.showModal4} onCancel={this.handleClose.bind(this, 'showModal4')} centered={true}>
          <p>React&AntD后台管理系统</p>
        </Modal>
      </div>
    )
  }
}

export default Modals;