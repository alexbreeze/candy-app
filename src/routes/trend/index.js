import { Row, Col, Card } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import FootNav from '../../components/footMenu';
import styles from './index.less';

class OpenList extends Component {
  componentDidMount() {
    this.props.getOpenList();
  }
  render() {
    const {
      menu,
      trend,
    } = this.props;
    const {
      content,
    } = trend;
    const {
      menus,
      menuMap,
    } = menu;
    return (
      <Col>
        {
          content.length ?
            content.map((item, index) => {
              return (
                <Link to={`/openListDetail:${item.type}`} key={index}>
                  <Row className={styles.listContent}>
                    <Col xs={24} sm={24}>
                      <Col xs={3} sm={2} className={styles.smLeft}>
                        {
                          item.type === 'BJK3' ?
                            <img src={require('../../assets/PC.png')} alt="" />
                            : <img src={require('../../assets/PK.png')} alt="" />
                        }
                      </Col>
                      <Col xs={20} sm={20} offset={1} className={styles.smRight} >
                        <Col xs={24} sm={24}>
                          <Col xs={11} sm={10}>{item.title}</Col>
                          <Col xs={13} sm={14} className={styles.serialCode}>第 {item.latestSerialCode} 期</Col>
                        </Col>
                        <Col xs={24} sm={24}>
                          <Col xs={18} sm={18}>
                            {
                              item.latestOpenCode ? item.latestOpenCode.split(',').map((item, index) => {
                                return (
                                  <Col
                                    xs={2}
                                    sm={2}
                                    key={index} className={styles.openCode}
                                  >{item}</Col>
                                );
                              }) : <Col xs={14} sm={24} className={styles.waitCode}>等待开奖...</Col>
                            }
                          </Col>
                          <Col xs={6} sm={6} className={styles.openTime}>{item.showTime}</Col>
                        </Col>
                      </Col>
                    </Col>
                  </Row>
                </Link>
              );
            }) : ''
        }
        <FootNav menus={menus} menuMap={menuMap} />
      </Col >
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
    getOpenList() {
      dispatch({ type: 'trend/getOpenList' });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OpenList);
