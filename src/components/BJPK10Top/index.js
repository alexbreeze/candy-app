import React, { Component } from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
import styles from './index.less';

class BJK3TOP extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
      this.props.getOpenListDetail({
        type: 'BJPK10',
        pageSize: 10,
      });
  }
  componentWillReceiveProps(props) {

  }
  render() {
    const {
      items,
      trend,
      isShow,
    } = this.props;
    const { contentDetail, isLoading } = trend;
    return (
      <Row className={isShow ? styles.show: styles.hide}>
        <Col span={24} className={styles.title}>
          <Col span={12}>期号</Col>
          <Col span={12}>开奖号码</Col>
        </Col>
        <Row>
          {
            contentDetail.map((item, index) => {
              return (
                <Col span={24} key={index} className={styles.content}>
                  <Col span={12}>{item.serialCode}</Col>
                  <Col span={12}>{item.openCode}</Col>
                </Col>
              )
            })
          }
        </Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(BJK3TOP);
