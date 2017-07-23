import { Row, Col, Icon, Modal, message, Button } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import initReactFastclick from 'react-fastclick';
import CopyToClipboard from 'react-copy-to-clipboard';
import FootNav from '../../components/footMenu';
import { config } from '../../utils';

import styles from './index.less';

initReactFastclick();
const { sessionKey } = config;

class LuckyList extends Component {
  constructor() {
    super();
    const userName = sessionStorage.getItem(sessionKey.userName);
    this.state = {
      userName,
      value: '',
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
      value,
    } = this.state;
    const {
      balance,
      profit,
    } = lucky;
    return (
      <Col className={styles.contain}>
        <Row>
          <Col span={24} className={styles.containList}>
            <Col span={12}>
              <Icon style={{color: '#e95525'}} type="user" /> 名字
            </Col>
            <Col span={12} className={styles.listRight}>{userName}</Col>
          </Col>
          <Col span={24} className={styles.containList}>
            <Col span={12}>
              <Icon style={{color: '#e95525'}} type="user-add" /> 积分
            </Col>
            <Col span={12} className={styles.listRight}>{balance}</Col>
          </Col>
          <Col span={24} className={styles.containList}>
            <Col span={12}>
              <Icon style={{color: '#e95525'}} type="bank" /> 中奖总额
            </Col>
            <Col span={12} className={styles.listRight}>{profit}</Col>
          </Col>
          <Link to={'/balance'}>
            <Col span={24} className={styles.containList}>
              <Col span={12}>
                <Icon style={{color: '#e95525'}} type="star-o" /> 购彩记录
              </Col>
              <Col span={12} className={styles.listRight}>
                <Icon type="right" />
              </Col>
            </Col>
          </Link>
          <Link to={'/win'}>
            <Col span={24} className={styles.containList}>
              <Col span={12}>
                <Icon style={{color: '#e95525'}} type="trophy" /> 我的中奖
              </Col>
              <Col span={12} className={styles.listRight}>
                <Icon type="right" />
              </Col>
            </Col>
          </Link>
          <Col span={24} className={styles.containList} onClick={this.goIntent.bind(this)}>
            <Col span={12}>
              <Icon style={{color: '#e95525'}} type="pay-circle-o" /> 积分充值
            </Col>
            <Col span={12} className={styles.listRight}>{}</Col>
          </Col>
          <Link to={'/flow'}>
            <Col span={24} className={styles.containList}>
              <Col span={12}>
                <Icon style={{color: '#e95525'}} type="clock-circle-o" /> 充值记录
              </Col>
              <Col span={12} className={styles.listRight}>
                <Icon type="right" />
              </Col>
            </Col>
          </Link>
          <Col span={24} className={styles.exit}>
            <Button style={{width: '100%', background: '#e95525', color: '#fff'}} size="large" >退出登陆</Button>
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
