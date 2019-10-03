import React, { Component } from 'react';
import { Card, Tabs, message, Icon } from 'antd';

import './style.less';

const { TabPane } = Tabs;

class PageTabs extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      {
        title: 'Tab 1',
        content: '欢迎来到React',
        key: '1'
      },
      {
        title: 'Tab 2',
        content: '欢迎来到游佳后台管理系统',
        key: '2'
      },
      {
        title: 'Tab 3',
        content: '欢迎来到Fucker',
        key: '3'
      },
    ]
    this.state = {
      activeKey: panes[0].key,
      panes
    }
  }

  callback(key) {
    message.info('Hi, you have clicked tab ' + key);
  }

  activeKey(activeKey) {
    this.setState({ activeKey });
  }

  onEdit(targetKey, action) {
    this[action](targetKey);
  }

  add = () => {
    const { panes } = this.state;
    const activeKey = `${this.newTabIndex++}`;
    panes.push({ title: `New Tab ${activeKey}`, content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <div>
        <Card title="Tab页签">
          <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
            <TabPane tab="Tab 1" key="1">欢迎来到React</TabPane>
            <TabPane tab="Tab 2" key="2" disabled={true}>欢迎来到游佳后台管理系统</TabPane>
            <TabPane tab="Tab 3" key="3">欢迎来到Fucker</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带icon的页签">
          <Tabs defaultActiveKey="github" onChange={this.callback.bind(this)}>
            <TabPane tab={<span><Icon type="github" />github</span>} key="github">欢迎访问github</TabPane>
            <TabPane tab={<span><Icon type="wechat" />wechat</span>} key="wechat">欢迎加我的wechat</TabPane>
            <TabPane tab={<span><Icon type="youtube" />youtube</span>} key="youtube">欢迎访问youtube</TabPane>
          </Tabs>
        </Card>
        <Card title="可编辑Tab页签">
          <Tabs defaultActiveKey="1" onChange={this.activeKey.bind(this)} activeKey={this.state.activeKey} type="editable-card" onEdit={this.onEdit.bind(this)}>
            {
              this.state.panes.map((panel) => {
                return <TabPane tab={panel.title} key={panel.key}>{panel.content}</TabPane>
              })
            }
          </Tabs>
        </Card>

      </div>
    )
  }
}

export default PageTabs;