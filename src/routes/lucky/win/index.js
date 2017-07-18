import React, { Component } from 'react';
import { connect } from 'dva';
import { Tabs, Row, Col, Table } from 'antd';
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
    this.props.getWinListDetail({
      type: this.state.type,
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
    } = this.props;
    const { contentDetail, isLoading } = trend;
    return (
      <Row className={styles.detailTab}>
        <Col span={24}>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data} />
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

