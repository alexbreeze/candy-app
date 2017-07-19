import { routerRedux } from 'dva/router';
// import { queryURL } from '../utils';
import { getWinListDetail, getBalanceDetail } from '../services/lucky';

export default {
  namespace: 'lucky',
  state: {
    winList: [],
    banbleDetail: {},
    isLoading: false,
  },
  effects: {
    *getWinListDetail({ payload }, { put, call }) {
      const data = yield call(getWinListDetail, payload);
      if (data.success) {
        console.log(data)
        if (payload) {
          payload(data.list);
        }
        yield put({ type: 'setHeadInfo', payload: headInfo });
        yield put({ type: 'setOpenList', payload: data.list });
      } else {
        if (data.code === '401') {
          yield put({ type: 'logOut', payload: null });
        }
        throw data;
      }
    },



    *updateContent({ payload }, { put }) {
      yield put({ type: 'setOpenList', payload });
    },
    *logOut({ payload }, { put }) {
      yield put(routerRedux.push('/login'));
    },
    *getOpenListDetail({
             payload,
           }, { put, call }) {
      yield put({ type: 'showLoading' });
      const data = yield call(getOpenListDetail, payload);
      yield put({ type: 'hideLoading' });
      if (data.success) {
        data.list.forEach((i) => {
          i.openCodeList = i.openCode.split(',');
        });
        yield put({ type: 'setOpenListDetail', payload: data.list });
      } else {
        throw data;
      }
    },
  },
  reducers: {
    setOpenList(state, { payload }) {
      return {
        ...state,
        content: payload,
      };
    },
    setOpenListDetail(state, { payload }) {
      return {
        ...state,
        contentDetail: payload,
      };
    },
    setHeadInfo(state, { payload }) {
      return {
        ...state,
        headInfo: payload,
      };
    },
    showLoading(state) {
      return {
        ...state,
        isLoading: true,
      };
    },
    hideLoading(state) {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
};
