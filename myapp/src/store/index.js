import Vue from "vue";
import Vuex from "vuex";
import home from "./home";

Vue.use(Vuex);

let state ={};
let actions ={};
let getters ={};
let mutations ={};
const store = new Vuex.Store({
	state,
	actions,
	mutations,
	getters,
	modules:{
		home
	}
})

export default store;