import React, { Component } from 'react';
import { Row, Icon, Col } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

class HeadMenu extends Component {
  constructor() {
    super();
    this.state = {
      current: '', // props.menues[0].key
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(props) {

  }
  goBack(back) {
    this.props.goBack(back);
  }
  render() {
    const {
      menus,
      title,
      back,
    } = this.props;
    return (
      <Row className={styles['head-menu']}>
        <Col span={2} offset={1} className={styles.back} onClick={this.goBack.bind(this, back)}>
          <Icon type="arrow-left" />
        </Col>
        <Col span={19} className={styles.title}>{title}</Col>
        <Col span={2}>
          <Icon type="question-circle-o" />
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
    goBack(back) {
      dispatch({ type: 'menu/back', payload: back });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeadMenu);
