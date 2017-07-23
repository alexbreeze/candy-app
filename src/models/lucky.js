import { routerRedux } from 'dva/router';
// import { queryURL } from '../utils';
import { getBalanceDetail, getMine, getFlow, getApply } from '../services/lucky';

export default {
  namespace: 'lucky',
  state: {
    winList: [],
    balanceList: [],
    balanceText: '加载更多...',
    flowList: [],
    flowText: '加载更多...',
    isLoading: false,
    profit: '',
    balance: '',
    value: '',
  },
  effects: {
    *getBalance({ payload }, { put, call }) {
      const data = yield call(getBalanceDetail);
      if (!data.success) {
        throw data;
      } else {
        yield put({ type: 'balance', payload: data });
      }
    },
    *getMine({ payload }, { put, call }) {
      const data = yield call(getMine, payload);
      if (!data.success) {
        throw data;
      } else {
        if (data.list.length < 10) {
          data.text = '';
        } else {
          data.text = '加载更多...';
        }
        yield put({ type: 'mine', payload: data });
      }
    },
    *getFlow({ payload }, { put, call }) {
      const data = yield call(getFlow, payload);
      if (!data.success) {
        throw data;
      } else {
        if (data.list.length < 10) {
          data.text = '';
        } else {
          data.text = '加载更多...';
        }
        yield put({ type: 'flow', payload: data });
      }
    },
    *getApply({ payload }, { put, call }) {
      const data = yield call(getApply, payload);
      if (!data.success) {
        throw data;
      } else {
        yield put({ type: 'apply', payload: data });
      }
    },
    *clearBalanceList({ payload }, { put, call }) {
      yield put({ type: 'clearBalance' });
    },
    *clearFlowList({ payload }, { put, call }) {
      yield put({ type: 'clearFlow' });
    },
  },
  reducers: {
    balance(state, { payload }) {
      return {
        ...state,
        profit: payload.profit,
        balance: payload.balance,
      };
    },
    clearBalance(state, { payload }) {
      return {
        ...state,
        balanceList: [],
      };
    },
    clearFlow(state, { payload }) {
      return {
        ...state,
        flowList: [],
      };
    },
    mine(state, { payload }) {
      return {
        ...state,
        balanceList: state.balanceList.concat(payload.list),
        balanceText: payload.text,
      };
    },
    flow(state, { payload }) {
      return {
        ...state,
        flowList: state.flowList.concat(payload.list),
        flowText: payload.text,
      };
    },
    apply(state, { payload }) {
      return {
        ...state,
        value: payload.code,
      };
    },
  },
};
