import React from 'react';
import { Router, Route, IndexRedirect} from 'dva/router';
import IndexPage from './routes';
import Login from './routes/login';

const Home = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/home'));
  }, 'home');
};
const OpenListDetail = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/trend/detail'));
  }, 'openListDetail');
};
const OpenList = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/trend'));
  }, 'openList');
};
const LuckyList = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/lucky'));
  }, 'LuckyList');
};
const BALANCE = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/lucky/balance'));
  }, 'balance');
};
const WIN = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/lucky/win'));
  }, 'win');
};
const BJK3 = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/home/BJK3'));
  }, 'BJK3');
};
const BJPK10 = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/home/BJPK10'));
  }, 'BJPK10');
};
const CQSSC = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('./routes/home/CQSSC'));
  }, 'CQSSC');
};

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRedirect to="/home" />
        <Route path="/home" getComponent={Home} />
        <Route path="/BJK3" getComponent={BJK3} />
        <Route path="/BJPK10" getComponent={BJPK10} />
        <Route path="/CQSSC" getComponent={CQSSC} />
        <Route path="/trend" getComponent={OpenList} />
        <Route path="/openListDetail:id" getComponent={OpenListDetail} />
        <Route path="/lucky" getComponent={LuckyList} />
        <Route path="/balance" getComponent={BALANCE} />
        <Route path="/win" getComponent={WIN} />
      </Route>
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default RouterConfig;
