import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import FootNav from '../../components/footMenu';
import { config } from '../../utils';

import styles from './index.less';

const { sessionKey } = config;

class LuckyList extends Component {
  constructor() {
    super();
    const userName = sessionStorage.getItem(sessionKey.userName);
    this.state = {
      userName,
    };
  }
  componentDidMount() {
    this.props.getBalance();
  }
  goIntent() {

  }
  render() {
    const {
        menu,
        lucky,
      } = this.props;
    const {
        menus,
      menuMap,
      } = menu;
    const {
      userName,
    } = this.state;
    const {
      balance,
      profit,
    } = lucky;
    return (
      <Col className={styles.contain}>
        <Row>
          <Col span={24} className={styles.containList}>
            <Col span={12}>名字</Col>
            <Col span={12} className={styles.listRight}>{userName}</Col>
          </Col>
          <Col span={24} className={styles.containList}>
            <Col span={12}>余额</Col>
            <Col span={12} className={styles.listRight}>{balance}</Col>
          </Col>
          <Col span={24} className={styles.containList}>
            <Col span={12}>中将总额</Col>
            <Col span={12} className={styles.listRight}>{profit}</Col>
          </Col>
          <Link to={'/balance'}>
            <Col span={24} className={styles.containList}>
              <Col span={12}>我的投注</Col>
              <Col span={12} className={styles.listRight}>出错了</Col>
            </Col>
          </Link>
          <Link to={'/win'}>
            <Col span={24} className={styles.containList}>
              <Col span={12}>我的中奖</Col>
              <Col span={12} className={styles.listRight}>出错了</Col>
            </Col>
          </Link>
          <Col span={24} className={styles.containList} onClick={this.goIntent.bind(this)}>
            <Col span={12}>积分充值</Col>
            <Col span={12} className={styles.listRight}>{}</Col>
          </Col>
        </Row>
        <FootNav menus={menus} menuMap={menuMap} />
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
    getBalance() {
      dispatch({ type: 'lucky/getBalance' });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LuckyList);
