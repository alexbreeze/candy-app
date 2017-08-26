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
      pageIndex: 0,
      pageSize: 20,
    };
  }
  componentDidMount() {
    const self = this;
    this.props.getFlow({
      pageIndex: self.state.pageIndex,
      pageSize: self.state.pageSize,
    });
    this.props.clearFlow();
  }
  changePage(data) { /*
   this.props.getMine({
   pageIndex: data.current,
   pageSize: 10000000,
   });*/
  }
  goNext() {
    const self = this;
    this.state.pageIndex++;
    this.setState({
      pageIndex: self.state.pageIndex,
    });
    this.props.getFlow({
      pageIndex: self.state.pageIndex,
      pageSize: self.state.pageSize,
    });
  }
  render() {
    const {
      trend,
      lucky,
    } = this.props;
    const { isLoading } = trend;
    const { flowList, flowText } = lucky;
    const columns = [
      {
        title: '操作',
        dataIndex: 'sourceType',
        key: 'sourceType',
        width: 75,
        render: (text, record) => {
            return (
              <div className="editable-row-operations">
                {
                  text === 'topUp'
                    ?
                    <span>
                      充值
                    </span>
                    :
                    <span>
                      提现
                    </span>
                }
              </div>
            );
        },
      },
      {
        title: '金额',
        dataIndex: 'delta',
        key: 'delta',
        render: (text, record) => {
          return (
            <div className="editable-row-operations">
              {
                text > 0 ?
                  <span style={{ color: 'green' }} >
                    {text}
                  </span> :
                  <span style={{ color: 'red' }}>
                    {Math.abs(text)}
                  </span>
              }
            </div>
          );
        },
      },
      { title: '时间', dataIndex: 'createTime', key: 'createTime', width: 150 },
    ];
    return (
      <Row className={styles.detailTab}>
        <Col xs={24} sm={0}>
          <HeadMenu title="充值记录" back="/lucky" showInfo={false} />
        </Col>
        <Col span={24} className={styles.content}>
          <Table
            columns={columns}
            dataSource={flowList}
            pagination={false}
            loading={isLoading}
            rowKey={(record, index) => index}
            onChange={this.changePage.bind(this)}
          />
          <Col span={24} className={styles.showMore}>
            <a onClick={this.goNext.bind(this)}>
              {flowText}
            </a>
          </Col>
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
    getFlow(data) {
      dispatch({ type: 'lucky/getFlow', payload: data });
    },
    clearFlow() {
      dispatch({ type: 'lucky/clearFlowList' });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tab);

