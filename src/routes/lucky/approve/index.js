import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Modal, Input, message } from 'antd';
import styles from './index.less';
import HeadMenu from '../../../components/headMenu';

const { TextArea } = Input;

class Approve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      value: '',
      note: '',
    };
  }
  componentDidMount() {
    this.props.getApprove();
  }
  showPay() {
    this.setState({
      visible: true,
    });
  }
  handleOk() {
    const self = this;
    this.props.applyApprove({
      data: {
        amount: this.state.value,
        note: this.state.note,
      },
      cb() {
        message.success('申请成功，等待后台审核');
        self.setState({
          visible: false,
        });
        self.props.getApprove();
      },
    });
  }
  handleCancel() {
    this.setState({
      visible: false,
    });
  }
  changeNum(ev) {
    const { value } = ev.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.setState({
        value,
      });
    }
  }
  changeNote(ev) {
    const { value } = ev.target;
    this.setState({
      note: value,
    });
  }
  render() {
    const {
      lucky,
    } = this.props;
    const { approve } = lucky;
    return (
      <Row className={styles.detailTab}>
        <Col xs={24} sm={0}>
          <HeadMenu title="提现" back="/lucky" detail={this.showPay.bind(this)} showPay />
        </Col>
        <Col xs={0} sm={24} className={styles.pay} onClick={this.showPay.bind(this)} >
          +
        </Col>
        <Col span={24} className={styles.content}>
          {
            approve.length
            ?
              approve.map((item, index) => {
                return (
                  <Row key={index} className={styles['item-wrap']} >
                    <Col span={24} className={styles['item-head']} >
                      <Col span={12} className={styles['item-amount']} >
                        {item.amount}
                      </Col>
                      <Col span={12} className={styles['item-state']} >
                        {
                          item.state === 0 ?
                            <span style={{ color: '#49a9ee' }} >{'申请中'}</span>
                            :
                            item.state === 1 ?
                              <span style={{ color: 'gray' }} >{'已取消'}</span>
                              :
                              item.state === 2 ?
                                <span style={{ color: 'red' }} >{'积分不足'}</span>
                                :
                                item.state === 3 ?
                                  <span style={{ color: 'green' }} >{'成功'}</span>
                                  :
                                  ''
                        }
                      </Col>
                    </Col>
                    <Col span={24} className={styles['item-note']} >
                      {item.note}
                    </Col>
                    <Col span={24} className={styles['item-time']} >
                      {item.updateTimeStr}
                    </Col>
                  </Row>
                );
              })
              :
              ''
          }
        </Col>
        <Modal
          title="充值"
          visible={this.state.visible}
          onOk={this.handleOk.bind(this)}
          okText={'申请'}
          onCancel={this.handleCancel.bind(this)}
          cancelText={'取消'}
        >
          <Row>
            <Col span={24} className={styles['modal-num']} >
              <Input
                onChange={this.changeNum.bind(this)}
                placeholder="请输入分数"
                maxLength="25"
                value={this.state.value}
              />
            </Col>
            <Col span={24} className={styles['modal-note']} >
              <TextArea
                onChange={this.changeNote.bind(this)}
                value={this.state.note}
                rows={4}
                placeholder="请备注好收款银行卡账户开户行或微信号/支付宝账号"
              />
            </Col>
          </Row>
        </Modal>
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
    getApprove(data) {
      dispatch({ type: 'lucky/getApprove', payload: data });
    },
    applyApprove(payload) {
      dispatch({ type: 'lucky/applyApprove', payload });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Approve);

