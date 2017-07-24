import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import HeadMenu from '../../../components/headMenu';
import Tab from '../../../components/openListDetail';

import styles from './index.less';

// const TabPane = Tabs.TabPane;

class OpenListDetail extends Component {
  render() {
    const {
      items,
    } = this.props;
    return (
      <Row style={{height: '100%'}} >
        <Col xs={24} sm={0}>
          <HeadMenu title="详情" back="/trend" />
        </Col>
        <Col span={24} className={styles.content} >
          <Tab items={items} />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    items: [
      {
        title: '今日',
        id: '0',
        content: [],
      },
      {
        title: '近五十期',
        id: '1',
        content: [],
      },
      {
        title: '近一百期',
        id: '2',
        content: [],
      },
    ],
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenListDetail);
