/* eslint-disable prefer-arrow-callback */
import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Carousel, Icon, Modal, message } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import FootNav from '../../components/footMenu';

import styles from './index.less';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      showTime: '00:00',
      visible: false,
    };
  }
  componentDidMount() {
    this.props.getBalance();
    const self = this;
    let ctrl = this.props.home.timerCtrl;
    if (ctrl) {
      ctrl = false;
      self.props.updateCtrl(ctrl);
      this.props.getOpenList(doNext);
      function doNext(data) {
        data.forEach(function (i) {
          i.overTime = (i.nextStopTime - new Date().getTime()) / 1000;
          let minute = `${Math.floor(i.overTime / 60)}`;
          if (minute.length === 1) {
            minute = `0${minute}`;
          }
          let sec = `${Math.floor(i.overTime % 60)}`;
          if (sec.length === 1) {
            sec = `0${sec}`;
          }
          i.showTime = `${minute}:${sec}`;
          if (i.overTime < 0) {
            i.showTime = '已结束';
          }
        });
        self.props.updateContent(data);
        clearInterval(timer);
        let flag = true;
        let timer = setInterval(() => {
          data.forEach(function (i) {
            i.overTime -= 1;
            let minute = `${Math.floor(i.overTime / 60)}`;
            if (minute.length === 1) {
              minute = `0${minute}`;
            }
            let sec = `${Math.floor(i.overTime % 60)}`;
            if (sec.length === 1) {
              sec = `0${sec}`;
            }
            i.showTime = `${minute}:${sec}`;
            if (i.overTime < 0) {
              i.showTime = '已结束';
            }
          });
          self.props.updateContent(data);
          if (flag) {
            flag = false;
            setTimeout(() => {
              self.props.getOpenList(doNext);
              setTimeout(() => {
                clearInterval(timer);
              }, 1000);
            }, 30000);
          }
        }, 1000);
      }
    }
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
  goIntent() {
    this.setState({
      visible: true,
    });
    this.props.getApply();
  }
  render() {
    const {
      menu,
      trend,
      lucky,
    } = this.props;
    const {
      content,
    } = trend;
    const {
      balance,
      value,
    } = lucky;
    const { menus, menuMap } = menu;
    const { showTime } = this.state;
    return (
      <Col style={{ height: '100%' }}>
        <Row>
          <Col xs={24} sm={0}>
            <Carousel autoplay>
              <Row>
                <img className={styles['head-logo']} style={{ width: '100%' }} src={require('../../assets/logo_phone1.jpg')} alt="" />
              </Row>
            </Carousel>
          </Col>
          <Col xs={0} sm={24}>
            <Carousel className={styles['head-logo-wrap']} autoplay>
              <Row>
                <img className={styles['head-logo']} src={require('../../assets/logo_PC1.jpg')} alt="" />
              </Row>
            </Carousel>
          </Col>
        </Row>
        <Row className={styles.pay} >
          <Col span={12} >
            <img className={styles['pay-img']} src={require('../../assets/balance.png')} alt="" />
            <span className={styles['pay-title']}>
              余额
            </span>
            <span className={styles['pay-value']}>
              {balance}
            </span>
          </Col>
          <Col span={6} offset={6} >
            <span className={styles['pay-btn']} onClick={this.goIntent.bind(this)}>
              充值
            </span>
          </Col>
        </Row>
        <Row className={styles.body}>
          {
            content.length ?
              content.map((item, index) => {
                return (
                  <Link to={`/${item.type}`} key={index}>
                    <Row className={styles.listContent}>
                      <Col xs={24} sm={24}>
                        <Col xs={3} sm={2} className={styles.smLeft}>
                          {
                            item.type === 'BJK3' ?
                              <img src={require('../../assets/BJK3.png')} alt="" />
                              :
                            item.type === 'BJPK10' ?
                              <img src={require('../../assets/BJPK10.png')} alt="" />
                              :
                              <img src={require('../../assets/CQSSC.png')} alt="" />
                          }
                        </Col>
                        <Col xs={8} sm={8} className={styles.title} >{item.title}</Col>
                        <Col xs={8} sm={9} offset={1} className={styles.smRight} >
                          <Col xs={24} sm={24}>
                            <Col
                              span={24}
                              className={styles.serialCode}
                            >第 {item.nextSerialCode} 期</Col>
                          </Col>
                          <Col xs={24} sm={24}>
                            <Col span={24} className={styles.openTime}>{item.showTime}</Col>
                          </Col>
                        </Col>
                        <Col span={1} offset={1} style={{ lineHeight: '50px', fontSize: '20px' }}>
                          <Icon type="right" />
                        </Col>
                      </Col>
                      <Col span={24}>
                        {
                          item.latestOpenCode ? item.latestOpenCode.split(',').map((i, index) => {
                            return (
                              <Col
                                span={2}
                                key={index}
                                className={`openCode openCode${item.type}${i}`}
                              >
                                {
                                  item.type === 'BJK3' ?
                                    ''
                                    :
                                    i
                                }
                              </Col>
                            );
                          }) : <Col xs={14} sm={24} className={styles.waitCode}>等待开奖...</Col>
                        }
                      </Col>
                    </Row>
                  </Link>
                );
              }) : ''
          }
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
              <br />
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
    getOpenList(payload) {
      dispatch({ type: 'trend/getOpenList', payload });
    },
    updateContent(payload) {
      dispatch({ type: 'trend/updateContent', payload });
    },
    updateCtrl(payload) {
      dispatch({ type: 'home/updateCtrl', payload });
    },
    getBalance() {
      dispatch({ type: 'lucky/getBalance' });
    },
    getApply() {
      dispatch({ type: 'lucky/getApply' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
