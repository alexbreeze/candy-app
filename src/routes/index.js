import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import { config } from '../utils';
import styles from './index.less';
import Nav from '../components/menu';
import initReactFastclick from 'react-fastclick';

const { sessionKey } = config;
const { token } = sessionKey;

initReactFastclick();
class IndexPage extends Component {
  componentDidMount() {
    this.props.getMenuList();
    const isLogin = sessionStorage.getItem(token);
    if (!isLogin) {
      this.props.logOut();
    }
  }
  render() {
    const {
      children,
      menu,
    } = this.props;
    const { menus, menuMap } = menu;
    return (
      <Row className={styles.main}>
        <Col xs={0} sm={4} className={styles.main}>
          <Nav menus={menus} menuMap={menuMap} />
        </Col>
        <Col xs={24} sm={20} className={styles.main}>
          <Col span={24} className={styles.content}>
            {children}
          </Col>
        </Col>
      </Row>
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
    getMenuList() {
      dispatch({ type: 'menu/getMenuList', payload: null });
    },
    logOut() {
      dispatch({ type: 'login/logOut', payload: null });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
