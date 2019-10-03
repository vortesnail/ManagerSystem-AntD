import React, { Component } from 'react';
import { Carousel, Card } from 'antd';
import './style.less';

class Carousels extends Component {
  render() {
    return (
      <div>
        <Card title="轮播文字">
          <Carousel autoplay={true} easing="fade">
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </Card>
        <Card title="轮播图片">
          <Carousel className="carousel-wrapper" autoplay={true} easing="fade">
            <div><img src="/carousel-img/carousel-1.jpg" className="carousel-img" alt="#"/></div>
            <div><img src="/carousel-img/carousel-2.jpg" className="carousel-img" alt="#"/></div>
            <div><img src="/carousel-img/carousel-3.jpg" className="carousel-img" alt="#"/></div>
          </Carousel>
        </Card>
      </div>
    )
  }
}

export default Carousels;