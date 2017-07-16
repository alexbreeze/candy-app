import React from 'react';
import { connect } from 'dva';
import { Row, Col, Tabs, Button, Carousel, InputNumber, Modal, Table, Icon } from 'antd';
import HeadMenu from '../../../components/headMenu';
import styles from './index.less';
import '../../../iconfont/iconfont.css';

const { TabPane } = Tabs;

class CQSSC extends React.Component {
  constructor() {
    super();
    this.state = {
      oneStarList: [
        {
          title: '个位',
          type: 'S1',
          total: [{
            id: 'S110',
            displayName: '0',
            rate: '1',
            checked: false,
          },
          {
            id: 'S11',
            displayName: '1',
            rate: '6',
            checked: false,
          },
          {
            id: 'S12',
            displayName: '2',
            rate: '8',
            checked: false,
          },
          {
            id: 'S13',
            displayName: '3',
            rate: '0',
            checked: false,
          },
          {
            id: 'S14',
            displayName: '4',
            rate: '3',
            checked: false,
          },
          {
            id: 'S15',
            displayName: '5',
            rate: '4',
            checked: false,
          },
          {
            id: 'S16',
            displayName: '6',
            rate: '2',
            checked: false,
          },
          {
            id: 'S17',
            displayName: '7',
            rate: '9',
            checked: false,
          },
          {
            id: 'S18',
            displayName: '8',
            rate: '13',
            checked: false,
          },
          {
            id: 'S19',
            displayName: '9',
            rate: '12',
            checked: false,
          }
          ]
        }],
      twoStarList: [
        {
          title: '十位',
          type: 'S2',
          total: [{
            id: 'S20',
            displayName: '0',
            rate: '3',
            checked: false,
          },
          {
            id: 'S21',
            displayName: '1',
            rate: '22',
            checked: false,
          },
          {
            id: 'S22',
            displayName: '2',
            rate: '0',
            checked: false,
          },
          {
            id: 'S23',
            displayName: '3',
            rate: '2',
            checked: false,
          },
          {
            id: 'S24',
            displayName: '4',
            rate: '17',
            checked: false,
          },
          {
            id: 'S25',
            displayName: '5',
            rate: '6',
            checked: false,
          },
          {
            id: 'S26',
            displayName: '6',
            rate: '30',
            checked: false,
          },
          {
            id: 'S27',
            displayName: '7',
            rate: '1',
            checked: false,
          },
          {
            id: 'S28',
            displayName: '8',
            rate: '9',
            checked: false,
          },
          {
            id: 'S29',
            displayName: '9',
            rate: '15',
            checked: false,
          }
          ]
        },
        {
          title: '个位',
          type: 'SG2',
          total: [{
            id: 'SG20',
            displayName: '0',
            rate: '5',
            checked: false,
          },
          {
            id: 'SG21',
            displayName: '1',
            rate: '10',
            checked: false,
          },
          {
            id: 'SG22',
            displayName: '2',
            rate: '3',
            checked: false,
          },
          {
            id: 'SG23',
            displayName: '3',
            rate: '4',
            checked: false,
          },
          {
            id: 'SG24',
            displayName: '4',
            rate: '0',
            checked: false,
          },
          {
            id: 'SG25',
            displayName: '5',
            rate: '8',
            checked: false,
          },
          {
            id: 'SG26',
            displayName: '6',
            rate: '2',
            checked: false,
          },
          {
            id: 'SG27',
            displayName: '7',
            rate: '13',
            checked: false,
          },
          {
            id: 'SG28',
            displayName: '8',
            rate: '1',
            checked: false,
          },
          {
            id: 'SG29',
            displayName: '9',
            rate: '16',
            checked: false,
          }
          ]
        }],
      twoGStarList: [
        {
          title: '个位',
          type: 'S3',
          total: [{
            id: 'S30',
            displayName: '0',
            rate: '3',
            checked: false,
          },
          {
            id: 'S31',
            displayName: '1',
            rate: '10',
            checked: false,
          },
          {
            id: 'S32',
            displayName: '2',
            rate: '0',
            checked: false,
          },
          {
            id: 'S33',
            displayName: '3',
            rate: '2',
            checked: false,
          },
          {
            id: 'S34',
            displayName: '4',
            rate: '0',
            checked: false,
          },
          {
            id: 'S35',
            displayName: '5',
            rate: '6',
            checked: false,
          },
          {
            id: 'S36',
            displayName: '6',
            rate: '2',
            checked: false,
          },
          {
            id: 'S37',
            displayName: '7',
            rate: '1',
            checked: false,
          },
          {
            id: 'S38',
            displayName: '8',
            rate: '9',
            checked: false,
          },
          {
            id: 'S39',
            displayName: '9',
            rate: '15',
            checked: false,
          }]
        }],
      threeStarList: [
        {
          title: '百位',
          type: 'S4',
          total: [{
            id: 'S40',
            displayName: '0',
            rate: '3',
            checked: false,
          }, {
            id: 'S41',
            displayName: '1',
            rate: '8',
            checked: false,
          }, {
            id: 'S42',
            displayName: '2',
            rate: '2',
            checked: false,
          }, {
            id: 'S43',
            displayName: '3',
            rate: '9',
            checked: false,
          }, {
            id: 'S44',
            displayName: '4',
            rate: '15',
            checked: false,
          }, {
            id: 'S45',
            displayName: '5',
            rate: '4',
            checked: false,
          }, {
            id: 'S46',
            displayName: '6',
            rate: '20',
            checked: false,
          }, {
            id: 'S47',
            displayName: '7',
            rate: '0',
            checked: false,
          }, {
            id: 'S48',
            displayName: '8',
            rate: '1',
            checked: false,
          }, {
            id: 'S49',
            displayName: '9',
            rate: '16',
            checked: false,
          }
          ]
        }, {
          title: '十位',
          type: 'SS4',
          total: [{
            id: 'SS40',
            displayName: '0',
            rate: '3',
            checked: false,
          }, {
            id: 'SS41',
            displayName: '1',
            rate: '22',
            checked: false,
          }, {
            id: 'SS42',
            displayName: '2',
            rate: '0',
            checked: false,
          }, {
            id: 'SS43',
            displayName: '3',
            rate: '2',
            checked: false,
          }, {
            id: 'SS44',
            displayName: '4',
            rate: '17',
            checked: false,
          }, {
            id: 'SS45',
            displayName: '5',
            rate: '6',
            checked: false,
          }, {
            id: 'SS46',
            displayName: '6',
            rate: '30',
            checked: false,
          }, {
            id: 'SS47',
            displayName: '7',
            rate: '1',
            checked: false,
          }, {
            id: 'SS48',
            displayName: '8',
            rate: '9',
            checked: false,
          }, {
            id: 'SS49',
            displayName: '9',
            rate: '15',
            checked: false,
          }
          ]
        }, {
          title: '个位',
          type: 'SG4',
          total: [{
            id: 'SG40',
            displayName: '0',
            rate: '5',
            checked: false,
          }, {
            id: 'SG41',
            displayName: '1',
            rate: '10',
            checked: false,
          }, {
            id: 'SG42',
            displayName: '2',
            rate: '3',
            checked: false,
          }, {
            id: 'SG43',
            displayName: '3',
            rate: '4',
            checked: false,
          }, {
            id: 'SG44',
            displayName: '4',
            rate: '0',
            checked: false,
          }, {
            id: 'SG45',
            displayName: '5',
            rate: '8',
            checked: false,
          }, {
            id: 'SG46',
            displayName: '6',
            rate: '2',
            checked: false,
          }, {
            id: 'SG47',
            displayName: '7',
            rate: '13',
            checked: false,
          }, {
            id: 'SG48',
            displayName: '8',
            rate: '17',
            checked: false,
          }, {
            id: 'SG49',
            displayName: '9',
            rate: '16',
            checked: false,
          }
          ]
        }],
      threeGStarList: [
        {
          title: '重号',
          type: 'S5',
          total: [{
            id: 'S50',
            displayName: '0',
            rate: '3',
            checked: false,
          },
          {
            id: 'S51',
            displayName: '1',
            rate: '8',
            checked: false,
          },
          {
            id: 'S52',
            displayName: '2',
            rate: '0',
            checked: false,
          },
          {
            id: 'S53',
            displayName: '3',
            rate: '2',
            checked: false,
          },
          {
            id: 'S54',
            displayName: '4',
            rate: '0',
            checked: false,
          },
          {
            id: 'S55',
            displayName: '5',
            rate: '4',
            checked: false,
          }, {
            id: 'S56',
            displayName: '6',
            rate: '2',
            checked: false,
          },
          {
            id: 'S57',
            displayName: '7',
            rate: '0',
            checked: false,
          },
          {
            id: 'S58',
            displayName: '8',
            rate: '1',
            checked: false,
          },
          {
            id: 'S59',
            displayName: '9',
            rate: '15',
            checked: false,
          }
          ]
        }, {
          title: '单号',
          type: 'SO5',
          total: [{
            id: 'SO50',
            displayName: '0',
            rate: '3',
            checked: false,
          }, {
            id: 'SO51',
            displayName: '1',
            rate: '8',
            checked: false,
          }, {
            id: 'SO52',
            displayName: '2',
            rate: '0',
            checked: false,
          }, {
            id: 'SO53',
            displayName: '3',
            rate: '2',
            checked: false,
          }, {
            id: 'SO54',
            displayName: '4',
            rate: '0',
            checked: false,
          }, {
            id: 'SO55',
            displayName: '5',
            rate: '4',
            checked: false,
          }, {
            id: 'SO56',
            displayName: '6',
            rate: '2',
            checked: false,
          }, {
            id: 'SO57',
            displayName: '7',
            rate: '0',
            checked: false,
          }, {
            id: 'SO58',
            displayName: '8',
            rate: '1',
            checked: false,
          }, {
            id: 'SO59',
            displayName: '9',
            rate: '15',
            checked: false,
          }
          ]
        }],
      threeDStarList: [
        {
          title: '选号',
          type: 'S6',
          total: [{
            id: 'S60',
            displayName: '0',
            rate: '3',
            checked: false,
          },
          {
            id: 'S61',
            displayName: '1',
            rate: '8',
            checked: false,
          },
          {
            id: 'S62',
            displayName: '2',
            rate: '0',
            checked: false,
          },
          {
            id: 'S63',
            displayName: '3',
            rate: '2',
            checked: false,
          },
          {
            id: 'S64',
            displayName: '4',
            rate: '0',
            checked: false,
          },
          {
            id: 'S65',
            displayName: '5',
            rate: '4',
            checked: false,
          },
          {
            id: 'S66',
            displayName: '6',
            rate: '2',
            checked: false,
          },
          {
            id: 'S67',
            displayName: '7',
            rate: '0',
            checked: false,
          },
          {
            id: 'S68',
            displayName: '8',
            rate: '1',
            checked: false,
          },
          {
            id: 'S69',
            displayName: '9',
            rate: '15',
            checked: false,
          }]
        }],
      threeSStarList: [
        {
          title: '选号',
          type: 'S7',
          total: [{
            id: 'S70',
            displayName: '0',
            rate: '3',
            checked: false,
          },
          {
            id: 'S71',
            displayName: '1',
            rate: '8',
            checked: false,
          },
          {
            id: 'S72',
            displayName: '2',
            rate: '0',
            checked: false,
          },
          {
            id: 'S73',
            displayName: '3',
            rate: '2',
            checked: false,
          },
          {
            id: 'S74',
            displayName: '4',
            rate: '0',
            checked: false,
          },
          {
            id: 'S75',
            displayName: '5',
            rate: '4',
            checked: false,
          },
          {
            id: 'S76',
            displayName: '6',
            rate: '2',
            checked: false,
          },
          {
            id: 'S77',
            displayName: '7',
            rate: '0',
            checked: false,
          },
          {
            id: 'S78',
            displayName: '8',
            rate: '1',
            checked: false,
          },
          {
            id: 'S79',
            displayName: '9',
            rate: '15',
            checked: false,
          }]
        }],
      fiveStarList: [
        {
          title: '万位',
          type: 'S8',
          total: [
            {
              id: 'S80',
              displayName: '0',
              rate: '0',
              checked: false,
            },
            {
              id: 'S81',
              displayName: '1',
              rate: '8',
              checked: false,
            },
            {
              id: 'S82',
              displayName: '2',
              rate: '3',
              checked: false,
            },
            {
              id: 'S83',
              displayName: '3',
              rate: '1',
              checked: false,
            },
            {
              id: 'S84',
              displayName: '4',
              rate: '27',
              checked: false,
            },
            {
              id: 'S85',
              displayName: '5',
              rate: '2',
              checked: false,
            },
            {
              id: 'S86',
              displayName: '6',
              rate: '29',
              checked: false,
            },
            {
              id: 'S87',
              displayName: '7',
              rate: '5',
              checked: false,
            },
            {
              id: 'S88',
              displayName: '8',
              rate: '32',
              checked: false,
            },
            {
              id: 'S89',
              displayName: '9',
              rate: '21',
              checked: false,
            }
          ]
        },
        {
          title: '千位',
          type: 'ST8',
          total: [{
            id: 'ST80',
            displayName: '0',
            rate: '1',
            checked: false,
          }, {
            id: 'ST81',
            displayName: '1',
            rate: '8',
            checked: false,
          }, {
            id: 'ST82',
            displayName: '2',
            rate: '4',
            checked: false,
          }, {
            id: 'ST83',
            displayName: '3',
            rate: '3',
            checked: false,
          }, {
            id: 'ST84',
            displayName: '4',
            rate: '0',
            checked: false,
          }, {
            id: 'ST85',
            displayName: '5',
            rate: '1',
            checked: false,
          }, {
            id: 'ST86',
            displayName: '6',
            rate: '2',
            checked: false,
          }, {
            id: 'ST87',
            displayName: '7',
            rate: '14',
            checked: false,
          }, {
            id: 'ST88',
            displayName: '8',
            rate: '5',
            checked: false,
          }, {
            id: 'ST89',
            displayName: '9',
            rate: '11',
            checked: false,
          }
          ]
        },
         {
          title: '百位',
          type: 'SH8',
          total: [{
            id: 'SH80',
            displayName: '0',
            rate: '3',
            checked: false,
          }, {
            id: 'SH81',
            displayName: '1',
            rate: '8',
            checked: false,
          }, {
            id: 'SH82',
            displayName: '2',
            rate: '2',
            checked: false,
          }, {
            id: 'SH83',
            displayName: '3',
            rate: '9',
            checked: false,
          }, {
            id: 'SH84',
            displayName: '4',
            rate: '15',
            checked: false,
          }, {
            id: 'SH85',
            displayName: '5',
            rate: '4',
            checked: false,
          }, {
            id: 'SH86',
            displayName: '6',
            rate: '20',
            checked: false,
          }, {
            id: 'SH87',
            displayName: '7',
            rate: '0',
            checked: false,
          }, {
            id: 'SH88',
            displayName: '8',
            rate: '1',
            checked: false,
          }, {
            id: 'SH89',
            displayName: '9',
            rate: '16',
            checked: false,
          }
          ]
        }, {
          title: '十位',
          type: 'S8T',
          total: [{
            id: 'S8T0',
            displayName: '0',
            rate: '3',
            checked: false,
          }, {
            id: 'S8T1',
            displayName: '1',
            rate: '8',
            checked: false,
          }, {
            id: 'S8T2',
            displayName: '2',
            rate: '2',
            checked: false,
          }, {
            id: 'S8T3',
            displayName: '3',
            rate: '9',
            checked: false,
          }, {
            id: 'S8T4',
            displayName: '4',
            rate: '15',
            checked: false,
          }, {
            id: 'S8T5',
            displayName: '5',
            rate: '4',
            checked: false,
          }, {
            id: 'S8T6',
            displayName: '6',
            rate: '20',
            checked: false,
          }, {
            id: 'S8T7',
            displayName: '7',
            rate: '0',
            checked: false,
          }, {
            id: 'S8T8',
            displayName: '8',
            rate: '1',
            checked: false,
          }, {
            id: 'S8T9',
            displayName: '9',
            rate: '16',
            checked: false,
          }
          ]
        }, {
          title: '个位',
          type: 'S8G',
          total: [{
            id: 'S8G0',
            displayName: '0',
            rate: '3',
            checked: false,
          }, {
            id: 'S8G1',
            displayName: '1',
            rate: '8',
            checked: false,
          }, {
            id: 'S8G2',
            displayName: '2',
            rate: '2',
            checked: false,
          }, {
            id: 'S8G3',
            displayName: '3',
            rate: '9',
            checked: false,
          }, {
            id: 'S8G4',
            displayName: '4',
            rate: '15',
            checked: false,
          }, {
            id: 'S8G5',
            displayName: '5',
            rate: '4',
            checked: false,
          }, {
            id: 'S8G6',
            displayName: '6',
            rate: '20',
            checked: false,
          }, {
            id: 'S8G7',
            displayName: '7',
            rate: '0',
            checked: false,
          }, {
            id: 'S8G8',
            displayName: '8',
            rate: '1',
            checked: false,
          }, {
            id: 'S8G9',
            displayName: '9',
            rate: '16',
            checked: false,
          }
          ]
        }],
      fiveTStarList: [
        {
          title: '万位',
          type: 'S9',
          total: [
            {
              id: 'S90',
              displayName: '0',
              rate: '0',
              checked: false,
            },
            {
              id: 'S91',
              displayName: '1',
              rate: '8',
              checked: false,
            },
            {
              id: 'S92',
              displayName: '2',
              rate: '3',
              checked: false,
            },
            {
              id: 'S93',
              displayName: '3',
              rate: '1',
              checked: false,
            },
            {
              id: 'S94',
              displayName: '4',
              rate: '27',
              checked: false,
            },
            {
              id: 'S95',
              displayName: '5',
              rate: '2',
              checked: false,
            },
            {
              id: 'S96',
              displayName: '6',
              rate: '29',
              checked: false,
            },
            {
              id: 'S97',
              displayName: '7',
              rate: '5',
              checked: false,
            },
            {
              id: 'S98',
              displayName: '8',
              rate: '32',
              checked: false,
            },
            {
              id: 'S99',
              displayName: '9',
              rate: '21',
              checked: false,
            }
          ]
        },
        {
          title: '千位',
          type: 'ST8',
          total: [{
            id: 'ST80',
            displayName: '0',
            rate: '1',
            checked: false,
          }, {
            id: 'ST81',
            displayName: '1',
            rate: '8',
            checked: false,
          }, {
            id: 'ST82',
            displayName: '2',
            rate: '4',
            checked: false,
          }, {
            id: 'ST83',
            displayName: '3',
            rate: '3',
            checked: false,
          }, {
            id: 'ST84',
            displayName: '4',
            rate: '0',
            checked: false,
          }, {
            id: 'ST85',
            displayName: '5',
            rate: '1',
            checked: false,
          }, {
            id: 'ST86',
            displayName: '6',
            rate: '2',
            checked: false,
          }, {
            id: 'ST87',
            displayName: '7',
            rate: '14',
            checked: false,
          }, {
            id: 'ST88',
            displayName: '8',
            rate: '5',
            checked: false,
          }, {
            id: 'ST89',
            displayName: '9',
            rate: '11',
            checked: false,
          }
          ]
        },
         {
          title: '百位',
          type: 'SH8',
          total: [{
            id: 'SH80',
            displayName: '0',
            rate: '3',
            checked: false,
          }, {
            id: 'SH81',
            displayName: '1',
            rate: '8',
            checked: false,
          }, {
            id: 'SH82',
            displayName: '2',
            rate: '2',
            checked: false,
          }, {
            id: 'SH83',
            displayName: '3',
            rate: '9',
            checked: false,
          }, {
            id: 'SH84',
            displayName: '4',
            rate: '15',
            checked: false,
          }, {
            id: 'SH85',
            displayName: '5',
            rate: '4',
            checked: false,
          }, {
            id: 'SH86',
            displayName: '6',
            rate: '20',
            checked: false,
          }, {
            id: 'SH87',
            displayName: '7',
            rate: '0',
            checked: false,
          }, {
            id: 'SH88',
            displayName: '8',
            rate: '1',
            checked: false,
          }, {
            id: 'SH89',
            displayName: '9',
            rate: '16',
            checked: false,
          }
          ]
        }, {
          title: '十位',
          type: 'S9T',
          total: [{
            id: 'S9T0',
            displayName: '0',
            rate: '3',
            checked: false,
          }, {
            id: 'S9T1',
            displayName: '1',
            rate: '8',
            checked: false,
          }, {
            id: 'S9T2',
            displayName: '2',
            rate: '2',
            checked: false,
          }, {
            id: 'S9T3',
            displayName: '3',
            rate: '9',
            checked: false,
          }, {
            id: 'S9T4',
            displayName: '4',
            rate: '15',
            checked: false,
          }, {
            id: 'S9T5',
            displayName: '5',
            rate: '4',
            checked: false,
          }, {
            id: 'S9T6',
            displayName: '6',
            rate: '20',
            checked: false,
          }, {
            id: 'S9T7',
            displayName: '7',
            rate: '0',
            checked: false,
          }, {
            id: 'S9T8',
            displayName: '8',
            rate: '1',
            checked: false,
          }, {
            id: 'S9T9',
            displayName: '9',
            rate: '16',
            checked: false,
          }
          ]
        }, {
          title: '个位',
          type: 'S9G',
          total: [{
            id: 'S9G0',
            displayName: '0',
            rate: '3',
            checked: false,
          }, {
            id: 'S9G1',
            displayName: '1',
            rate: '8',
            checked: false,
          }, {
            id: 'S9G2',
            displayName: '2',
            rate: '2',
            checked: false,
          }, {
            id: 'S9G3',
            displayName: '3',
            rate: '9',
            checked: false,
          }, {
            id: 'S9G4',
            displayName: '4',
            rate: '15',
            checked: false,
          }, {
            id: 'S9G5',
            displayName: '5',
            rate: '4',
            checked: false,
          }, {
            id: 'S9G6',
            displayName: '6',
            rate: '20',
            checked: false,
          }, {
            id: 'S9G7',
            displayName: '7',
            rate: '0',
            checked: false,
          }, {
            id: 'S9G8',
            displayName: '8',
            rate: '1',
            checked: false,
          }, {
            id: 'S9G9',
            displayName: '9',
            rate: '16',
            checked: false,
          }
          ]
        }],
      sizeStarList: [
        {
          title: '十位',
          type: 'S10',
          total: [{
            id: 'S10T0',
            displayName: '大',
            rate: '3',
            checked: false,
          },
          {
            id: 'S10T1',
            displayName: '小',
            rate: '22',
            checked: false,
          },
          {
            id: 'S10T2',
            displayName: '单',
            rate: '0',
            checked: false,
          },
          {
            id: 'S10T3',
            displayName: '双',
            rate: '2',
            checked: false,
          }
          ]
        },
        {
          title: '个位',
          type: 'S10G',
          total: [{
            id: 'S10G0',
            displayName: '大',
            rate: '5',
            checked: false,
          },
          {
            id: 'S10G1',
            displayName: '小',
            rate: '10',
            checked: false,
          },
          {
            id: 'S10G2',
            displayName: '单',
            rate: '3',
            checked: false,
          },
          {
            id: 'S10G3',
            displayName: '双',
            rate: '4',
            checked: false,
          }
          ]
        }],
    };
  }
  componentDidMount() {
    this.props.getOpenList();
  }
  // 改变状态
  changeChecked(list, ev) {
    list.forEach((i) => {
      if (i.id === ev.target.id) {
        i.checked = !i.checked;
      }
    });
    this.setState(
      list,
    );
    // this.staticCount.call(this);
  }
  // 更改倍数
  calcRate(rate) {
    // this.props.updateRate(rate);
  }
  render() {
    const {
      trend,
      home,
    } = this.props;
    const {
      content,
    } = trend;
    const {
      BJPK10,
      rate,
    } = home;
    const {
      oneStarList,
      twoStarList,
      twoGStarList,
      threeStarList,
      threeGStarList,
      threeDStarList,
      threeSStarList,
      fiveStarList,
      fiveTStarList,
      sizeStarList,
    } = this.state;
    return (
      <Row className={styles.CQSSC}>
        <Col xs={24} sm={0}>
          <HeadMenu title="重庆时时彩" back="/home" />
        </Col>
        <Col span={24} className={styles.head} >
          <Row>
            <Col span={16} >
              <Row>
                <Col span={24}>重庆时时彩 第33888983期</Col>
                <Col span={24}>000000000</Col>
              </Row>
            </Col>
            <Col span={8} className={styles.nextSerialCode} >
              <Row>
                <Col span={24}>78909777期截止</Col>
                <Col span={24}>16:24</Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24} className={styles.main}>
          <Tabs renderTabBar renderTabContent defaultActiveKey="0">
            <TabPane tab="一星直选" key="0" >
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemDetail}>
                    至少选1个号码，猜对开奖号码最后一位即中{10}元
                  </span>
                </Col>
              </Row>
              {
                oneStarList.length ?
                  oneStarList.map((items, index) => {
                    return (
                      <Col span={24} className={styles.selContainer} key={index}>
                        <Col span={5} className={styles.selCtitle}>{items.title}</Col>
                        <Col span={17} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} onChange={this.changeChecked.bind(this, oneStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            )
                          })
                        }</Col>
                      </Col>
                    )
                  })
                  : ''
              }
            </TabPane>
            <TabPane tab="二星直选" key="1" >
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemDetail}>
                    至少选1个号码，按位猜对开奖后两位即中{100}元
                  </span>
                </Col>
              </Row>
              {
                twoStarList.length ?
                  twoStarList.map((items, index) => {
                    return (
                      <Col span={24} className={styles.selContainer} key={index}>
                        <Col span={5} className={styles.selCtitle}>{items.title}</Col>
                        <Col span={17} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} onChange={this.changeChecked.bind(this, twoStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            )
                          })
                        }</Col>
                      </Col>
                    )
                  })
                  : ''
              }
            </TabPane>
            <TabPane tab="二星组选" key="2" >
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemDetail}>
                    至少选2个号码，猜对开奖后两位(顺序不限)即中{50}元
                  </span>
                </Col>
              </Row>
              {
                twoGStarList.length ?
                  twoGStarList.map((items, index) => {
                    return (
                      <Col span={24} className={styles.selContainer} key={index}>
                        <Col span={5} className={styles.selCtitle}>{items.title}</Col>
                        <Col span={17} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} onChange={this.changeChecked.bind(this, twoGStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            )
                          })
                        }</Col>
                      </Col>
                    )
                  })
                  : ''
              }
            </TabPane>
            <TabPane tab="三星直选" key="3" >
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemDetail}>
                    每位至少选1个号码，按位猜对开奖后3位即中{1000}元
                  </span>
                </Col>
              </Row>
              {
                threeStarList.length ?
                  threeStarList.map((items, index) => {
                    return (
                      <Col span={24} className={styles.selContainer} key={index}>
                        <Col span={5} className={styles.selCtitle}>{items.title}</Col>
                        <Col span={17} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} onChange={this.changeChecked.bind(this, threeStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            )
                          })
                        }</Col>
                      </Col>
                    )
                  })
                  : ''
              }
            </TabPane>
            <TabPane tab="三星组三单式" key="4" >
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemDetail}>
                    选1个重号和1个单号，猜对开奖后3位即中{320}元
                  </span>
                </Col>
              </Row>
              {
                threeGStarList.length ?
                  threeGStarList.map((items, index) => {
                    return (
                      <Col span={24} className={styles.selContainer} key={index}>
                        <Col span={5} className={styles.selCtitle}>{items.title}</Col>
                        <Col span={17} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} onChange={this.changeChecked.bind(this, threeGStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            )
                          })
                        }</Col>
                      </Col>
                    )
                  })
                  : ''
              }
            </TabPane>
            <TabPane tab="三星组三复式" key="5" >
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemDetail}>
                    至少选2个号，猜对开奖后3位(顺序不限)即中{320}元
                  </span>
                </Col>
              </Row>
              {
                threeDStarList.length ?
                  threeDStarList.map((items, index) => {
                    return (
                      <Col span={24} className={styles.selContainer} key={index}>
                        <Col span={5} className={styles.selCtitle}>{items.title}</Col>
                        <Col span={17} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} onChange={this.changeChecked.bind(this, threeDStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            )
                          })
                        }</Col>
                      </Col>
                    )
                  })
                  : ''
              }
            </TabPane>
            <TabPane tab="三星组六" key="6" >
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemDetail}>
                    至少选3个号，猜对开奖后3位(顺序不限)即中{160}元
                  </span>
                </Col>
              </Row>
              {
                threeSStarList.length ?
                  threeSStarList.map((items, index) => {
                    return (
                      <Col span={24} className={styles.selContainer} key={index}>
                        <Col span={5} className={styles.selCtitle}>{items.title}</Col>
                        <Col span={17} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} onChange={this.changeChecked.bind(this, threeSStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            )
                          })
                        }</Col>
                      </Col>
                    )
                  })
                  : ''
              }
            </TabPane>
            <TabPane tab="五星直选" key="7" >
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemDetail}>
                    每位至少选1个号码，按位猜对开奖号即中{100000}元
                  </span>
                </Col>
              </Row>
              {
                fiveStarList.length ?
                  fiveStarList.map((items, index) => {
                    return (
                      <Col span={24} className={styles.selContainer} key={index}>
                        <Col span={5} className={styles.selCtitle}>{items.title}</Col>
                        <Col span={17} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} onChange={this.changeChecked.bind(this, fiveStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            )
                          })
                        }</Col>
                      </Col>
                    )
                  })
                  : ''
              }
            </TabPane>
            <TabPane tab="五星通选" key="8" >
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemDetail}>
                    每位至少选1个号码，按位猜对开奖号最高奖{20440}元
                  </span>
                </Col>
              </Row>
              {
                fiveTStarList.length ?
                  fiveTStarList.map((items, index) => {
                    return (
                      <Col span={24} className={styles.selContainer} key={index}>
                        <Col span={5} className={styles.selCtitle}>{items.title}</Col>
                        <Col span={17} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} onChange={this.changeChecked.bind(this, fiveTStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            )
                          })
                        }</Col>
                      </Col>
                    )
                  })
                  : ''
              }
            </TabPane>
            <TabPane tab="大小单双" key="9" >
              <Row>
                <Col span={24} className={styles.itemWrap}>
                  <span className={styles.itemDetail}>
                    每位至少选1个号码，猜对开奖后2位的属性即中{4}元
                  </span>
                </Col>
              </Row>
              {
                sizeStarList.length ?
                  sizeStarList.map((items, index) => {
                    return (
                      <Col span={24} className={styles.selContainer} key={index}>
                        <Col span={5} className={styles.selCtitle}>{items.title}</Col>
                        <Col span={17} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} onChange={this.changeChecked.bind(this, sizeStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            )
                          })
                        }</Col>
                      </Col>
                    )
                  })
                  : ''
              }
            </TabPane>
          </Tabs>
        </Col>
        <Col span={24} className={styles.foot} >
          <Col span={8} className={styles.detail} >
            <Button size="large" type='primary'>清空</Button>
          </Col>
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
            <Button size="large" type='primary'>投注</Button>
          </Col>
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
    getOpenList() {
      dispatch({ type: 'trend/getOpenList' });
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CQSSC);
