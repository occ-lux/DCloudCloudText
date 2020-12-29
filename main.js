import Vue from 'vue'
import App from './App'
import store from './store'
import { UshowToast } from 'static/js/UshowToast.js'

Vue.config.productionTip = false
Vue.prototype.$ShowToast = UshowToast

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
