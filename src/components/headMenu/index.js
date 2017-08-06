import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Row, Icon, Col, Select } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

const Option = Select.Option;

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
      showInfo,
      showPay,
      selTitle,
      changeSel,
    } = this.props;
    return (
      <Row className={styles['head-menu']}>
        <Col span={2} offset={1} className={styles.back} onClick={this.goBack.bind(this, back)}>
          <Icon type="arrow-left" />
        </Col>
        <Col span={18} className={styles.title}>
          {
            title || ''
          }
          {
            selTitle ?
              <Select defaultValue={selTitle[0].value} style={{ width: 120 }} onChange={changeSel}>
                {
                  selTitle.map((item, index) => {
                    return (
                      <Option value={item.value} key={index} >{item.value}</Option>
                    );
                  })
                }
              </Select> : ''
          }
        </Col>
        {
          showInfo
            ?
              <Link to={detail}>
                <Col span={3}>
                  <Icon type="question-circle-o" />
                </Col>
              </Link>
            :
            ''
        }
        {
          showPay
            ?
              <Col span={3} onClick={detail} style={{ fontSize: '16px' }} >
                <Icon type="red-envelope" />
              </Col>
            :
            ''
        }
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
