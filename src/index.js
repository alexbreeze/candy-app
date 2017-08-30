import 'babel-polyfill';
import dva from 'dva';
import createLoading from 'dva-loading';
import { hashHistory } from 'dva/router';
import { message } from 'antd';
import initReactFastclick from 'react-fastclick';
import './index.html';
import './index.css';

// 1. Initialize
initReactFastclick();
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: hashHistory,
  onError(error) {
    message.error(error.message, 3);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/login'));
app.model(require('./models/menuList'));
app.model(require('./models/trend'));
app.model(require('./models/home'));
app.model(require('./models/lucky'));
// app.model(require('./models'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
