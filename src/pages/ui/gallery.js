import React, { Component } from 'react';
import { Card, Row, Col, Modal } from 'antd';
import './style.less';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curImg: '',
      curImgName: '',
      visible: false,

    }
  }

  handleCheckImg(imgName) {
    this.setState({
      curImg: '/gallery/' + imgName,
      curImgName: imgName,
      visible: true
    })
  }

  handleCancel() {
    this.setState({
      curImg: '',
      curImgName: '',
      visible: false
    })
  }

  render() {
    const imgs = [
      ['1.png', '2.png', '3.png', '4.png', '5.png'],
      ['6.png', '7.png', '8.png', '9.png', '10.png'],
      ['11.png', '12.png', '13.png', '14.png', '15.png'],
      ['16.png', '17.png', '18.png', '19.png', '20.png'],
      ['21.png', '22.png', '23.png', '24.png', '25.png'],
    ]
    const imgList = imgs.map((list) => list.map((item) => 
      <Card key={item.toString()} cover={<img src={'/gallery/' + item} alt={item.toString()}/>} onClick={this.handleCheckImg.bind(this, item.toString())} hoverable={true}>
        <Card.Meta title="游佳" description="后台管理系统的图片画廊"/>
      </Card>
    ))
    return (
      <div>
        <Row gutter={10}>
          <Col md={5}>
            { imgList[0] }
          </Col>
          <Col md={5}>
            { imgList[1] }
          </Col>
          <Col md={5}>
            { imgList[2] }
          </Col>
          <Col md={5}>
            { imgList[3] }
          </Col>
          <Col md={4}>
            { imgList[4] }
          </Col>
        </Row>
        <Modal
          title={this.state.curImgName}
          visible={this.state.visible}
          onCancel={this.handleCancel.bind(this)}
          footer={null}
          width={400}
          style={{}}
        >
          <img src={this.state.curImg} alt={this.state.imgName} style={{width: "100%"}}/>
        </Modal>
      </div>
    )
  }
}

export default Gallery;