import React from 'react';
import { connect } from 'dva';
import { Row, Col, Tabs, Button, Carousel, InputNumber, Modal, Table, Icon, message } from 'antd';
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
          displayName: '一星直选',
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
          },
          ],
        },
      ],
      twoStarList: [
        {
          title: '十位',
          type: 'S2',
          displayName: '二星直选',
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
          },
          ],
        },
        {
          title: '个位',
          type: 'SG2',
          displayName: '二星直选',
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
          },
          ],
        },
      ],
      twoGStarList: [
        {
          title: '个位',
          type: 'S3',
          displayName: '二星组选',
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
          }],
        },
      ],
      threeStarList: [
        {
          title: '百位',
          type: 'S4',
          displayName: '三星直选',
          total: [{
            id: 'S40',
            displayName: '0',
            rate: '3',
            checked: false,
          },
          {
            id: 'S41',
            displayName: '1',
            rate: '8',
            checked: false,
          },
          {
            id: 'S42',
            displayName: '2',
            rate: '2',
            checked: false,
          },
          {
            id: 'S43',
            displayName: '3',
            rate: '9',
            checked: false,
          },
          {
            id: 'S44',
            displayName: '4',
            rate: '15',
            checked: false,
          },
          {
            id: 'S45',
            displayName: '5',
            rate: '4',
            checked: false,
          },
          {
            id: 'S46',
            displayName: '6',
            rate: '20',
            checked: false,
          },
          {
            id: 'S47',
            displayName: '7',
            rate: '0',
            checked: false,
          },
          {
            id: 'S48',
            displayName: '8',
            rate: '1',
            checked: false,
          },
          {
            id: 'S49',
            displayName: '9',
            rate: '16',
            checked: false,
          },
          ],
        },
        {
          title: '十位',
          type: 'SS4',
          displayName: '三星直选',
          total: [{
            id: 'SS40',
            displayName: '0',
            rate: '3',
            checked: false,
          },
          {
            id: 'SS41',
            displayName: '1',
            rate: '22',
            checked: false,
          },
          {
            id: 'SS42',
            displayName: '2',
            rate: '0',
            checked: false,
          },
          {
            id: 'SS43',
            displayName: '3',
            rate: '2',
            checked: false,
          },
          {
            id: 'SS44',
            displayName: '4',
            rate: '17',
            checked: false,
          },
          {
            id: 'SS45',
            displayName: '5',
            rate: '6',
            checked: false,
          },
          {
            id: 'SS46',
            displayName: '6',
            rate: '30',
            checked: false,
          },
          {
            id: 'SS47',
            displayName: '7',
            rate: '1',
            checked: false,
          },
          {
            id: 'SS48',
            displayName: '8',
            rate: '9',
            checked: false,
          },
          {
            id: 'SS49',
            displayName: '9',
            rate: '15',
            checked: false,
          },
          ],
        },
        {
          title: '个位',
          type: 'SG4',
          displayName: '三星直选',
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
          },
          ],
        },
      ],
      threeDStarList: [
        {
          title: '选号',
          type: 'S6',
          displayName: '三星组三',
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
          }],
        },
      ],
      threeSStarList: [
        {
          title: '选号',
          type: 'S7',
          displayName: '三星组六',
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
          }],
        },
      ],
      fiveStarList: [
        {
          title: '万位',
          type: 'S8',
          displayName: '五星直选',
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
            },
          ],
        },
        {
          title: '千位',
          type: 'ST8',
          displayName: '五星直选',
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
          },
          ],
        },
        {
          title: '百位',
          type: 'SH8',
          displayName: '五星直选',
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
          },
          ],
        },
        {
          title: '十位',
          type: 'S8T',
          displayName: '五星直选',
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
          },
          ],
        },
        {
          title: '个位',
          type: 'S8G',
          displayName: '五星直选',
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
          },
          ],
        },
      ],
      fiveTStarList: [
        {
          title: '万位',
          type: 'S9',
          displayName: '五星通选',
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
            },
          ],
        },
        {
          title: '千位',
          type: 'ST8',
          displayName: '五星通选',
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
          },
          ],
        },
        {
          title: '百位',
          type: 'SH8',
          displayName: '五星通选',
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
          },
          ],
        },
        {
          title: '十位',
          type: 'S9T',
          displayName: '五星通选',
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
          },
          ],
        },
        {
          title: '个位',
          type: 'S9G',
          displayName: '五星通选',
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
          },
          ],
        },
      ],
      sizeStarList: [
        {
          title: '十位',
          type: 'S10',
          displayName: '大小单双',
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
          },
          ],
        },
        {
          title: '个位',
          type: 'S10G',
          displayName: '大小单双',
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
          },
          ],
        },
      ],
      visible: false,
      showTime: '00:00',
      one: [],
      two: [],
      three: [],
      five: [],
    };
  }
  componentDidMount() {
    this.props.getOpenList();
  }
  // 改变状态
  changeChecked(list, ev) {
    const {
      one,
      two,
      three,
      five,
    } = this.state;
    let tempArr = [];
    let tempInfo = {};
    for (let i = 0; i < list.length; i++) {
      if (list[i].title === ev.target.value) {
        tempArr = list[i].total;
        tempInfo = list[i];
        break;
      }
    }
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].id === ev.target.id) {
        tempArr[i].checked = !tempArr[i].checked;
      }
      if (tempInfo.displayName === '一星直选' ||
        tempInfo.displayName === '二星直选' ||
        tempInfo.displayName === '三星直选' ||
        tempInfo.displayName === '五星直选' ||
        tempInfo.displayName === '五星通选' ||
        tempInfo.displayName === '大小单双') {
        if (tempArr[i].checked && one.indexOf(tempArr[i].id) === -1) {
          one.push(tempArr[i].id);
        }
      }
      if (tempInfo.displayName === '二星组选') {
        if (tempArr[i].checked && two.indexOf(tempArr[i].id) === -1) {
          two.push(tempArr[i].id);
        }
      }
      tempArr[i].checked = false;
    }
    updateCheckCircle.call(this, one, 1);
    updateCheckCircle.call(this, two, 2);
    updateCheckCircle.call(this, three, 3);
    updateCheckCircle.call(this, five, 5);
    for (let i = 0; i < tempArr.length; i++) {
      if (tempInfo.displayName === '一星直选' ||
        tempInfo.displayName === '二星直选' ||
        tempInfo.displayName === '三星直选' ||
        tempInfo.displayName === '五星直选' ||
        tempInfo.displayName === '五星通选' ||
        tempInfo.displayName === '大小单双') {
        if (one.indexOf(tempArr[i].id) !== -1) {
          tempArr[i].checked = true;
        }
      }
      if (tempInfo.displayName === '二星组选') {
        if (two.indexOf(tempArr[i].id) !== -1) {
          tempArr[i].checked = true;
        }
      }
    }
    function updateCheckCircle(list, num) {
      if (list.length > num) {
        list.shift();
      }
      this.setState({
        list,
      });
    }
    this.setState(
      list,
    );
    this.staticCount.call(this);
  }
  staticCount() {
    const {
      oneStarList,
      twoStarList,
      twoGStarList,
      threeStarList,
      threeDStarList,
      threeSStarList,
      fiveStarList,
      fiveTStarList,
      sizeStarList,
    } = this.state;
    const tempList = [];
    let count = 0;
    calcCount(oneStarList, '一星直选', 1);
    calcCount(twoStarList, '二星直选', 2);
    calcCount(twoGStarList, '二星组选', 2);
    calcCount(threeStarList, '一星直选', 1);
    calcCount(threeDStarList, '一星直选', 1);
    calcCount(threeSStarList, '一星直选', 1);
    calcCount(fiveStarList, '一星直选', 1);
    calcCount(fiveTStarList, '一星直选', 1);
    calcCount(sizeStarList, '一星直选', 1);
    this.props.clearCQSSC();
    function calcCount(list) {
      const tempCode = [];
      list.forEach((i) => {
        if (i.displayName === '二星直选') {
          i.total.forEach((item) => {
            if (item.checked) {
              tempCode.push(item.displayName);
            }
          });
          if (tempCode.length === 2) {
            tempList.push({
              index: count,
              type: i.displayName,
              code: tempCode.join(','),
            });
            count += 1;
          }
          console.log(tempList, 'tempList');
        }
        /*
        i.total.forEach((item) => {
          if (item.checked) {
            tempList.push({
              index: count,
              type: i.displayName,
              code: item.displayName,
            });
            count += 1;
          }
        });*/
      });
    }
    this.props.updateCQSSC(tempList);
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
  handleOk(CQSSC, times, serialCode) {
    const self = this;
    const payload = {
      data: {
        category: 'CQSSC',
        numbers: JSON.stringify(CQSSC),
        times,
        serialCode,
      },
      cb() {
        message.success('购买成功');
        self.setState({
          visible: false,
        });
        CQSSC = [];
        self.props.updateCQSSC(CQSSC);
        const {
          totalList,
          pkList,
        } = self.state;
        clear(totalList);
        clear(pkList);
        function clear(list) {
          list.forEach((i) => {
            i.total.forEach((item) => {
              item.checked = false;
            });
          });
          self.setState({
            list,
          });
        }
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
    this.props.delCQSSCItem(item.index);
  }
  render() {
    const {
      trend,
      home,
    } = this.props;
    const {
      content,
      headInfo,
      isLoading,
    } = trend;
    const {
      CQSSC,
      rate,
    } = home;
    const {
      oneStarList,
      twoStarList,
      twoGStarList,
      threeStarList,
      threeDStarList,
      threeSStarList,
      fiveStarList,
      fiveTStarList,
      sizeStarList,
    } = this.state;
    const columns = [
      { title: '种类', dataIndex: 'type', key: 'type' },
      { title: '号码', dataIndex: 'code', key: 'code' },
      { title: '操作', dataIndex: '', key: 'x', render: record => <Icon type="delete" onClick={this.delItem.bind(this, record)} /> },
    ];
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
                        <Col xs={5} sm={3} className={styles.selCtitle}>{items.title}</Col>
                        <Col xs={17} sm={19} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col xs={6} sm={4} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, oneStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            );
                          })
                        }</Col>
                      </Col>
                    );
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
                        <Col xs={5} sm={3} className={styles.selCtitle}>{items.title}</Col>
                        <Col xs={17} sm={19} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, twoStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            );
                          })
                        }</Col>
                      </Col>
                    );
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
                        <Col xs={5} sm={3} className={styles.selCtitle}>{items.title}</Col>
                        <Col xs={17} sm={19} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, twoGStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            );
                          })
                        }</Col>
                      </Col>
                    );
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
                        <Col xs={5} sm={3} className={styles.selCtitle}>{items.title}</Col>
                        <Col xs={17} sm={19} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, threeStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            );
                          })
                        }</Col>
                      </Col>
                    );
                  })
                  : ''
              }
            </TabPane>
            {/*
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
                                  <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, threeDStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                   <Col className={styles.rate}>{item.rate}</Col>
                                </label>
                              </Col>
                            );
                          })
                        }</Col>
                      </Col>
                    );
                  })
                  : ''
              }
            </TabPane>
            */}
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
                        <Col xs={5} sm={3} className={styles.selCtitle}>{items.title}</Col>
                        <Col xs={17} sm={19} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, threeSStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            );
                          })
                        }</Col>
                      </Col>
                    );
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
                        <Col xs={5} sm={3} className={styles.selCtitle}>{items.title}</Col>
                        <Col xs={17} sm={19} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, fiveStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            );
                          })
                        }</Col>
                      </Col>
                    );
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
                        <Col xs={5} sm={3} className={styles.selCtitle}>{items.title}</Col>
                        <Col xs={17} sm={19} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, fiveTStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            );
                          })
                        }</Col>
                      </Col>
                    );
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
                        <Col xs={5} sm={3} className={styles.selCtitle}>{items.title}</Col>
                        <Col xs={17} sm={19} offset={2}>{
                          items.total.map((item, index) => {
                            return (
                              <Col span={6} className={styles.selWrap} key={index} >
                                <label htmlFor={item.id}>
                                  <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, sizeStarList)} id={item.id} checked={item.checked} />
                                  <Row className={styles.selBox}>
                                    <Col className={styles.selTitle} >{item.displayName}</Col>
                                  </Row>
                                  {/* <Col className={styles.rate}>{item.rate}</Col> */}
                                </label>
                              </Col>
                            );
                          })
                        }</Col>
                      </Col>
                    );
                  })
                  : ''
              }
            </TabPane>
          </Tabs>
        </Col>
        <Col span={24} className={styles.foot} >
          <Col span={8} className={styles.detail} >
            <Icon type="delete" onClick={this.delItem.bind(this)} />
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
            <Button size="large" type="primary" onClick={this.openModal.bind(this)}>投注</Button>
          </Col>
        </Col>
        <Modal
          title={`已选择列表 (共${CQSSC.length}注,${rate}倍,${2 * CQSSC.length * rate}分)`}
          visible={this.state.visible}
          onOk={this.handleOk.bind(this, CQSSC, rate, headInfo.nextSerialCode)}
          confirmLoading={isLoading}
          onCancel={this.handleCancel.bind(this)}
        >
          <Table
            size="small"
            columns={columns}
            dataSource={CQSSC}
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
    getOpenList() {
      dispatch({ type: 'trend/getOpenList' });
    },
    updateCQSSC(list) {
      dispatch({ type: 'home/updateCQSSC', payload: list });
    },
    updateRate(v) {
      dispatch({ type: 'home/updateRate', payload: v });
    },
    delCQSSCItem(index) {
      dispatch({ type: 'home/delCQSSCItem', payload: index });
    },
    clearCQSSC() {
      dispatch({ type: 'home/clearCQSSC' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CQSSC);
