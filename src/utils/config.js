const URL = 'http://47.92.85.172/candy/api';

module.exports = {
  name: 'candy-web',
  // logo: '/logo.png',
  // iconFontCSS: '/iconfont.css',
  // iconFontJS: '/iconfont.js',
  CORS: ['http://47.92.85.172'],
  footerText: '手机才能显示的页面',
  YQL: [],
  api: {
    userLogin: `${URL}/token`,
    userSignUp: `${URL}/user`,
    sendSms: `${URL}/sms/send`,
    openList: `${URL}/lottery/openList`,
    lotteryList: `${URL}/lottery/list`,
    buy: `${URL}/lottery/buy`,
    winList: `${URL}/lottery/mine`,
    banbleDetail: `${URL}/account/balance`,
  },
  sessionKey: {
    token: '__token__',
    userName: '__user-name__',
  },
};
