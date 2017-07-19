import { routerRedux } from 'dva/router';
// import { queryURL } from '../utils';
import { getWinListDetail, getBalanceDetail, getMine } from '../services/lucky';

export default {
  namespace: 'lucky',
  state: {
    winList: [],
    balanceList: [],
    isLoading: false,
    profit: '',
    balance: '',
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
        yield put({ type: 'mine', payload: data });
      }
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
    mine(state, { payload }) {
      return {
        ...state,
        balanceList: payload.list,
      };
    },
  },
};
