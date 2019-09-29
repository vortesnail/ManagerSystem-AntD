import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import menuConfig from '../../config/menuConfig';
import logo from '../../resources/img/textlogo.png';
import './style.less';

const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig);
    this.setState({
      menuTreeNode,
    })
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src={logo} alt="logo"/>
          <h1>AntD MS</h1>
        </div>
        <Menu theme="dark">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}

export default NavLeft;