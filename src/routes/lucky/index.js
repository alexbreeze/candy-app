import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import FootNav from '../../components/footMenu';
import styles from './index.less';

class LuckyList extends Component {
  render() {
    const {
        menu,
      } = this.props;
    const {
        menus,
      menuMap,
      } = menu;
    return (
      <Col className={styles.contain}>
        <Row>
          <Col span={24} className={styles.containList}>
            <Col span={12}>名字</Col>
            <Col span={12} className={styles.listRight}>kk</Col>
          </Col>
          <Col span={24} className={styles.containList}>
            <Col span={12}>余额</Col>
            <Col span={12} className={styles.listRight}>kk</Col>
          </Col>
          <Col span={24} className={styles.containList}>
            <Col span={12}>我的投注</Col>
            <Col span={12} className={styles.listRight}>kk</Col>
          </Col>
          <Col span={24} className={styles.containList}>
            <Link to={'/balance'}>
              <Col span={12}>我的中奖</Col>
              <Col span={12} className={styles.listRight}>kk</Col>
            </Link>
          </Col>
          <Col span={24} className={styles.containList}>
            <Col span={12}>积分充值</Col>
            <Col span={12} className={styles.listRight}>kk</Col>
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
const mapDispatchToProps = () => {
  return {
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LuckyList);
