import React from 'react';
import { connect } from 'dva';
import { Row, Col, Tabs, Button, Carousel, InputNumber, Modal, Table, Icon, message } from 'antd';
import initReactFastclick from 'react-fastclick';
import HeadMenu from '../../../components/headMenu';
import BJK3TOP from '../../../components/BJK3Top';
import styles from './index.less';
import '../../../iconfont/iconfont.css';

const { TabPane } = Tabs;
initReactFastclick();

class BJK3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalList: [
        {
          id: 'sel3',
          displayName: '和3',
          type: '和',
          rate: 120,
          value: 3,
          checked: false,
        },
        {
          id: 'sel4',
          displayName: '和4',
          type: '和',
          rate: 120,
          value: 4,
          checked: false,
        },
        {
          id: 'sel5',
          displayName: '和5',
          type: '和',
          rate: 120,
          value: 5,
          checked: false,
        },
        {
          id: 'sel6',
          displayName: '和6',
          type: '和',
          rate: 120,
          value: 6,
          checked: false,
        },
        {
          id: 'sel7',
          displayName: '和7',
          type: '和',
          rate: 120,
          value: 7,
          checked: false,
        },
        {
          id: 'sel8',
          displayName: '和8',
          type: '和',
          rate: 120,
          value: 8,
          checked: false,
        },
        {
          id: 'sel9',
          displayName: '和9',
          type: '和',
          rate: 120,
          value: 9,
          checked: false,
        },
        {
          id: 'sel10',
          displayName: '和10',
          type: '和',
          rate: 120,
          value: 10,
          checked: false,
        },
        {
          id: 'sel11',
          displayName: '和11',
          type: '和',
          rate: 120,
          value: 11,
          checked: false,
        },
        {
          id: 'sel12',
          displayName: '和12',
          type: '和',
          rate: 120,
          value: 12,
          checked: false,
        },
        {
          id: 'sel13',
          displayName: '和13',
          type: '和',
          rate: 120,
          value: 13,
          checked: false,
        },
        {
          id: 'sel14',
          displayName: '和14',
          type: '和',
          rate: 120,
          value: 14,
          checked: false,
        },
        {
          id: 'sel15',
          displayName: '和15',
          type: '和',
          rate: 120,
          value: 15,
          checked: false,
        },
        {
          id: 'sel16',
          displayName: '和16',
          type: '和',
          rate: 120,
          value: 16,
          checked: false,
        },
        {
          id: 'sel17',
          displayName: '和17',
          type: '和',
          rate: 120,
          value: 17,
          checked: false,
        },
        {
          id: 'sel18',
          displayName: '和18',
          type: '和',
          rate: 120,
          value: 18,
          checked: false,
        },
      ],
      handleList: {
        selBig: false,
        selSmall: false,
        selOdd: false,
        selEven: false,
        sellAll: false,
      },
      threeSame: [
        {
          id: 'selTS1',
          displayName: '三同号单选',
          type: '三同号单选',
          value: '111',
          checked: false,
        },
        {
          id: 'selTS2',
          displayName: '三同号单选',
          type: '三同号单选',
          value: '222',
          checked: false,
        },
        {
          id: 'selTS3',
          displayName: '三同号单选',
          type: '三同号单选',
          value: '333',
          checked: false,
        },
        {
          id: 'selTS4',
          displayName: '三同号单选',
          type: '三同号单选',
          value: '444',
          checked: false,
        },
        {
          id: 'selTS5',
          displayName: '三同号单选',
          type: '三同号单选',
          value: '555',
          checked: false,
        },
        {
          id: 'selTS6',
          displayName: '三同号单选',
          type: '三同号单选',
          value: '666',
          checked: false,
        },
      ],
      threeSameAll: [
        {
          id: 'selTSA1',
          displayName: '三同号通选',
          type: '三同号通选',
          value: '111 222 333 444 555 666',
          checked: false,
        },
      ],
      twoSame: [
        {
          id: 'selSec1',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '112',
          checked: false,
        },
        {
          id: 'selSec2',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '113',
          checked: false,
        },
        {
          id: 'selSec3',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '114',
          checked: false,
        },
        {
          id: 'selSec4',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '115',
          checked: false,
        },
        {
          id: 'selSec5',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '116',
          checked: false,
        },
        {
          id: 'selSec6',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '221',
          checked: false,
        },
        {
          id: 'selSec7',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '223',
          checked: false,
        },
        {
          id: 'selSec8',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '224',
          checked: false,
        },
        {
          id: 'selSec9',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '225',
          checked: false,
        },
        {
          id: 'selSec10',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '226',
          checked: false,
        },
        {
          id: 'selSec11',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '331',
          checked: false,
        },
        {
          id: 'selSec12',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '332',
          checked: false,
        },
        {
          id: 'selSec13',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '334',
          checked: false,
        },
        {
          id: 'selSec14',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '335',
          checked: false,
        },
        {
          id: 'selSec15',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '336',
          checked: false,
        },
        {
          id: 'selSec16',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '441',
          checked: false,
        },
        {
          id: 'selSec17',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '442',
          checked: false,
        },
        {
          id: 'selSec18',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '443',
          checked: false,
        },
        {
          id: 'selSec19',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '445',
          checked: false,
        },
        {
          id: 'selSec20',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '446',
          checked: false,
        },
        {
          id: 'selSec21',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '551',
          checked: false,
        },
        {
          id: 'selSec22',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '552',
          checked: false,
        },
        {
          id: 'selSec23',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '553',
          checked: false,
        },
        {
          id: 'selSec24',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '554',
          checked: false,
        },
        {
          id: 'selSec25',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '556',
          checked: false,
        },
        {
          id: 'selSec26',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '661',
          checked: false,
        },
        {
          id: 'selSec27',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '662',
          checked: false,
        },
        {
          id: 'selSec28',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '663',
          checked: false,
        },
        {
          id: 'selSec29',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '664',
          checked: false,
        },
        {
          id: 'selSec30',
          displayName: '二同号单选',
          type: '二同号单选',
          value: '665',
          checked: false,
        },
      ],
      twoSameAll: [
        {
          id: 'selSecA1',
          displayName: '二同号复选',
          type: '二同号复选',
          value: '11*',
          checked: false,
        },
        {
          id: 'selSecA2',
          displayName: '二同号复选',
          type: '二同号复选',
          value: '22*',
          checked: false,
        },
        {
          id: 'selSecA3',
          displayName: '二同号复选',
          type: '二同号复选',
          value: '33*',
          checked: false,
        },
        {
          id: 'selSecA4',
          displayName: '二同号复选',
          type: '二同号复选',
          value: '44*',
          checked: false,
        },
        {
          id: 'selSecA5',
          displayName: '二同号复选',
          type: '二同号复选',
          value: '55*',
          checked: false,
        },
        {
          id: 'selSecA6',
          displayName: '二同号复选',
          type: '二同号复选',
          value: '66*',
          checked: false,
        },
      ],
      threeDif: [
        {
          id: 'selTd1',
          displayName: '三不同号',
          type: '三不同号',
          value: '123',
          checked: false,
        },
        {
          id: 'selTd2',
          displayName: '三不同号',
          type: '三不同号',
          value: '124',
          checked: false,
        },
        {
          id: 'selTd3',
          displayName: '三不同号',
          type: '三不同号',
          value: '125',
          checked: false,
        },
        {
          id: 'selTd4',
          displayName: '三不同号',
          type: '三不同号',
          value: '126',
          checked: false,
        },
        {
          id: 'selTd5',
          displayName: '三不同号',
          type: '三不同号',
          value: '134',
          checked: false,
        },
        {
          id: 'selTd6',
          displayName: '三不同号',
          type: '三不同号',
          value: '135',
          checked: false,
        },
        {
          id: 'selTd7',
          displayName: '三不同号',
          type: '三不同号',
          value: '136',
          checked: false,
        },
        {
          id: 'selTd8',
          displayName: '三不同号',
          type: '三不同号',
          value: '145',
          checked: false,
        },
        {
          id: 'selTd9',
          displayName: '三不同号',
          type: '三不同号',
          value: '146',
          checked: false,
        },
        {
          id: 'selTd10',
          displayName: '三不同号',
          type: '三不同号',
          value: '156',
          checked: false,
        },
        {
          id: 'selTd11',
          displayName: '三不同号',
          type: '三不同号',
          value: '234',
          checked: false,
        },
        {
          id: 'selTd12',
          displayName: '三不同号',
          type: '三不同号',
          value: '235',
          checked: false,
        },
        {
          id: 'selTd13',
          displayName: '三不同号',
          type: '三不同号',
          value: '236',
          checked: false,
        },
        {
          id: 'selTd14',
          displayName: '三不同号',
          type: '三不同号',
          value: '245',
          checked: false,
        },
        {
          id: 'selTd15',
          displayName: '三不同号',
          type: '三不同号',
          value: '246',
          checked: false,
        },
        {
          id: 'selTd16',
          displayName: '三不同号',
          type: '三不同号',
          value: '256',
          checked: false,
        },
        {
          id: 'selTd17',
          displayName: '三不同号',
          type: '三不同号',
          value: '345',
          checked: false,
        },
        {
          id: 'selTd18',
          displayName: '三不同号',
          type: '三不同号',
          value: '346',
          checked: false,
        },
        {
          id: 'selTd19',
          displayName: '三不同号',
          type: '三不同号',
          value: '356',
          checked: false,
        },
        {
          id: 'selTd20',
          displayName: '三不同号',
          type: '三不同号',
          value: '456',
          checked: false,
        },
      ],
      threeDifAll: [
        {
          id: 'selTdA1',
          displayName: '三连号通选',
          type: '三连号通选',
          value: '123 234 345 456',
          checked: false,
        },
      ],
      twoDif: [
        {
          id: 'selSecTd1',
          displayName: '二不同号',
          type: '二不同号',
          value: '12',
          checked: false,
        },
        {
          id: 'selSecTd2',
          displayName: '二不同号',
          type: '二不同号',
          value: '13',
          checked: false,
        },
        {
          id: 'selSecTd3',
          displayName: '二不同号',
          type: '二不同号',
          value: '14',
          checked: false,
        },
        {
          id: 'selSecTd4',
          displayName: '二不同号',
          type: '二不同号',
          value: '15',
          checked: false,
        },
        {
          id: 'selSecTd5',
          displayName: '二不同号',
          type: '二不同号',
          value: '16',
          checked: false,
        },
        {
          id: 'selSecTd6',
          displayName: '二不同号',
          type: '二不同号',
          value: '23',
          checked: false,
        },
        {
          id: 'selSecTd7',
          displayName: '二不同号',
          type: '二不同号',
          value: '24',
          checked: false,
        },
        {
          id: 'selSecTd8',
          displayName: '二不同号',
          type: '二不同号',
          value: '25',
          checked: false,
        },
        {
          id: 'selSecTd9',
          displayName: '二不同号',
          type: '二不同号',
          value: '26',
          checked: false,
        },
        {
          id: 'selSecTd10',
          displayName: '二不同号',
          type: '二不同号',
          value: '34',
          checked: false,
        },
        {
          id: 'selSecTd11',
          displayName: '二不同号',
          type: '二不同号',
          value: '35',
          checked: false,
        },
        {
          id: 'selSecTd12',
          displayName: '二不同号',
          type: '二不同号',
          value: '36',
          checked: false,
        },
        {
          id: 'selSecTd13',
          displayName: '二不同号',
          type: '二不同号',
          value: '45',
          checked: false,
        },
        {
          id: 'selSecTd14',
          displayName: '二不同号',
          type: '二不同号',
          value: '46',
          checked: false,
        },
        {
          id: 'selSecTd15',
          displayName: '二不同号',
          type: '二不同号',
          value: '56',
          checked: false,
        },
      ],
      visible: false,
      isShow: false,
      showTime: '00:00',
    };
  }
  componentDidMount() {
    const self = this;
    this.props.getOpenList();
    this.props.getRate({
      data: {
        type: 'BJK3',
      },
      cb(data) {
        const state = self.state;
        for (const i in data) {
          addRate(state.totalList, i, data[i]);
          addRate(state.threeSame, i, data[i]);
          addRate(state.threeSameAll, i, data[i]);
          addRate(state.twoSame, i, data[i]);
          addRate(state.twoSameAll, i, data[i]);
          addRate(state.threeDif, i, data[i]);
          addRate(state.threeDifAll, i, data[i]);
          addRate(state.twoDif, i, data[i]);
        }
        self.setState({
          state,
        });
      },
    });
    function addRate(arr, name, value) {
      arr.forEach((item) => {
        if (item.displayName === name) {
          item.rate = value;
        }
      });
    }
  }
  // 计算数量
  staticCount() {
    const {
      threeDif,
      threeDifAll,
      threeSame,
      threeSameAll,
      totalList,
      twoDif,
      twoSame,
      twoSameAll,
    } = this.state;
    const tempList = [];
    let count = 0;
    calcCount(threeDif);
    calcCount(threeDifAll);
    calcCount(threeSame);
    calcCount(threeSameAll);
    calcCount(totalList);
    calcCount(twoDif);
    calcCount(twoSame);
    calcCount(twoSameAll);
    this.props.clearBJK3();
    function calcCount(list) {
      list.forEach((i) => {
        if (i.checked) {
          tempList.push({
            index: count,
            type: i.type,
            code: i.type === '和' ? i.value : i.value.split('').join(','),
          });
          count += 1;
        }
      });
    }
    this.props.updateBJK3(tempList);
  }
  // 改变状态
  changeChecked(list, ev) {
    list.forEach((i) => {
      if (i.id === ev.target.id) {
        i.checked = !i.checked;
      }
    });
    setTimeout(() => {
      this.setState(
        list,
      );
    }, 20);
    this.staticCount.call(this);
  }
  // 快速选择
  filChecked(ev) {
    const id = ev.target.id;
    const handleList = this.state.handleList;
    handleList[id] = !handleList[id];
    if (id === 'selBig' && handleList.selBig) {
      handleList.selSmall = false;
    }
    if (id === 'selSmall' && handleList.selSmall) {
      handleList.selBig = false;
    }
    if (id === 'selEven' && handleList.selEven) {
      handleList.selOdd = false;
    }
    if (id === 'selOdd' && handleList.selOdd) {
      handleList.selEven = false;
    }
    if (id === 'sellAll' && handleList.sellAll) {
      handleList.selEven = handleList.selOdd = handleList.selBig = handleList.selSmall = false;
    } else if (id !== 'sellAll') {
      handleList.sellAll = false;
    }
    setTimeout(() => {
      this.setState(
        handleList,
      );
    }, 20);
    const totalList = this.state.totalList;
    totalList.forEach((i) => {
      if (handleList.selEven ||
        handleList.selOdd ||
        handleList.selSmall ||
        handleList.selBig ||
        handleList.sellAll) {
        i.checked = true;
        if (handleList.selBig && i.value < 11) {
          i.checked = false;
        }
        if (handleList.selSmall && i.value >= 11) {
          i.checked = false;
        }
        if (handleList.selOdd && i.value % 2 === 0) {
          i.checked = false;
        }
        if (handleList.selEven && i.value % 2 === 1) {
          i.checked = false;
        }
      } else {
        i.checked = false;
      }
    });
    this.staticCount.call(this);
  }
  // 更改倍数
  calcRate(rate) {
    this.props.updateRate(rate);
  }
  openModal() {
    this.setState({
      visible: true,
    });
  }
  handleOk(BJK3, times, serialCode) {
    const self = this;
    const payload = {
      data: {
        category: 'BJK3',
        numbers: JSON.stringify(BJK3),
        times,
        serialCode,
      },
      cb() {
        message.success('购买成功');
        self.setState({
          visible: false,
        });
        BJK3 = [];
        self.props.updateBJK3(BJK3);
        const {
          threeDif,
          threeDifAll,
          threeSame,
          threeSameAll,
          totalList,
          twoDif,
          twoSame,
          twoSameAll,
        } = self.state;
        clear(threeDif);
        clear(threeDifAll);
        clear(threeSame);
        clear(threeSameAll);
        clear(totalList);
        clear(twoDif);
        clear(twoSame);
        clear(twoSameAll);
        function clear(list) {
          list.forEach((i) => {
            i.checked = false;
          });
          self.setState({
            list,
          });
        }
        const handleList = {
          selBig: false,
          selSmall: false,
          selOdd: false,
          selEven: false,
          sellAll: false,
        };
        self.setState({
          handleList,
        });
        self.props.updateRate(1);
      },
    };
    this.props.sendBuy(payload);
  }
  handleCancel() {
    this.setState({
      visible: false,
    });
  }
  delItem(item) {
    this.props.delBJK3Item(item.index);
  }
  changeShow() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  render() {
    const {
      trend,
      home,
    } = this.props;
    const {
      headInfo,
      isLoading,
      content,
    } = trend;
    const {
      BJK3,
      rate,
    } = home;
    const {
      totalList,
      handleList,
      threeSame,
      threeSameAll,
      twoSame,
      twoSameAll,
      threeDif,
      threeDifAll,
      twoDif,
      showTime,
      isShow,
    } = this.state;
    const columns = [
      { title: '种类', dataIndex: 'type', key: 'type' },
      { title: '号码', dataIndex: 'code', key: 'code' },
      { title: '操作', dataIndex: '', key: 'x', render: record => <Icon type="delete" onClick={this.delItem.bind(this, record)} /> },
    ];
    return (
      <Row className={styles.BJK3}>
        <Col xs={24} sm={0}>
          <HeadMenu title="北京快3" back="/home" detail="/BJK3-detail" />
        </Col>
        <Col span={24} className={styles.head} >
          <Row>
            <Col span={11} >
              <Row>
                <Col span={24} className={styles.latestOpenCode} >
                  {
                    headInfo.code && headInfo.code.length ?
                      headInfo.code.map((i, index) => {
                        return (
                          <span style={{ fontSize: '24px' }} key={index} className={`icon-touzi${i}`} />
                        );
                      })
                      : (
                        <Col>
                          <span style={{ fontSize: '24px' }} className="icon-touziReady" />
                          <span style={{ fontSize: '24px' }} className="icon-touziReady" />
                          <span style={{ fontSize: '24px' }} className="icon-touziReady" />
                        </Col>
                    )
                  }
                  <Row className={styles.rightContent} >
                    <Col span={24} >{headInfo.latestSerialCode}</Col>
                    <Col span={24} >{headInfo.latestOpenCode || '开奖中'}</Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={4} onClick={this.changeShow.bind(this)}>
              历史
              <Icon type="down" />
            </Col>
            <Col span={8} className={styles.nextSerialCode} >
              <Row>
                <Col span={24} >
                  距{headInfo.nextSerialCode}期截止
                </Col>
                <Col span={24} >
                  {content.length ? content[0].showTime : showTime}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24} className={styles.main} >
          <Row>
            <Col span={24} className={styles.info}>
              {/* <Carousel vertical autoplay focusOnSelect dots={false} >
                <Row style={{ color: '#fff' }}>我是一段tip信息</Row>
                <Row style={{ color: '#fff' }}>我是一段tip信息</Row>
                <Row style={{ color: '#fff' }}>我是一段tip信息</Row>
              </Carousel> */}
              <BJK3TOP isShow={isShow} />
            </Col>
          </Row>
          <Tabs renderTabBar renderTabContent defaultActiveKey="0">
            <TabPane tab="和值" key="0" >
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemTitle}>和值</span>
                  <span className={styles.itemDetail}>猜开奖号码相加的和</span>
                </Col>
              </Row>
              <Row className={styles.selContainer}>
                {
                  totalList.length ?
                    totalList.map((i, index) => {
                      return (
                        <Col span={6} className={styles.selWrap} key={index} >
                          <label htmlFor={i.id}>
                            <input type="checkbox" onChange={this.changeChecked.bind(this, totalList)} className={styles.selCheckBox} id={i.id} checked={i.checked} />
                            <Row className={styles.selBox}>
                              <Col className={styles.selTitle} >
                                {i.value}
                              </Col>
                              <Col className={styles.selContent} >
                                <span>奖金{i.rate}分</span>
                              </Col>
                            </Row>
                          </label>
                        </Col>
                      );
                    })
                    : ''
                }
              </Row>
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemTitle}>快速选号</span>
                </Col>
              </Row>
              <Row className={styles.selContainer}>
                <Col span={6} >
                  <label htmlFor="selBig">
                    <input type="checkbox" className={styles.selCheckBox} checked={handleList.selBig} id="selBig" onChange={this.filChecked.bind(this)} />
                    <Row className={styles.selHandle}>
                      <Col className={styles.selTitle} >大</Col>
                    </Row>
                  </label>
                </Col>
                <Col span={6} >
                  <label htmlFor="selSmall">
                    <input type="checkbox" className={styles.selCheckBox} checked={handleList.selSmall} id="selSmall" onChange={this.filChecked.bind(this)} />
                    <Row className={styles.selHandle}>
                      <Col className={styles.selTitle} >小</Col>
                    </Row>
                  </label>
                </Col>
                <Col span={6} >
                  <label htmlFor="selOdd">
                    <input type="checkbox" className={styles.selCheckBox} checked={handleList.selOdd} id="selOdd" onChange={this.filChecked.bind(this)} />
                    <Row className={styles.selHandle}>
                      <Col className={styles.selTitle} >单</Col>
                    </Row>
                  </label>
                </Col>
                <Col span={6} >
                  <label htmlFor="selEven">
                    <input type="checkbox" className={styles.selCheckBox} checked={handleList.selEven} id="selEven" onChange={this.filChecked.bind(this)} />
                    <Row className={styles.selHandle}>
                      <Col className={styles.selTitle} >双</Col>
                    </Row>
                  </label>
                </Col>
              </Row>
              <Row className={styles.selContainer}>
                <Col span={24} >
                  <label htmlFor="sellAll">
                    <input type="checkbox" className={styles.selCheckBox} checked={handleList.sellAll} id="sellAll" onChange={this.filChecked.bind(this)} />
                    <Row className={styles.selHandle}>
                      <Col className={styles.selTitle} >全选</Col>
                    </Row>
                  </label>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="三同号单选" key="1">
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemTitle}>三同号单选</span>
                  <span className={styles.itemTitle}>奖金{240}分</span>
                  <span className={styles.itemDetail}>猜三个相同号码</span>
                </Col>
              </Row>
              <Row className={styles.selContainer}>
                {
                  threeSame.length ?
                    threeSame.map((i, index) => {
                      return (
                        <Col span={8} className={styles.selWrap} key={index} >
                          <label htmlFor={i.id}>
                            <input type="checkbox" onChange={this.changeChecked.bind(this, threeSame)} className={styles.selCheckBox} id={i.id} checked={i.checked} />
                            <Row className={styles.selBox}>
                              <Col className={styles.selTitle} style={{ lineHeight: '50px' }} >
                                {i.value}
                              </Col>
                            </Row>
                          </label>
                        </Col>
                      );
                    })
                    : ''
                }
              </Row>
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemTitle}>三同号通选</span>
                  <span className={styles.itemTitle}>奖金{40}分</span>
                  <span className={styles.itemDetail}>任一组号码开出即中奖</span>
                </Col>
              </Row>
              <Row className={styles.selContainer}>
                {
                  threeSameAll.length ?
                    threeSameAll.map((i, index) => {
                      return (
                        <Col span={24} className={styles.selWrap} key={index} >
                          <label htmlFor={i.id}>
                            <input type="checkbox" onChange={this.changeChecked.bind(this, threeSameAll)} className={styles.selCheckBox} id={i.id} checked={i.checked} />
                            <Row className={styles.selBox}>
                              <Col className={styles.selTitle} style={{ lineHeight: '50px' }} >
                                {i.value}
                              </Col>
                            </Row>
                          </label>
                        </Col>
                      );
                    })
                    : ''
                }
              </Row>
            </TabPane>
            <TabPane tab="二同号单选" key="2">
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemTitle}>二同号单选</span>
                  <span className={styles.itemTitle}>奖金{80}分</span>
                  <span className={styles.itemDetail}>猜两个相同号码和一个不同号码</span>
                </Col>
              </Row>
              <Row className={styles.selContainer}>
                {
                  twoSame.length ?
                    twoSame.map((i, index) => {
                      return (
                        <Col span={4} className={styles.selWrap} key={index} >
                          <label htmlFor={i.id}>
                            <input type="checkbox" onChange={this.changeChecked.bind(this, twoSame)} className={styles.selCheckBox} id={i.id} checked={i.checked} />
                            <Row className={styles.selBox}>
                              <Col className={styles.selTitle} style={{ lineHeight: '50px' }} >
                                {i.value}
                              </Col>
                            </Row>
                          </label>
                        </Col>
                      );
                    })
                    : ''
                }
              </Row>
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemTitle}>二同号复选</span>
                  <span className={styles.itemTitle}>奖金{15}分</span>
                  <span className={styles.itemDetail}>猜两个相同号码</span>
                </Col>
              </Row>
              <Row className={styles.selContainer}>
                {
                  twoSameAll.length ?
                    twoSameAll.map((i, index) => {
                      return (
                        <Col span={8} className={styles.selWrap} key={index} >
                          <label htmlFor={i.id}>
                            <input type="checkbox" onChange={this.changeChecked.bind(this, twoSameAll)} className={styles.selCheckBox} id={i.id} checked={i.checked} />
                            <Row className={styles.selBox}>
                              <Col className={styles.selTitle} style={{ lineHeight: '50px' }} >
                                {i.value}
                              </Col>
                            </Row>
                          </label>
                        </Col>
                      );
                    })
                    : ''
                }
              </Row>
            </TabPane>
            <TabPane tab="三不同号" key="3">
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemTitle}>三不同号</span>
                  <span className={styles.itemTitle}>奖金{40}分</span>
                  <span className={styles.itemDetail}>猜3个不同号码</span>
                </Col>
              </Row>
              <Row className={styles.selContainer}>
                {
                  threeDif.length ?
                    threeDif.map((i, index) => {
                      return (
                        <Col span={6} className={styles.selWrap} key={index} >
                          <label htmlFor={i.id}>
                            <input type="checkbox" onChange={this.changeChecked.bind(this, threeDif)} className={styles.selCheckBox} id={i.id} checked={i.checked} />
                            <Row className={styles.selBox}>
                              <Col className={styles.selTitle} style={{ lineHeight: '50px' }} >
                                {i.value}
                              </Col>
                            </Row>
                          </label>
                        </Col>
                      );
                    })
                    : ''
                }
              </Row>
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemTitle}>三连号通选</span>
                  <span className={styles.itemTitle}>奖金{40}分</span>
                  <span className={styles.itemDetail}>猜3个不同号码</span>
                </Col>
              </Row>
              <Row className={styles.selContainer}>
                {
                  threeDifAll.length ?
                    threeDifAll.map((i, index) => {
                      return (
                        <Col span={24} className={styles.selWrap} key={index} >
                          <label htmlFor={i.id}>
                            <input type="checkbox" onChange={this.changeChecked.bind(this, threeDifAll)} className={styles.selCheckBox} id={i.id} checked={i.checked} />
                            <Row className={styles.selBox}>
                              <Col className={styles.selTitle} style={{ lineHeight: '50px' }} >
                                {i.value}
                              </Col>
                            </Row>
                          </label>
                        </Col>
                      );
                    })
                    : ''
                }
              </Row>
            </TabPane>
            <TabPane tab="二不同号" key="4">

              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemTitle}>二不同号</span>
                  <span className={styles.itemTitle}>奖金{8}分</span>
                  <span className={styles.itemDetail}>猜2个不同号码</span>
                </Col>
              </Row>
              <Row className={styles.selContainer}>
                {
                  twoDif.length ?
                    twoDif.map((i, index) => {
                      return (
                        <Col span={8} className={styles.selWrap} key={index} >
                          <label htmlFor={i.id}>
                            <input type="checkbox" onChange={this.changeChecked.bind(this, twoDif)} className={styles.selCheckBox} id={i.id} checked={i.checked} />
                            <Row className={styles.selBox}>
                              <Col className={styles.selTitle} style={{ lineHeight: '50px' }} >
                                {i.value}
                              </Col>
                            </Row>
                          </label>
                        </Col>
                      );
                    })
                    : ''
                }
              </Row>
            </TabPane>
          </Tabs>
        </Col>
        <Col span={24} className={styles.foot} >
          <Col span={8} className={styles.detail} >{BJK3.length}注，共{2 * BJK3.length * rate}分</Col>
          <Col span={10} >
            投
            <InputNumber
              min={1}
              defaultValue={1}
              value={rate}
              onChange={this.calcRate.bind(this)}
            />
            倍
          </Col>
          <Col span={6} className={styles.submit} >
            <Button size="large" style={{ background: '#f00', color: '#fff' }} onClick={this.openModal.bind(this)}>投注</Button>
          </Col>
        </Col>
        <Modal
          title={`已选择列表 (共${BJK3.length}注,${rate}倍,${2 * BJK3.length * rate}分)`}
          visible={this.state.visible}
          onOk={this.handleOk.bind(this, BJK3, rate, headInfo.nextSerialCode)}
          confirmLoading={isLoading}
          onCancel={this.handleCancel.bind(this)}
        >
          <Table
            size="small"
            columns={columns}
            dataSource={BJK3}
            rowKey={record => record.index}
          />
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
    getOpenList(cb) {
      dispatch({ type: 'trend/getOpenList', payload: cb });
    },
    updateBJK3(list) {
      dispatch({ type: 'home/updateBJK3', payload: list });
    },
    updateRate(v) {
      dispatch({ type: 'home/updateRate', payload: v });
    },
    delBJK3Item(index) {
      dispatch({ type: 'home/delBJK3Item', payload: index });
    },
    clearBJK3() {
      dispatch({ type: 'home/clearBJK3' });
    },
    sendBuy(payload) {
      dispatch({ type: 'home/sendBuy', payload });
    },
    getRate(payload) {
      dispatch({ type: 'home/getRate', payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BJK3);
