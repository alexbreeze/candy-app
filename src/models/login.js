import { routerRedux } from 'dva/router';
import { config } from '../utils';
import { login } from '../services/login';
import { setToken } from '../utils/request';

const { sessionKey } = config;

export default {
  namespace: 'login',
  state: {
    loginLoading: false,
  },

  effects: {
    *login({
             payload,
           }, { put, call }) {
      yield put({ type: 'showLoginLoading' });
      const data = yield call(login, payload);
      yield put({ type: 'hideLoginLoading' });
      if (!data.success) {
        throw data;
      } else {
        sessionStorage.setItem(sessionKey.token, data.token);
        sessionStorage.setItem(sessionKey.userName, data.userName);
        yield put(routerRedux.push('/home'));
        setToken(data.token);
      }
    },
    *logOut({ payload }, { put }) {
      yield put(routerRedux.push('/login'));
    },
  },
  reducers: {
    showLoginLoading(state) {
      return {
        ...state,
        loginLoading: true,
      };
    },
    hideLoginLoading(state) {
      return {
        ...state,
        loginLoading: false,
      };
    },
  },
};
