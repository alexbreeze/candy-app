import React from 'react';
import { connect } from 'dva';
import { Row, Col, Tabs, Button, Carousel, Input, Modal, Table, Icon, message } from 'antd';
import Draggable, { DraggableCore } from 'react-draggable';
import HeadMenu from '../../../components/headMenu';
import CQSSCTOP from '../../../components/CQSSCTop';
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
          title: '选号',
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
          type: 'ST9',
          displayName: '五星通选',
          total: [{
            id: 'ST90',
            displayName: '0',
            rate: '1',
            checked: false,
          }, {
            id: 'ST91',
            displayName: '1',
            rate: '8',
            checked: false,
          }, {
            id: 'ST92',
            displayName: '2',
            rate: '4',
            checked: false,
          }, {
            id: 'ST93',
            displayName: '3',
            rate: '3',
            checked: false,
          }, {
            id: 'ST94',
            displayName: '4',
            rate: '0',
            checked: false,
          }, {
            id: 'ST95',
            displayName: '5',
            rate: '1',
            checked: false,
          }, {
            id: 'ST96',
            displayName: '6',
            rate: '2',
            checked: false,
          }, {
            id: 'ST97',
            displayName: '7',
            rate: '14',
            checked: false,
          }, {
            id: 'ST98',
            displayName: '8',
            rate: '5',
            checked: false,
          }, {
            id: 'ST99',
            displayName: '9',
            rate: '11',
            checked: false,
          },
          ],
        },
        {
          title: '百位',
          type: 'SH9',
          displayName: '五星通选',
          total: [{
            id: 'SH90',
            displayName: '0',
            rate: '3',
            checked: false,
          }, {
            id: 'SH91',
            displayName: '1',
            rate: '8',
            checked: false,
          }, {
            id: 'SH92',
            displayName: '2',
            rate: '2',
            checked: false,
          }, {
            id: 'SH93',
            displayName: '3',
            rate: '9',
            checked: false,
          }, {
            id: 'SH94',
            displayName: '4',
            rate: '15',
            checked: false,
          }, {
            id: 'SH95',
            displayName: '5',
            rate: '4',
            checked: false,
          }, {
            id: 'SH96',
            displayName: '6',
            rate: '20',
            checked: false,
          }, {
            id: 'SH97',
            displayName: '7',
            rate: '0',
            checked: false,
          }, {
            id: 'SH98',
            displayName: '8',
            rate: '1',
            checked: false,
          }, {
            id: 'SH99',
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
      sizeTotal: [
        {
          title: '总和/龙虎',
          type: 'S10All',
          displayName: '总和/龙虎',
          total: [{
            id: 'SAB',
            displayName: '大',
            type: '总和/龙虎',
            rate: '5',
            checked: false,
          },
          {
            id: 'SAS',
            displayName: '小',
            type: '总和/龙虎',
            rate: '10',
            checked: false,
          },
          {
            id: 'SAO',
            displayName: '单',
            type: '总和/龙虎',
            rate: '3',
            checked: false,
          },
          {
            id: 'SAE',
            displayName: '双',
            type: '总和/龙虎',
            rate: '4',
            checked: false,
          },
          {
            id: 'SAA1',
            displayName: '龙',
            type: '总和/龙虎',
            rate: '4',
            checked: false,
          },
          {
            id: 'SAB2',
            displayName: '虎',
            type: '总和/龙虎',
            rate: '4',
            checked: false,
          },
          {
            id: 'SAC3',
            displayName: '和',
            type: '总和/龙虎',
            rate: '4',
            checked: false,
          },
          ],
        },
      ],
      rateObj: {
        一星直选: 1,
        二星直选: 1,
        二星组选: 1,
        三星直选: 1,
        三星组三: 1,
        三星组六: 1,
        五星直选: 1,
        五星通选: 1,
        大小单双: 1,
        总和大小: 1,
        总和单双: 1,
        龙: 1,
        虎: 1,
        和: 1,
      },
      visible: false,
      isShow: false,
      showTime: '00:00',
      one: [],
      two: [],
      three: [],
      four: [],
      five: [],
      maxRate: 0,
      result: {},
      tab: '一星直选',
    };
  }
  componentDidMount() {
    const self = this;
    this.props.getOpenList();
    let ctrl = this.props.home.timerCtrl;
    if (ctrl) {
      ctrl = false;
      self.props.updateCtrl(ctrl);
      this.props.getOpenList(doNext);
      function doNext(data) {
        data.forEach((i) => {
          i.overTime = (i.nextStopTime - new Date().getTime()) / 1000;
          let minute = `${Math.floor(i.overTime / 60)}`;
          if (minute.length === 1) {
            minute = `0${minute}`;
          }
          let sec = `${Math.floor(i.overTime % 60)}`;
          if (sec.length === 1) {
            sec = `0${sec}`;
          }
          i.showTime = `${minute}:${sec}`;
          if (i.overTime < 0) {
            i.showTime = '已结束';
          }
        });
        self.props.updateContent(data);
        clearInterval(timer);
        let flag = true;
        let timer = setInterval(() => {
          data.forEach((i) => {
            i.overTime -= 1;
            let minute = `${Math.floor(i.overTime / 60)}`;
            if (minute.length === 1) {
              minute = `0${minute}`;
            }
            let sec = `${Math.floor(i.overTime % 60)}`;
            if (sec.length === 1) {
              sec = `0${sec}`;
            }
            i.showTime = `${minute}:${sec}`;
            if (i.overTime < 0) {
              i.showTime = '已结束';
            }
          });
          self.props.updateContent(data);
          if (flag) {
            flag = false;
            setTimeout(() => {
              self.props.getOpenList(doNext);
              setTimeout(() => {
                clearInterval(timer);
              }, 1000);
            }, 30000);
          }
        }, 1000);
      }
    }
    this.props.getOpenList();
    this.props.getRate({
      data: {
        type: 'CQSSC',
      },
      cb(data) {
        const state = self.state;
        self.state.rateObj = data;
        let maxRate = 1;
        maxRate = maxRate>data.总和大小?maxRate:data.总和大小;
        maxRate = maxRate>data.总和单双?maxRate:data.总和单双;
        maxRate = maxRate>data.龙?maxRate:data.龙;
        maxRate = maxRate>data.虎?maxRate:data.虎;
        self.state.rateObj.总和大小单双龙虎 = maxRate;
        self.setState({
          state,
        });
      },
    });
    this.props.updateTypeNow('一星直选');
  }
  // 获取buyList
  getBuyList() {
    const self = this;
    this.props.getBuyList({
      data: {
        category: 'CQSSC',
        serialCode: this.props.trend.headInfo.latestSerialCode,
        numberType: this.state.tab,
      },
      cb(buyList) {
        self.props.updateBuyList(buyList);
        self.setState({
          visible: true,
        });
      },
    });
  }
  changeShow() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  chooseTab(index) {
    const self = this;
    let tab = '一星直选';
    switch (index) {
      case '0':
        tab = '一星直选';
        break;
      case '1':
        tab = '二星直选';
        break;
      case '2':
        tab = '二星组选';
        break;
      case '3':
        tab = '三星直选';
        break;
      case '6':
        tab = '三星组六';
        break;
      case '7':
        tab = '五星直选';
        break;
      case '8':
        tab = '五星通选';
        break;
      case '9':
        tab = '大小单双';
        break;
      case '10':
        tab = '总和';
        break;
      default:
        break;
    }
    self.setState({
      tab,
    });
  }
  // 改变状态
  changeChecked(list, str, ev) {
    const CQSSC = this.props.home.CQSSC;
    const self = this;
    if (CQSSC.length && list[0].displayName !== CQSSC[0].type) {
      self.props.updateRate(1);
      self.clear.call(self, self.state.oneStarList);
      self.clear.call(self, self.state.twoStarList);
      self.clear.call(self, self.state.twoGStarList);
      self.clear.call(self, self.state.threeStarList);
      self.clear.call(self, self.state.threeDStarList);
      self.clear.call(self, self.state.threeSStarList);
      self.clear.call(self, self.state.fiveStarList);
      self.clear.call(self, self.state.fiveTStarList);
      self.clear.call(self, self.state.sizeStarList);
      self.clear.call(self, self.state.sizeTotal);
    }
    let tempArr = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].title === ev.target.value) {
        tempArr = list[i].total;
        break;
      }
    }
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i].id === ev.target.id) {
        tempArr[i].checked = !tempArr[i].checked;
      }
    }
    setTimeout(() => {
      this.setState(
        list,
      );
    }, 20);
    this.staticCount.call(this, list, str);
  }
  staticCount(data, str) {
    const self = this;
    const detail = {};
    switch (str) {
      case 'oneStarList':
        detail.name = '一星直选';
        detail.flag = 1;
        detail.max = 1;
        break;
      case 'twoStarList':
        detail.name = '二星直选';
        detail.flag = 1;
        detail.max = 2;
        break;
      case 'twoGStarList':
        detail.name = '二星组选';
        detail.flag = 2;
        detail.max = 2;
        break;
      case 'threeStarList':
        detail.name = '三星直选';
        detail.flag = 1;
        detail.max = 3;
        break;
      case 'threeSStarList':
        detail.name = '三星组六';
        detail.flag = 2;
        detail.max = 3;
        break;
      case 'fiveStarList':
        detail.name = '五星直选';
        detail.flag = 1;
        detail.max = 5;
        break;
      case 'fiveTStarList':
        detail.name = '五星通选';
        detail.flag = 1;
        detail.max = 5;
        break;
      case 'sizeStarList':
        detail.name = '大小单双';
        detail.flag = 1;
        detail.max = 2;
        break;
      case 'sizeTotal':
        detail.name = '总和';
        detail.flag = 1;
        detail.max = 1;
        break;
      default:
        break;
    }
    let {
      one,
      two,
      three,
      four,
      five,
      showTime,
    } = this.state;
    const tempList = [];
    let result = {};
    calcCount(data, detail.name, detail.flag, detail.max);
    this.props.clearCQSSC();
    function calcCount(list, name, flag, max) {
      one = [];
      two = [];
      three = [];
      four = [];
      five = [];
      let tempOne = '';
      let tempTwo = '';
      let tempThree = '';
      let tempFour = '';
      let tempFive = '';
      const extra = [];
      const rateObj = self.state.rateObj;
      if (flag === 1) {
        list.forEach((i) => {
          i.total.forEach((item) => {
            if (item.checked) {
              if (i.title === '个位') {
                one.push(item.displayName);
              }
              if (i.title === '十位') {
                two.push(item.displayName);
              }
              if (i.title === '百位') {
                three.push(item.displayName);
              }
              if (i.title === '千位') {
                four.push(item.displayName);
              }
              if (i.title === '万位') {
                five.push(item.displayName);
              }
              if (i.title === '总和/龙虎') {
                extra.push({
                  type: item.type,
                  code: item.displayName,
                });
              }
            }
          });
        });
        if (one.length) {
          one.forEach((a) => {
            if (two.length) {
              two.forEach((b) => {
                if (three.length) {
                  three.forEach((c) => {
                    if (four.length) {
                      four.forEach((d) => {
                        if (five.length) {
                          five.forEach((e) => {
                            tempList.push({
                              index: tempList.length,
                              type: name,
                              rate: rateObj[name],
                              code: `${e},${d},${c},${b},${a}`,
                            });
                          });
                        } else if (max <= 4) {
                          tempList.push({
                            index: tempList.length,
                            type: name,
                            rate: rateObj[name],
                            code: `${d},${c}${b},${a}`,
                          });
                        }
                      });
                    } else if (max <= 3) {
                      tempList.push({
                        index: tempList.length,
                        type: name,
                        rate: rateObj[name],
                        code: `${c},${b},${a}`,
                      });
                    }
                  });
                } else if (max <= 2) {
                  tempList.push({
                    index: tempList.length,
                    type: name,
                    rate: rateObj[name],
                    code: `${b},${a}`,
                  });
                }
              });
            } else if (max <= 1) {
              tempList.push({
                index: tempList.length,
                type: name,
                rate: rateObj[name],
                code: a,
              });
            }
          });
        }
        if (one.length) {
          tempOne = one.join('|');
          if (two.length) {
            tempTwo = two.join('|');
            if (three.length) {
              tempThree = three.join('|');
              if (four.length) {
                tempFour = four.join('|');
                if (five.length) {
                  tempFive = five.join('|');
                  result = {
                    type: name,
                    code: `${tempFive},${tempFour},${tempThree},${tempTwo},${tempOne}`,
                  };
                } else if (max <= 4) {
                  result = {
                    type: name,
                    code: `${tempFour},${tempThree},${tempTwo},${tempOne}`,
                  };
                }
              } else if (max <= 3) {
                result = {
                  type: name,
                  code: `${tempThree},${tempTwo},${tempOne}`,
                };
              }
            } else if (max <= 2) {
              result = {
                type: name,
                code: `${tempTwo},${tempOne}`,
              };
            }
          } else if (max <= 1) {
            result = {
              type: name,
              code: `${tempOne}`,
            };
          }
        }
        if (extra.length) {
          let tempV = '';
          extra.forEach((i) => {
            let rate = '';
            if(name === '总和'){
              if(i.code === '大' || i.code === '小'){
                rate = rateObj.总和大小;
              }else if(i.code === '单' || i.code === '双'){
                rate = rateObj.总和单双;
              }else {
                rate = rateObj[i.code];
              }
            }else {
              rate = rateObj[name];
            }
            tempList.push({
              index: tempList.length,
              type: i.type,
              rate: rate,
              code: i.code,
            });
            tempV += `${i.code}|`;
          });
          tempV = tempV.substr(0, tempV.length - 1);
          result = {
            type: name,
            code: tempV,
          };
        }
      } else if (flag === 2) {
        list.forEach((i) => {
          i.total.forEach((item) => {
            if (item.checked) {
              one.push(item.displayName);
            }
          });
          if (one.length) {
            const tempV = one.join('|');
            result = {
              type: name,
              code: tempV,
            };
          }
          if (one.length >= max && max === 3) {
            for (let i = 0; i < one.length; i++) {
              for (let j = 0; j < i; j++) {
                for (let k = 0; k < j; k++) {
                  tempList.push({
                    index: tempList.length,
                    type: name,
                    rate: rateObj[name],
                    code: `${one[i]},${one[j]},${one[k]}`,
                  });
                }
              }
            }
          } else if (one.length >= max && max === 2) {
            for (let i = 0; i < one.length; i++) {
              for (let j = 0; j < i; j++) {
                tempList.push({
                  index: tempList.length,
                  type: name,
                  rate: rateObj[name],
                  code: `${one[i]},${one[j]}`,
                });
              }
            }
          }
        });
      }
    }
    self.setState({
      result,
    });
    let maxRate = 0;
    let totalRate = 0;
    tempList.forEach((item) => {
      totalRate += item.rate;
    });
    maxRate = totalRate * this.props.home.rate;
    this.setState({
      maxRate,
    });
    this.props.updateCQSSC(tempList);
    setTimeout(() => {
      const buyList = {
        category: 'CQSSC',
        numberType: this.state.result.type,
        numbers: this.state.result.code,
        serialCode: this.props.trend.headInfo.nextSerialCode,
        times: this.props.home.rate,
        count: tempList.length,
        amount: this.props.home.rate * tempList.length * 2,
        repeatTimes: 0,
      };
      this.props.updateBuyList(buyList);
    }, 20);
  }

  // 更改倍数
  calcRate(e) {
    const rate = +e.target.value;
    if (isNaN(rate)) {
      return false;
    }
    this.props.updateRate(rate);
    setTimeout(() => {
      let maxRate = 0;
      let totalRate = 0;
      this.props.home.CQSSC.forEach((item) => {
        totalRate += item.rate;
      });
      maxRate = totalRate * this.props.home.rate;
      this.setState({
        maxRate,
      });
    }, 20);
  }
  changeRate(flag) {
    let rate = this.props.home.rate;
    rate += +flag;
    rate = rate <= 0 ? 1 : rate;
    this.props.updateRate(rate);
    setTimeout(() => {
      let maxRate = 0;
      let totalRate = 0;
      this.props.home.CQSSC.forEach((item) => {
        totalRate += item.rate;
      });
      maxRate = totalRate * this.props.home.rate;
      this.setState({
        maxRate,
      });
    }, 20);
  }
  // 更改追注
  calcRepeat(e) {
    const repeat = +e.target.value;
    if (isNaN(repeat)) {
      return false;
    }
    this.props.updateRepeat(repeat);
  }
  changeRepeat(flag) {
    let repeat = this.props.home.repeat;
    repeat += +flag;
    repeat = repeat < 0 ? 0 : repeat;
    this.props.updateRepeat(repeat);
  }
  openModal() {
    this.setState({
      visible: true,
    });
  }
  handleOk(result, times, repeatTimes, serialCode) {
    const self = this;
    const payload = {
      data: {
        category: 'CQSSC',
        numberType: result.type,
        numbers: result.code,
        times,
        repeatTimes,
        serialCode,
      },
      cb() {
        message.success('购买成功');
        self.setState({
          visible: false,
          maxRate: 0,
        });
        const arr = [];
        self.props.updateCQSSC(arr);
        self.props.updateBuyList({
          category: 'CQSSC',
          serialCode: '',
          times: 0,
          count: 0,
          amount: 0,
          numberType: '',
          numbers: '',
        });
        self.clear.call(self, self.state.oneStarList);
        self.clear.call(self, self.state.twoStarList);
        self.clear.call(self, self.state.twoGStarList);
        self.clear.call(self, self.state.threeStarList);
        self.clear.call(self, self.state.threeDStarList);
        self.clear.call(self, self.state.threeSStarList);
        self.clear.call(self, self.state.fiveStarList);
        self.clear.call(self, self.state.fiveTStarList);
        self.clear.call(self, self.state.sizeStarList);
        self.clear.call(self, self.state.sizeTotal);
        self.props.updateRate(1);
      },
    };
    this.props.sendBuy(payload);
  }
  clear(list) {
    list.forEach((i) => {
      i.total.forEach((item) => {
        item.checked = false;
      });
    });
    setTimeout(() => {
      this.setState({
        list,
      });
    }, 20);
  }
  handleCancel() {
    this.setState({
      visible: false,
    });
    this.props.updateRate(1);
  }
  delItem(item) {
    this.props.delCQSSCItem(item.index);
  }
  clearBuyList() {
    this.props.updateBuyList({
      category: 'CQSSC',
      serialCode: '',
      times: 0,
      count: 0,
      amount: 0,
      numberType: '',
      numbers: '',
    });
    const arr = [];
    this.props.updateCQSSC(arr);
    this.clear.call(this, this.state.oneStarList);
    this.clear.call(this, this.state.twoStarList);
    this.clear.call(this, this.state.twoGStarList);
    this.clear.call(this, this.state.threeStarList);
    this.clear.call(this, this.state.threeDStarList);
    this.clear.call(this, this.state.threeSStarList);
    this.clear.call(this, this.state.fiveStarList);
    this.clear.call(this, this.state.fiveTStarList);
    this.clear.call(this, this.state.sizeStarList);
    this.clear.call(this, this.state.sizeTotal);
  }
  changeSel(value) {
    this.props.updateTypeNow(value);
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
      typeNow,
    } = trend;
    const {
      CQSSC,
      rate,
      repeat,
      buyList,
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
      sizeTotal,
      isShow,
      showTime,
      rateObj,
      result,
    } = this.state;
    const selTitle = [
      {
        value: '一星直选',
      },
      {
        value: '二星直选',
      },
      {
        value: '二星组选',
      },
      {
        value: '三星直选',
      },
      {
        value: '三星组六',
      },
      {
        value: '五星直选',
      },
      {
        value: '五星通选',
      },
      {
        value: '大小单双',
      },
      {
        value: '总和龙虎',
      },
    ];
    const columns = [
      { title: '种类', dataIndex: 'type', key: 'type' },
      { title: '号码', dataIndex: 'code', key: 'code' },
      { title: '操作', dataIndex: '', key: 'x', render: record => <Icon type="delete" onClick={this.delItem.bind(this, record)} /> },
    ];
    return (
      <Row className={styles.CQSSC}>
        <Col span={24}>
          <HeadMenu back="/home" detail="/CQSSC-detail" showInfo selTitle={selTitle} changeSel={this.changeSel.bind(this)} />
        </Col>
        <Col span={24} className={styles.head} >
          <Row>
            <Col span={16} >
              <Row>
                <Col span={18} style={{ fontSize: '14px' }}>{headInfo.latestSerialCode}期开奖</Col>
                <Col span={2} onClick={this.changeShow.bind(this)}>
                  历史
                  <Icon type="down" />
                </Col>
                <Col span={24}>
                  {
                    headInfo.code ?
                      headInfo.code.map((i, index) => {
                        return (
                          <Col
                            span={2}
                            key={index}
                            className={`openCode openCodeSmall openCodeCQSSC${i}`}
                          >
                            {
                              i
                            }
                          </Col>
                        );
                      }) : '开奖中'
                  }
                </Col>
              </Row>
            </Col>
            <Col span={8} className={styles.nextSerialCode} >
              <Row>
                <Col span={24}>
                  距{headInfo.nextSerialCode}期截止
                </Col>
                <Col span={24}>
                  {content.length ? content[2].showTime : showTime}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24} className={styles.main}>
          <Row>
            <Col span={24} className={styles.info}>
              {/* <Carousel vertical autoplay focusOnSelect dots={false} >
                <Row style={{ color: '#fff' }}>我是一段tip信息</Row>
                <Row style={{ color: '#fff' }}>我是一段tip信息</Row>
                <Row style={{ color: '#fff' }}>我是一段tip信息</Row>
              </Carousel> */}
              <CQSSCTOP isShow={isShow} />
            </Col>
          </Row>
          {/* <Tabs renderTabBar renderTabContent defaultActiveKey="0" onTabClick={this.chooseTab.bind(this)}>*/}
          {/* <TabPane tab="一星直选" key="0" >*/}
          {
            typeNow === '一星直选' ?
              (
                <div>
                  <Row>
                    <Col span={24} className={styles.itemWrap}>
                      <span className={styles.itemDetail}>
                    至少选1个号码，猜对开奖号码最后一位即中{rateObj['一星直选']}元
                  </span>
                    </Col>
                  </Row>
                  {
                    oneStarList.length ?
                      oneStarList.map((items, index) => {
                        return (
                          <Col span={24} className={styles.selContainer} key={index}>
                            <Col xs={3} sm={3} className={styles.selCtitle}>{items.title}</Col>
                            <Col xs={19} sm={19} offset={2}>{
                              items.total.map((item, index) => {
                                return (
                                  <Col xs={6} sm={4} className={styles.selWrap} key={index} >
                                    <label htmlFor={item.id}>
                                      <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, oneStarList, 'oneStarList')} id={item.id} checked={item.checked} />
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
                </div>
              ) : ''
          }
          {/* </TabPane>*/}
          {/* <TabPane tab="二星直选" key="1" >*/}
          {
            typeNow === '二星直选' ?
              (
                <div>
                  <Row>
                    <Col span={24} className={styles.itemWrap}>
                      <span className={styles.itemDetail}>
                    至少选1个号码，按位猜对开奖后两位即中{rateObj['二星直选']}元
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
                                      <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, twoStarList, 'twoStarList')} id={item.id} checked={item.checked} />
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
                </div>
              ) : ''
          }
          {/* </TabPane>*/}
          {/* <TabPane tab="二星组选" key="2" >*/}
          {
           typeNow === '二星组选' ?
             (
               <div>
                 <Row>
                   <Col span={24} className={styles.itemWrap}>
                     <span className={styles.itemDetail}>
                    至少选2个号码，猜对开奖后两位(顺序不限)即中{rateObj['二星组选']}元
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
                                     <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, twoGStarList, 'twoGStarList')} id={item.id} checked={item.checked} />
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
               </div>
             ) : ''
          }
          {/* </TabPane>*/}
          {/* <TabPane tab="三星直选" key="3" >*/}
          {
              typeNow === '三星直选' ?
                (
                  <div>
                    <Row>
                      <Col span={24} className={styles.itemWrap}>
                        <span className={styles.itemDetail}>
                    每位至少选1个号码，按位猜对开奖后3位即中{rateObj['三星直选']}元
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
                                        <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, threeStarList, 'threeStarList')} id={item.id} checked={item.checked} />
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
                  </div>
                ) : ''
            }
          {/* </TabPane>*/}
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
          {/* <TabPane tab="三星组六" key="6" >*/}
          {
            typeNow === '三星组六' ?
              (
                <div>
                  <Row>
                    <Col span={24} className={styles.itemWrap}>
                      <span className={styles.itemDetail}>
                    至少选3个号，猜对开奖后3位(顺序不限)即中{rateObj['三星组六']}元
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
                                      <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, threeSStarList, 'threeSStarList')} id={item.id} checked={item.checked} />
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
                </div>
              ) : ''
          }
          {/* </TabPane>*/}
          {/* <TabPane tab="五星直选" key="7" >*/}
          {
            typeNow === '五星直选' ?
              (
                <div>
                  <Row>
                    <Col span={24} className={styles.itemWrap}>
                      <span className={styles.itemDetail}>
                    每位至少选1个号码，按位猜对开奖号即中{rateObj['五星直选']}元
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
                                      <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, fiveStarList, 'fiveStarList')} id={item.id} checked={item.checked} />
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
                </div>
              ) : ''
          }
          {/* </TabPane>*/}
          {/* <TabPane tab="五星通选" key="8" >*/}
          {
            typeNow === '五星通选' ?
              (
                <div>
                  <Row>
                    <Col span={24} className={styles.itemWrap}>
                      <span className={styles.itemDetail}>
                    每位至少选1个号码，按位猜对开奖号最高奖{rateObj['五星通选']}元
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
                                      <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, fiveTStarList, 'fiveTStarList')} id={item.id} checked={item.checked} />
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
                </div>
              ) : ''
          }
          {/* </TabPane>*/}
          {/* <TabPane tab="大小单双" key="9" >*/}
          {
            typeNow === '大小单双' ?
              (
                <div>
                  <Row>
                    <Col span={24} className={styles.itemWrap}>
                      <span className={styles.itemDetail}>
                        每位至少选1个号码，猜对开奖后2位的属性即中{rateObj['大小单双']}元
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
                                      <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, sizeStarList, 'sizeStarList')} id={item.id} checked={item.checked} />
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
                </div>
              ) : ''
          }
          {
            typeNow === '总和龙虎' ?
              (
                <div>
                  <Row>
                    <Col span={24} className={styles.itemWrap}>
                      <span className={styles.itemDetail}>
                        选中总和大小/单双/龙/虎，最高中{rateObj['总和大小单双龙虎']}元；选中和值，中{rateObj['和']}元
                      </span>
                    </Col>
                  </Row>
                  {
                    sizeTotal.length ?
                      sizeTotal.map((items, index) => {
                        return (
                          <Col span={24} className={styles.selContainer} key={index}>
                            <Col xs={5} sm={3} className={styles.selCtitle}>{items.title}</Col>
                            <Col xs={17} sm={19} offset={2}>{
                              items.total.map((item, index) => {
                                return (
                                  <Col span={6} className={styles.selWrap} key={index} >
                                    <label htmlFor={item.id}>
                                      <input type="checkbox" className={styles.selCheckBox} value={items.title} onChange={this.changeChecked.bind(this, sizeTotal, 'sizeTotal')} id={item.id} checked={item.checked} />
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
                </div>
              ) : ''
          }
          {/* </TabPane>*/}
          {/* </Tabs>*/}
          <div className={styles.lastWrap}>
            <Draggable defaultPosition={{ x: 0, y: 0 }}>
              <div className={styles.lastOne} onClick={this.getBuyList.bind(this)} >追上期</div>
            </Draggable>
          </div>
        </Col>
        <Col span={CQSSC.length ? 24 : 0} className={styles['foot-modal']}>
          <Col span={12} className={styles['foot-inner']} >
            投
            <div className={`${styles['icon-wrap']} ${rate === 1 ? styles.gray : ''}`} style={{ borderRight: 'none', borderRadius: '4px 0 0 4px' }} >
              <Icon type="minus" onClick={this.changeRate.bind(this, -1)} />
            </div>
            <div>
              <Input
                type="text"
                value={rate}
                onChange={this.calcRate.bind(this)}
                style={{ border: 'none', outline: 'none', width: '60px', borderRadius: 0, height: '32px' }}
              />
            </div>
            <div className={styles['icon-wrap']} style={{ borderLeft: 'none', borderRadius: '0 4px 4px 0' }}>
              <Icon type="plus" onClick={this.changeRate.bind(this, 1)} />
            </div>
            倍
          </Col>
          {/*
          <Col span={12} className={styles['foot-inner']} >
            追
            <div className={`${styles['icon-wrap']} ${repeat === 0 ? styles.gray : ''}`} style={{ borderRight: 'none', borderRadius: '4px 0 0 4px' }} >
              <Icon type="minus" onClick={this.changeRepeat.bind(this, -1)} />
            </div>
            <div>
              <Input
                type="text"
                value={repeat}
                onChange={this.calcRepeat.bind(this)}
                style={{ border: 'none', outline: 'none', width: '60px', borderRadius: 0, height: '32px' }}
              />
            </div>
            <div className={styles['icon-wrap']} style={{ borderLeft: 'none', borderRadius: '0 4px 4px 0' }}>
              <Icon type="plus" onClick={this.changeRepeat.bind(this, 1)} />
            </div>
            注
          </Col>
          */}
        </Col>
        <Col span={24} className={styles.foot} >
          <Col span={8} className={styles.detail} >{CQSSC.length}注，共{2 * CQSSC.length * rate}元</Col>
          <Col span={8} className={styles.detail} >最高可中{this.state.maxRate}元</Col>
          <Col span={6} offset={2} className={styles.submit} >
            <Button size="large" type="primary" style={{ background: '#e95525' }} onClick={this.openModal.bind(this)}>投注</Button>
          </Col>
        </Col>
        <Modal
          title={`已选择彩票 (共${buyList.count}注,${buyList.times}倍,${buyList.amount}元)`}
          visible={this.state.visible}
          onOk={this.handleOk.bind(this, result, rate, repeat, headInfo.nextSerialCode)}
          confirmLoading={isLoading}
          onCancel={this.handleCancel.bind(this)}
        >
          <Row>
            <Col span={22} className={styles['modal-left']} >
              <Col span={24} className={styles['modal-type']} >
                <span>类型：</span>
                <span>{buyList.numberType}</span>
              </Col>
              <Col span={24} className={styles['modal-code']} >
                <span>号码：</span>
                <span>{buyList.numbers}</span>
              </Col>
            </Col>
            <Col span={1} className={styles['modal-del']} >
              <Icon type="delete" onClick={this.clearBuyList.bind(this)} />
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
    getOpenList(cb) {
      dispatch({ type: 'trend/getOpenList', payload: cb });
    },
    updateContent(payload) {
      dispatch({ type: 'trend/updateContent', payload });
    },
    updateCtrl(payload) {
      dispatch({ type: 'home/updateCtrl', payload });
    },
    updateCQSSC(list) {
      dispatch({ type: 'home/updateCQSSC', payload: list });
    },
    updateRate(v) {
      dispatch({ type: 'home/updateRate', payload: v });
    },
    updateRepeat(v) {
      dispatch({ type: 'home/updateRepeat', payload: v });
    },
    delCQSSCItem(index) {
      dispatch({ type: 'home/delCQSSCItem', payload: index });
    },
    clearCQSSC() {
      dispatch({ type: 'home/clearCQSSC' });
    },
    sendBuy(payload) {
      dispatch({ type: 'home/sendBuy', payload });
    },
    getRate(payload) {
      dispatch({ type: 'home/getRate', payload });
    },
    updateBuyList(payload) {
      dispatch({ type: 'home/updateBuyList', payload });
    },
    getBuyList(payload) {
      dispatch({ type: 'home/getBuyList', payload });
    },
    updateTypeNow(payload) {
      dispatch({ type: 'trend/updateTypeNow', payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CQSSC);
