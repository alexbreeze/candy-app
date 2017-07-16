import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import FootNav from '../../components/footMenu';

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
      <Col>
            123123

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
