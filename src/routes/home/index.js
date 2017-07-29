/* eslint-disable prefer-arrow-callback */
import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Carousel, Icon } from 'antd';
import FootNav from '../../components/footMenu';

import styles from './index.less';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      showTime: '00:00',
    };
  }
  componentDidMount() {
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
  render() {
    const {
      menu,
      trend,
    } = this.props;
    const {
      content,
    } = trend;
    const { menus, menuMap } = menu;
    const { showTime } = this.state;
    return (
      <Col style={{height: '100%'}}>
        <Row>
          <Col xs={24} sm={0}>
            <Carousel autoplay>
              <Row>
                <img className={styles['head-logo']} src={require('../../assets/logo_phone1.jpg')} alt="" />
              </Row>
            </Carousel>
          </Col>
          <Col xs={0} sm={24}>
            <Carousel autoplay>
              <Row>
                <img className={styles['head-logo']} src={require('../../assets/logo_PC1.jpg')} alt="" />
              </Row>
            </Carousel>
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
                        <Col xs={16} sm={17} offset={1} className={styles.smRight} >
                          <Col xs={24} sm={24}>
                            <Col xs={11} sm={10}>{item.title}</Col>
                            <Col
                              xs={13} sm={14}
                              className={styles.serialCode}
                            >第 {item.nextSerialCode} 期</Col>
                          </Col>
                          <Col xs={24} sm={24}>
                            <Col xs={18} sm={18}>
                              {
                                item.latestOpenCode ? item.latestOpenCode.split(',').map((item, index) => {
                                  return (
                                    <Col
                                      xs={2}
                                      sm={2}
                                      key={index}
                                      className={styles.openCode}
                                    >{item}</Col>
                                  );
                                }) : <Col xs={14} sm={24} className={styles.waitCode}>等待开奖...</Col>
                              }
                            </Col>
                            <Col xs={6} sm={6} className={styles.openTime}>{item.showTime}</Col>
                          </Col>
                        </Col>
                        <Col span={1} offset={1} style={{lineHeight: '50px', fontSize: '20px'}}>
                          <Icon type="right" />
                        </Col>
                      </Col>
                    </Row>
                  </Link>
                );
              }) : ''
          }
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
    getOpenList(payload) {
      dispatch({ type: 'trend/getOpenList', payload });
    },
    updateContent(payload) {
      dispatch({ type: 'trend/updateContent', payload });
    },
    updateCtrl(payload) {
      dispatch({ type: 'home/updateCtrl', payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
