import { routerRedux } from 'dva/router';
// import { queryURL } from '../utils';
import { getOpenList, getOpenListDetail } from '../services/trend';

export default {
  namespace: 'trend',
  state: {
    content: [],
    contentDetail: [],
    headInfo: {
      code: [],
      nextSerialCode: '',
      latestSerialCode: '',
      nextStopTime: '',
      latestOpenCode: '',
    },
    isLoading: false,
    typeNow: '',
  },

  effects: {
    *getOpenList({ payload }, { put, call }) {
      const data = yield call(getOpenList);
      if (data.success) {
        if (payload) {
          payload(data.list);
        }
        let headInfo = {};
        data.list.forEach((i) => {
          if (i.latestOpenCode) {
            i.latestOpenCodeList = i.latestOpenCode.split(',');
          }
          if (new RegExp(i.type).test(location.hash)) {
            headInfo = {
              code: i.latestOpenCodeList || [],
              nextSerialCode: i.nextSerialCode,
              latestSerialCode: i.latestSerialCode,
              nextStopTime: i.nextStopTime,
              latestOpenCode: i.latestOpenCode,
            };
          }
        });
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
    * updateTypeNow({ payload }, { put }) {
      yield put({ type: 'typeNow', payload });
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
    typeNow(state, { payload }) {
      return {
        ...state,
        typeNow: payload,
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
