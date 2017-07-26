// import { routerRedux } from 'dva/router';
// import { queryURL } from '../utils';
import { message } from 'antd';
import { sendBuyService, getRate } from '../services/home';

export default {
  namespace: 'home',
  state: {
    BJK3: [],
    BJPK10: [],
    CQSSC: [],
    rate: 1,
    repeat: 0,
    timerCtrl: true,
  },

  effects: {
    *updateCtrl({ payload }, { put }) {
      yield put({ type: 'updateCtrlValue', payload });
    },
    *updateBJK3({ payload }, { put }) {
      yield put({ type: 'updateBJK3List', payload });
    },
    *delBJK3Item({ payload }, { put }) {
      yield put({ type: 'delBJK3List', payload });
    },
    *clearBJK3({ payload }, { put }) {
      yield put({ type: 'updateBJK3List', payload: [] });
    },
    *updateBJPK10({ payload }, { put }) {
      yield put({ type: 'updateBJPK10List', payload });
    },
    *delBJPK10Item({ payload }, { put }) {
      yield put({ type: 'delBJPK10List', payload });
    },
    *clearBJPK10({ payload }, { put }) {
      yield put({ type: 'updateBJPK10List', payload: [] });
    },
    *updateCQSSC({ payload }, { put }) {
      yield put({ type: 'updateCQSSCList', payload });
    },
    *delCQSSCItem({ payload }, { put }) {
      yield put({ type: 'delCQSSCList', payload });
    },
    *clearCQSSC({ payload }, { put }) {
      yield put({ type: 'updateCQSSCList', payload: [] });
    },
    *updateRate({ payload }, { put }) {
      yield put({ type: 'updateRateValue', payload });
    },
    *updateRepeat({ payload }, { put }) {
      yield put({ type: 'updateRepeatValue', payload });
    },
    *getRate({ payload }, { put, call }) {
      const rate = yield call(getRate, payload.data);
      if (rate.success) {
        if (payload.cb) {
          payload.cb(rate);
        }
      } else {
        throw rate;
      }
    },
    *sendBuy({ payload }, { put, call }) {
      yield put({ type: 'trend/showLoading' });
      const data = yield call(sendBuyService, payload.data);
      yield put({ type: 'trend/hideLoading' });
      if (data.success) {
        if (payload.cb) {
          payload.cb();
        }
      } else {
        throw data;
      }
    },
  },
  reducers: {
    updateCtrlValue(state, { payload }) {
      return {
        ...state,
        timerCtrl: payload,
      };
    },
    updateBJK3List(state, { payload }) {
      return {
        ...state,
        BJK3: payload,
      };
    },
    delBJK3List(state, { payload }) {
      state.BJK3.forEach((i, index) => {
        if (i.index === payload) {
          state.BJK3.splice(index, 1);
        }
      });
      return {
        ...state,
        BJK3: state.BJK3,
      };
    },
    updateBJPK10List(state, { payload }) {
      return {
        ...state,
        BJPK10: payload,
      };
    },
    delBJPK10List(state, { payload }) {
      state.BJPK10.forEach((i, index) => {
        if (i.index === payload) {
          state.BJPK10.splice(index, 1);
        }
      });
      return {
        ...state,
        BJPK10: state.BJPK10,
      };
    },
    updateCQSSCList(state, { payload }) {
      return {
        ...state,
        CQSSC: payload,
      };
    },
    delCQSSCList(state, { payload }) {
      state.CQSSC.forEach((i, index) => {
        if (i.index === payload) {
          state.CQSSC.splice(index, 1);
        }
      });
      return {
        ...state,
        CQSSC: state.CQSSC,
      };
    },
    updateRateValue(state, { payload }) {
      return {
        ...state,
        rate: payload,
      };
    },
    updateRepeatValue(state, { payload }) {
      return {
        ...state,
        repeat: payload,
      };
    },
  },
};
