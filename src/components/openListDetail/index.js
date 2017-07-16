import React, { Component } from 'react';
import { connect } from 'dva';
import { Tabs, Row, Col } from 'antd';
import styles from './index.less';

const { TabPane } = Tabs;

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: location.pathname.split(':')[1],
    };
  }
  componentDidMount() {
    this.props.getOpenListDetail({
      type: this.state.type,
      pageSize: 10,
    });
  }
  callback = (key) => {
    const pageSize = key === '0' ? 10 : key === '1' ? 50 : key === '2' ? 100 : 10;
    this.props.getOpenListDetail({
      type: this.state.type,
      pageSize,
    });
  };
  render() {
    const {
      items,
      trend,
    } = this.props;
    const { contentDetail, isLoading } = trend;
    return (
      <Row className={styles.detailTab}>
        <Col span={24}>
          <Tabs defaultActiveKey="0" onChange={this.callback} renderTabBar="" renderTabContent="">
            {
              items.length ?
                items.map((item, index) => {
                  return (
                    <TabPane tab={item.title} key={index}>
                      <Col xs={24} sm={24} className={styles.content}>
                        <Col xs={5} sm={8} className={styles.left}>期号</Col>
                        <Col xs={13} sm={8} className={styles.middle}>开奖号码</Col>
                        <Col xs={4} sm={8} className={styles.right}>是否中奖</Col>
                      </Col>
                      {
                        contentDetail.length ? contentDetail.map((item, index) => {
                          return (
                            <Row key={index}>
                              <Col xs={24} sm={24} className={styles.content}>
                                <Col xs={5} sm={8} className={styles.left}>{item.serialCode}</Col>
                                <Col xs={13} sm={8} className={styles.middle}>
                                  {
                                    (item.type === 'BJPK10') ?
                                    item.openCodeList.map((item, index) => {
                                      return (
                                        <Col xs={8} sm={8} key={index} className={`${styles.bjpkCode} ${styles[`index${item}`]}`}>{item}</Col>
                                      );
                                    }) :
                                      item.openCodeList.map((item, index) => {
                                        return (
                                          <Col xs={8} sm={8} key={index} className={`${styles.code} ${styles.index}`}>{item}</Col>
                                        );
                                      })
                                  }
                                </Col>
                                <Col xs={4} sm={8} className={styles.right}>{item.userReward > 0 ? '已中奖' : '未中奖'}</Col>
                              </Col>
                            </Row>
                          );
                        }) : ''
                      }
                    </TabPane>
                  );
                }) : ''
            }
          </Tabs>
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
    getOpenListDetail(data) {
      dispatch({ type: 'trend/getOpenListDetail', payload: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tab);

