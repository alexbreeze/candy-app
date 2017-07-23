import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import md5 from 'md5';

import styles from './index.less';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.password = md5(md5(values.password+''));
        this.props.login(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { login } = this.props;
    const {loginLoading} = login;
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
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />,
          )}
        </FormItem>
        <FormItem>
          <a className={styles['login-form-forgot']} href="">忘记密码</a>
          <Button type="primary" loading={loginLoading} htmlType="submit" className={styles['login-form-button']}>
            登陆
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
    login(value) {
      dispatch({ type: 'login/login', payload: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
