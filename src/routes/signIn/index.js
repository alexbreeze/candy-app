import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button } from 'antd';
import md5 from 'md5';

import styles from './index.less';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.password = md5(md5(`${values.password}`));
        this.props.signIn(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { login } = this.props;
    const { loginLoading } = login;
    return (
      <Form onSubmit={this.handleSubmit} className={styles['login-form']}>
        <FormItem>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入手机号!' }],
          })(
            <Input prefix={<Icon type="phone" style={{ fontSize: 13 }} />} placeholder="手机号" />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('recommendCode', {
            rules: [{ required: true, message: '请输入推荐码!' }],
          })(
            <Input prefix={<Icon type="idcard" style={{ fontSize: 13 }} />} type="text" placeholder="推荐码" />,
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" loading={loginLoading} htmlType="submit" className={styles['login-form-button']}>
            注册
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn(value) {
      dispatch({ type: 'login/signIn', payload: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
