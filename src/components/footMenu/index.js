import React, { Component } from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';

export default class FootNav extends Component {
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
  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }
  render() {
    const {
      menus,
      menuMap,
    } = this.props;
    return (
      <Col className={styles.foot} xs={24} sm={0}>
        <Row className={styles['foot-text']}>
          <Menu
            theme="dark"
            defaultSelectedKeys={menuMap[location.pathname]}
            selectedKeys={menuMap[location.pathname]}
            mode="horizontal"
          >
            { menus && menus.length ?
              menus.map((menu, index) => {
                return (
                  <Menu.Item key={index} className={styles['foot-menu']}>
                    <Link to={`${menu.linkPage}`}>
                      <Icon type={menu.type} />
                      <span className="nav-text">{menu.title}</span>
                    </Link>
                  </Menu.Item>
                );
              })
              : ''
            }
          </Menu>
        </Row>
      </Col>
    );
  }
}
