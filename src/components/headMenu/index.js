import React, { Component } from 'react';
import { Link } from 'dva/router'
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
      detail,
    } = this.props;
    return (
      <Row className={styles['head-menu']}>
        <Col span={2} offset={1} className={styles.back} onClick={this.goBack.bind(this, back)}>
          <Icon type="arrow-left" />
        </Col>
        <Col span={18} className={styles.title}>{title}</Col>
        <Link to={detail}>
          <Col span={3}>
            <Icon type="question-circle-o" />
          </Col>
        </Link>
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
