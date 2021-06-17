export default {
  pages: [
    'pages/index/index',
    'pages/mine/mine',
    'pages/post/post',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      pagePath:'pages/index/index',
      text:'我的首页',
      iconPath:'./images/mine.png',
      selectedIconPath:'./images/homeSelected.png'
    },
      {
        pagePath:'pages/mine/mine',
        text:'我的详情',
        iconPath:'./images/mine.png',
        selectedIconPath:'./images/mineSelected.png'
      }]
  }
}
