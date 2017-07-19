import React from 'react';
import { connect } from 'dva';
import HeadMenu from '../../../components/headMenu';
import { Row, Col } from 'antd';
import styles from './index.less';
import '../../../iconfont/iconfont.css';

class BJPK10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <Row className={styles.BJPK10}>
                <Col xs={24} sm={0}>
                    <HeadMenu title="北京PK10简介" back="/BJPK10" />
                </Col>
                <Row className={styles.content}>
                    <Col span={24}>
                        {'1. 大小单双：号码为双数叫双，号码为单数叫单，号码大于等于6为大，号码小于等于5位小'}
                    </Col>
                    <Col span={24}>
                        {'2. 冠　军 龙/虎：“第一名”车号大于“第十名”车号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。'}
                    </Col>
                    <Col span={24}>
                        {'3. 亚　军 龙/虎：“第二名”车号大于“第九名”车号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。'}
                    </Col>
                    <Col span={24}>
                        {'4. 第三名 龙/虎：“第三名”车号大于“第八名”车号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。'}
                    </Col>
                    <Col span={24}>
                        {'5. 第四名 龙/虎：“第四名”车号大于“第七名”车号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。'}
                    </Col>
                    <Col span={24}>
                        {'6. 第五名 龙/虎：“第五名”车号大于“第六名”车号视为【龙】中奖、反之小于视为【虎】中奖，其余情形视为不中奖。'}
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

export default connect(mapStateToProps, mapDispatchToProps)(BJPK10);
