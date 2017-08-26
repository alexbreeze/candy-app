import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import HeadMenu from '../../../components/headMenu';
import styles from './index.less';
import '../../../iconfont/iconfont.css';

class BJK3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Row className={styles.BJK3}>
        <Col xs={24} sm={0}>
          <HeadMenu title="北京快3简介" back="/BJK3" />
        </Col>
        <Row className={styles.content}>
          <Col span={24}>
            {'1. 和值，猜中3个开奖号码的和，9-240元'}
          </Col>
          <Col span={24}>
            {'2. 三同号单选，猜中111，222，333，444，555，666任意一个就中奖，240元'}
          </Col>
          <Col span={24}>
            {'3. 三同号通选，111，222，333，444，555，666任意一个开出就中奖，40元'}
          </Col>
          <Col span={24}>
            {'4. 二同号单选，猜中两个相同的号，一个不同的号，顺序不限，就中奖，80元'}
          </Col>
          <Col span={24}>
            {'5. 二同号复选，猜中两个相同的号码就中奖，15元'}
          </Col>
          <Col span={24}>
            {'6. 三号不同，猜中开奖号码中各不相同的3个号码就中奖，40元'}
          </Col>
          <Col span={24}>
            {'7. 三连号通选，猜中123，234，345，456中任意一个就中奖，10元'}
          </Col>
          <Col span={24}>
            {'8. 二不同号，猜中开奖号码中不相同的两个号码就中奖，8元'}
          </Col>
        </Row>
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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BJK3);
