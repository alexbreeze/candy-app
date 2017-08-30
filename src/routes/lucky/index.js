import { Row, Col, Icon, Modal, message, Button } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import CopyToClipboard from 'react-copy-to-clipboard';
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
      visible: false,
    };
  }
  componentDidMount() {
    this.props.getBalance();
  }
  goIntent() {
    this.setState({
      visible: true,
    });
    this.props.getApply();
  }
  handleOk() {
    this.setState({
      visible: false,
    });
    this.props.getBalance();
  }
  handleCancel() {
    this.setState({
      visible: false,
    });
  }
  copy() {
    message.success('已复制到剪贴板');
  }
  logoOut() {
    this.props.logOut();
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
      value,
    } = lucky;
    return (
      <Col className={styles.contain}>
        <Row>
          <Col span={24} className={styles.containUser}>
            <Col span={12}>
              <span className={styles.userIcon}>
                <img src={require('../../assets/user.png')} alt="默认头像" />
              </span>
              <span className={styles.userName}>
                {userName}
              </span>
            </Col>
          </Col>
          <Col span={24} className={styles.containGrade}>
            <Col span={12} className={styles['grade-left']}>
              <Col span={24}>
                余额
              </Col>
              <Col span={24}>
                {balance}
              </Col>
            </Col>
            <Col span={12} className={styles['grade-right']}>
              <Col span={24}>
                中奖总额
              </Col>
              <Col span={24}>
                {profit}
              </Col>
            </Col>
          </Col>
          <Col className={styles.containHandle} span={24}>
            <Col span={12} onClick={this.goIntent.bind(this)}>
              <img src={require('../../assets/payin.png')} alt="图片" className={styles['handle-img']} />
              <span>充值</span>
            </Col>
            <Col span={12}>
              <Link to={'/approve'}>
                <img src={require('../../assets/payout.png')} alt="图片" className={styles['handle-img']} />
                <span>提现</span>
              </Link>
            </Col>
          </Col>
          <Link to={'/balance'}>
            <Col span={24} className={styles.containList}>
              <Col span={12}>
                <Icon style={{ color: '#e95525' }} type="star-o" /> 购彩记录
              </Col>
              <Col span={12} className={styles.listRight}>
                <Icon type="right" />
              </Col>
            </Col>
          </Link>
          <Link to={'/win'}>
            <Col span={24} className={styles.containList}>
              <Col span={12}>
                <Icon style={{ color: '#e95525' }} type="trophy" /> 中奖纪录
              </Col>
              <Col span={12} className={styles.listRight}>
                <Icon type="right" />
              </Col>
            </Col>
          </Link>
          <Link to={'/flow'}>
            <Col span={24} className={styles.containList}>
              <Col span={12}>
                <Icon style={{ color: '#e95525' }} type="clock-circle-o" /> 充值记录
              </Col>
              <Col span={12} className={styles.listRight}>
                <Icon type="right" />
              </Col>
            </Col>
          </Link>
          <Col span={24} className={styles.exit}>
            <Button style={{ width: '100%', background: '#e95525', color: '#fff' }} onClick={this.logoOut.bind(this)} size="large" >退出登录</Button>
          </Col>
        </Row>
        <Modal
          title="充值"
          visible={this.state.visible}
          onOk={this.handleOk.bind(this)}
          okText={'充值完成'}
          onCancel={this.handleCancel.bind(this)}
          cancelText={'取消充值'}
        >
          <Row>
            <Col span={6} className={styles.img}>
              <a href={require('../../assets/alipay.jpg')} download={require('../../assets/yay.jpg')}>
                <img className={styles.imgItem} src={require('../../assets/alipay.jpg')} alt="长按保存到本地" />
              </a>
              <a href={require('../../assets/wechat.jpg')} download={require('../../assets/yay.jpg')}>
                <img className={styles.imgItem} src={require('../../assets/wechat.jpg')} alt="长按保存到本地" />
              </a>
            </Col>
            <Col span={15} offset={3}>
              <p>点击图片保存到相册</p>
              <br />
              <CopyToClipboard
                text={value}
                onCopy={this.copy.bind(this)}
              >
                <p>您当前的支付码为{value}，请在支付宝或微信支付时将其填写到备注, 点击复制此支付码</p>
              </CopyToClipboard>
              <br />
              <p>
                <a rel="noopener noreferrer" target="_blank" href="https://ds.alipay.com/?from=mobileweb">点击打开支付宝</a>
              </p>
              <p>
                <a rel="noopener noreferrer" target="_blank" href="javascript:window.location.href='weixin://'">点击打开微信</a>
              </p>
            </Col>
          </Row>
        </Modal>
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
    getApply() {
      dispatch({ type: 'lucky/getApply' });
    },
    logOut() {
      dispatch({ type: 'login/logOut' });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LuckyList);
