import React, { Component } from 'react';
import { connect } from 'dva';
import { Tabs, Row, Col } from 'antd';
import styles from './index.less';

const { TabPane } = Tabs;

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: location.hash.split(':')[1].split('?')[0],
    };
  }
  componentDidMount() {
    this.props.getOpenListDetail({
      type: this.state.type,
      pageSize: 10,
    });
  }
  /* bak
   {
   (item.type === 'BJPK10') ?
   item.openCodeList.map((item, index) => {
   return (
   <Col xs={8} sm={8} key={index} className={`${styles.bjpkCode} ${styles[`index${item}`]}`}>
   {item}
   </Col>
   );
   }) :
   item.openCodeList.map((item, index) => {
   return (
   <Col xs={8} sm={8} key={index} className={`${styles.code} ${styles.index}`}>{item}</Col>
   );
   })
   }
   */
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
                      {
                        contentDetail.length ? contentDetail.map((item, itemIndex) => {
                          return (
                            <Row key={itemIndex}>
                              <Col xs={24} sm={24} className={styles.content}>
                                <Col span={24} className={styles.head}>
                                  <Col span={6} className={styles.title}>{item.type === 'BJK3' ? '北京快三' : item.type === 'BJPK10' ? '北京PK拾' : '重庆时时彩'}</Col>
                                  <Col span={16} offset={2} className={styles.info} >第{item.serialCode}期{item.openTime}</Col>
                                </Col>
                                <Col span={24} className={styles.body}>
                                  {
                                    item.openCodeList.map((i, index) => {
                                      return (
                                        <span key={index} className={`openCode openCode${item.type}${i}`} >
                                          {
                                            item.type === 'BJK3' ?
                                              ''
                                              :
                                              i
                                          }
                                        </span>
                                      );
                                    })
                                  }
                                </Col>
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

