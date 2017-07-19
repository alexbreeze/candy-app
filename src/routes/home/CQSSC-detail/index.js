import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import HeadMenu from '../../../components/headMenu';
import styles from './index.less';
import '../../../iconfont/iconfont.css';

class CQSSC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <Row className={styles.CQSSC}>
                <Col xs={24} sm={0}>
                    <HeadMenu title="重庆时时彩简介" back="/CQSSC" />
                </Col>
                <Row className={styles.content}>
                    <Col span={24}>
                        {'1. 每期开出一个5位数字作为中奖号码，万，千，百，十，个位，每位号码0-9'}
                    </Col>
                    <Col span={24}>
                        {'2. 五星直选：选5个号码，与开奖号码完全相同且顺序一致，100000分'}
                    </Col>
                    <Col span={24}>
                        {'3. 五星通选：选5个号码，与开奖号码完全按位相符 20000分'}
                    </Col>
                    <Col span={24}>
                        {'4. 五星通选2：选5个号码，与开奖号码前三位或后三位按位相符 200分'}
                    </Col>
                    <Col span={24}>
                        {'5. 五星通选3：选5个号码，与开奖号码前二位或后二位按位相符 20分'}
                    </Col>
                    <Col span={24}>
                        {'6. 三星直选：选3个号码，与开奖号码连续后三位按位相符 1000分'}
                    </Col>
                    <Col span={24}>
                        {'7. 三星组六：选3个号码，投注号与开奖号后三位相同且为组六，顺序不限，组六：开奖号码后三位三个号码各不相同，如135，160分'}
                    </Col>
                    <Col span={24}>
                        {'8. 二星直选：选2个号码，与开奖号码连续后二位按位相符，100分'}
                    </Col>
                    <Col span={24}>
                        {'9. 二星组选：选2个号码，与开奖号码连续后二位相符，50分'}
                    </Col>
                    <Col span={24}>
                        {'10. 一星直选，选1个号码，与开奖号码个位相符，10分'}
                    </Col>
                    <Col span={24}>
                        {'11. 大小单双：与开奖号码后两位数字属性按位相符，4分'}
                    </Col>
                    <Col span={24}>
                        {'12. 总和单双：5个开奖号码数字总和为双，则双，单数则单'}
                    </Col>
                    <Col span={24}>
                        {'13. 总和大小：5个开奖号码数字总和 >= 23 为大，<= 22 为小'}
                    </Col>
                    <Col span={24}>
                        {'14. 龙，5个开奖号码的第一个号码 > 第五个号码，中龙奖，其他情况不中奖'}
                    </Col>
                    <Col span={24}>
                        {'15. 虎，5个开奖号码的第一个号码 < 第五个号码，中虎奖，其他情况不中奖'}
                    </Col>
                    <Col span={24}>
                        {'16. 和，5个开奖号码的第一个号码 = 第五个号码，中和奖'}
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

export default connect(mapStateToProps, mapDispatchToProps)(CQSSC);
