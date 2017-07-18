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
    // this.props.getBalanceDetail({
    //   type: this.state.type,
    //   pageSize: 10,
    // });
  }
  callback = (key) => {
    const pageSize = key === '0' ? 10 : key === '1' ? 50 : key === '2' ? 100 : 10;
    // this.props.getOpenListDetail({
    //   type: this.state.type,
    //   pageSize,
    // });
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
          mmmmm
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
    getBalanceDetail(data) {
      dispatch({ type: 'trend/getBalanceDetail', payload: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tab);

