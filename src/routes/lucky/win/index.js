import React, { Component } from 'react';
import { connect } from 'dva';
import { Tabs, Row, Col, Table } from 'antd';
import styles from './index.less';

const { TabPane } = Tabs;

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
        title: '号码',
        key: '1'
      },
      {
        title: '期数',
        key: '2'
      }
      ,{
        title: '中奖号码',
        key: 'winNumber'
      }
      ,{
        title: '期数',
        key: '2'
      }]
    };
  }
  componentDidMount() {
    this.props.getWinListDetail({
      type: this.state.type,
      win: 0,
      pageIndex: 1,
      pageSize: 10,
    });
  }
  callback = (key) => {
    const pageSize = key === '0' ? 10 : key === '1' ? 50 : key === '2' ? 100 : 10;
    this.props.getWinListDetail({
      type: this.state.type,
      pageSize,
    });
  };
  render() {
    const {
      items,
      trend,
      winList
    } = this.props;
    const {columns}= this.state;
    const { contentDetail, isLoading } = trend;
    return (
      <Row className={styles.detailTab}>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={winList} />
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
    getWinListDetail(data) {
      dispatch({ type: 'lucky/getWinListDetail', payload: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tab);

