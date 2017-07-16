import React, { Component } from 'react';
import { connect } from 'dva';
import { Tabs, Row, Col } from 'antd';

import './index.less';

const { TabPane } = Tabs;

class ProductList extends Component {
  componentDidMount() {
    this.props.getOpenListDetail({
      type: this.state.type,
      pageSize: 10,
    });
  }
  render() {
    const {
      productList,
    } = this.props;
    return (
      <Row>
        <Col>123</Col>
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
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

