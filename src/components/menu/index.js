import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
import './index.less';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      current: '', // props.menues[0].key
    };
  }

  componentDidMount() {
    let {
      menuMap,
    } = this.props;
    if (/trend/.test(location.hash)) {
      menuMap = ['1'];
    } else if (/home/.test(location.hash)) {
      menuMap = ['0'];
    } else if (/lucky/.test(location.hash)) {
      menuMap = ['2'];
    }
    this.props.updateMenuMap(menuMap);
  }
  render() {
    const {
      menus,
      menuMap,
    } = this.props;
    return (
      <Menu
        theme="dark" mode="inline"
        defaultSelectedKeys={menuMap}
        selectedKeys={menuMap}
      >
        { menus && menus.length ?
          menus.map((menu, index) => {
            return (
              <Menu.Item key={index} >
                <Link to={`${menu.linkPage}`}>
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
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateMenuMap(payload) {
      dispatch({ type: 'menu/updateMenuMap', payload });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
