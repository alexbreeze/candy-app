// import { queryURL } from '../utils';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'menu',
  state: {
    menuMap: {
      '/home': ['0'],
      '/trend': ['1'],
      '/lucky': ['2'],
    },
  },

  effects: {
    *getMenuList({
             payload,
           }, { put }) {
      yield put({ type: 'menuList' });
    },
    *back({ payload }, { put }) {
      yield put(routerRedux.push(`/candyApp${payload}`));
    },
  },
  reducers: {
    menuList(state) {
      return {
        ...state,
        menus: [
          { id: 'home', type: 'home', title: '首页', linkPage: '/home' },
          { id: 'trend', type: 'line-chart', title: '走势图', linkPage: '/trend' },
          { id: 'lucky', type: 'user', title: '我的', linkPage: '/lucky' },
        ],
      };
    },
  },
};
