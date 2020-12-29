import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =new Vuex.Store({
	// 定义变量
	state:{
		token: "",			//用户token
	},
	getters:{
		getToken(state){
			return state.token
		}
	},
	// 定义方法
	mutations:{
		addToken(state, num) {
		    state.token = num
		},
	}
})

export default store;