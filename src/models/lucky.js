import { routerRedux } from 'dva/router';
// import { queryURL } from '../utils';
import { getWinListDetail, getBalanceDetail } from '../services/lucky';

export default {
  namespace: 'lucky',
  state: {
    winList: [],
    banbleDetail: {},
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
  },
  reducers: {
    balance(state, { payload }) {
      return {
        ...state,
        profit: payload.profit,
        balance: payload.balance,
      };
    },
  },
};
