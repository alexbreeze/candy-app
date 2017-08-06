import { Row, Col, Card, Icon } from 'antd';
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
                            <img src={require('../../assets/BJK3.png')} alt="" />
                            :
                            item.type === 'BJPK10' ?
                              <img src={require('../../assets/BJPK10.png')} alt="" />
                              :
                              <img src={require('../../assets/CQSSC.png')} alt="" />
                        }
                      </Col>
                      <Col xs={18} sm={18} offset={1} className={styles.smRight} >
                        <Col xs={24} sm={24}>
                          <Col xs={11} sm={10}>{item.title}</Col>
                        </Col>
                      </Col>
                      <Col span={1} offset={1} style={{ lineHeight: '35px' }}>
                        <Icon type="right" />
                      </Col>
                    </Col>
                    <Col span={24}>
                      {
                        item.latestOpenCode ? item.latestOpenCode.split(',').map((i, index) => {
                          return (
                            <Col
                              xs={2}
                              sm={2}
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
                        }) : ''
                      }
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
