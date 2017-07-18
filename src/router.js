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
      <Route path="/candyApp" component={IndexPage}>
        <IndexRedirect to="/candyApp/home" />
        <Route path="/candyApp/home" getComponent={Home} />
        <Route path="/candyApp/BJK3" getComponent={BJK3} />
        <Route path="/candyApp/BJPK10" getComponent={BJPK10} />
        <Route path="/candyApp/CQSSC" getComponent={CQSSC} />
        <Route path="/candyApp/trend" getComponent={OpenList} />
        <Route path="/candyApp/openListDetail:id" getComponent={OpenListDetail} />
        <Route path="/candyApp/lucky" getComponent={LuckyList} />
        <Route path="/candyApp/balance" getComponent={BALANCE} />
        <Route path="/candyApp/win" getComponent={WIN} />
      </Route>
      <Route path="/candyApp/login" component={Login} />
    </Router>
  );
}

export default RouterConfig;
