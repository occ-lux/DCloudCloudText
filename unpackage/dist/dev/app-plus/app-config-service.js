
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/login/register","pages/editInformation/editInformation","pages/tabbar/home/home","pages/tabbar/giftarea/giftarea","pages/tabbar/mine/mine"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"borderStyle":"black","backgroundColor":"#FFFFFF","color":"#999999","selectedColor":"#EF1E46","list":[{"pagePath":"pages/tabbar/home/home","iconPath":"static/image/tabbar/home.png","selectedIconPath":"static/image/tabbar/homeactive.png","text":"试用专区"},{"pagePath":"pages/tabbar/giftarea/giftarea","iconPath":"","selectedIconPath":"","text":"礼品专区"},{"pagePath":"pages/tabbar/mine/mine","iconPath":"static/image/tabbar/mine.png","selectedIconPath":"static/image/tabbar/mineactive.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"CloudText","compilerVersion":"3.0.3","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"登录"}},{"path":"/pages/login/register","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"注册"}},{"path":"/pages/editInformation/editInformation","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"个人信息"}},{"path":"/pages/tabbar/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"首页"}},{"path":"/pages/tabbar/giftarea/giftarea","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"首页"}},{"path":"/pages/tabbar/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"我的"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});