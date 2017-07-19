import React, { Component } from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
import styles from './index.less';

class FootNav extends Component {
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

  componentWillReceiveProps(props) {

  }
  changeSel(item) {
    const {
      menuMap,
    } = this.props;
    menuMap.pop();
    menuMap.push(item.key);
    this.setState({
      menuMap,
    });
  }
  render() {
    const {
      menus,
      menuMap,
    } = this.props;
    return (
      <Col className={styles.foot} xs={24} sm={0}>
        <Row className={styles['foot-text']}>
          <Menu
            theme="dark"
            defaultSelectedKeys={menuMap}
            selectedKeys={menuMap}
            mode="horizontal"
            onSelect={this.changeSel.bind(this)}
          >
            { menus && menus.length ?
              menus.map((menu, index) => {
                return (
                  <Menu.Item key={index} className={styles['foot-menu']}>
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
        </Row>
      </Col>
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
export default connect(mapStateToProps, mapDispatchToProps)(FootNav);
