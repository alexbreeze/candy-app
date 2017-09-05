import React from 'react';
import { connect } from 'dva';
import { Row, Col, Radio, message, Button } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import HeadMenu from '../../components/headMenu';
import styles from './index.less';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class PAY extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeName: 'alipay',
      name: '支付宝',
    };
  }
  componentDidMount() {
    this.props.getApply();
  }
  changeValue(ev) {
    const value = ev.target.value;
    let name = '';
    if (value === 'alipay') {
      name = '支付宝';
    } else {
      name = '微信';
    }
    this.setState({
      typeName: value,
      name,
    });
  }
  copy(){
    message.success('已复制到剪贴板');
  }
  render() {
    const {
      lucky,
    } = this.props;
    const {
      value,
    } = lucky;
    return (
      <Row>
        <Col xs={24} sm={0}>
          <HeadMenu title="账户充值" back="/home" />
        </Col>
        <Col span={24}>
          <Row className={styles.body}>
            <Col span={24}>
              <RadioGroup defaultValue="alipay" value={this.state.typeName} onChange={this.changeValue.bind(this)}>
                <RadioButton value="alipay">支付宝</RadioButton>
                <RadioButton value="wechat">微信</RadioButton>
              </RadioGroup>
            </Col>
            <Col span={12} offset={6} className={styles.listItem}>
              <img className={styles.imgItem} src={`http://113.10.244.91/qr/${this.state.typeName}.jpg`} alt="长按保存到本地" />
              <p>长按保存到本地</p>
            </Col>{/*
            <Col span={12} offset={6} className={styles.listItem}>
              <p>请您在{this.state.name}中扫描上方二维码进行充值，并在备注中填写您的支付码：
                <span className={styles.mainFont}>{value}</span>
              </p>
            </Col>*/}
            <Col span={12} offset={6} className={styles.listItem}>
              <p>在{this.state.name}中扫描上方的二维码转账充值，并在备注中填写您的游戏账号</p>
            </Col>{/*
            <Col span={24} className={styles.listItem}>
              <CopyToClipboard
                text={value}
                onCopy={this.copy.bind(this)}
              >
                <span className={styles.handleBtn} type="primary">复制支付码到剪贴板</span>
              </CopyToClipboard>
            </Col>*/}
            <Col span={24} className={styles.listItem}>
              {
                this.state.typeName === 'alipay' ?
                  <a rel="noopener noreferrer" target="_blank" href="https://ds.alipay.com/?from=mobileweb" className={styles.handleBtn}>点击打开支付宝</a>
                  :
                  <a rel="noopener noreferrer" target="_blank" href="javascript:window.location.href='weixin://'" className={styles.handleBtn}>点击打开微信</a>
              }
            </Col>
          </Row>
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
    getApply() {
      dispatch({ type: 'lucky/getApply' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PAY);
