import React, { Component } from 'react';
import { connect } from 'dva';
import { Tabs, Row, Col, Table } from 'antd';
import styles from './index.less';
import HeadMenu from '../../../components/headMenu';

const { TabPane } = Tabs;

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    this.props.getMine({
      pageIndex: 0,
      win: 1,
      pageSize: 10000,
    });
  }
  changePage(data) { /*
   this.props.getMine({
   pageIndex: data.current,
   pageSize: 10000000,
   });*/
  }
  render() {
    const {
      trend,
      lucky,
    } = this.props;
    const { isLoading } = trend;
    const { balanceList } = lucky;
    const columns = [
      { title: '种类', dataIndex: 'category', key: 'category', width: 75 },
      { title: '期数', dataIndex: 'serialCode', key: 'serialCode', width: '' },
      { title: '中奖金额', dataIndex: 'winReward', key: 'winReward', width: 75 },
    ];
    return (
      <Row className={styles.detailTab}>
        <Col xs={24} sm={0}>
          <HeadMenu title="我的中奖记录" back="/lucky" showInfo={false} />
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={balanceList}
            pagination
            loading={isLoading}
            rowKey={(record, index) => index}
            onChange={this.changePage.bind(this)}
          />
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
    getMine(data) {
      dispatch({ type: 'lucky/getMine', payload: data });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tab);

