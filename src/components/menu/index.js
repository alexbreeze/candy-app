import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import './index.less';

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      current: '', // props.menues[0].key
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps() {

  }
  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }
  render() {
    const {
      menus,
      menuMap,
    } = this.props;
    return (
      <Menu
        theme="dark" mode="inline"
        defaultSelectedKeys={menuMap[location.pathname]}
      >
        { menus && menus.length ?
          menus.map((menu, index) => {
            return (
              <Menu.Item key={index} >
                <Link to={`/candyApp${menu.linkPage}`}>
                  <Icon type={menu.type} />
                  <span className="nav-text">{menu.title}</span>
                </Link>
              </Menu.Item>
            );
          })
          : ''
        }
      </Menu>
    );
  }
}
