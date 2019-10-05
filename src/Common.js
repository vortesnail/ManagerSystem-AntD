import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './style/common.less';

import Header from './components/Header/index';
import Footer from './components/Footer/index';
import NavLeft from './components/NavLeft/index';
// import Home from './pages/home/index';

class Common extends Component {
  render() {
    return (
      <Row className="container">
        <Col span={24} className="main">
          <Header/>
          <Row className="content">
            {/* <Home /> */}
            { this.props.children }
          </Row>
          <Footer/>
        </Col>
      </Row>
    )
  }
}

export default Common;