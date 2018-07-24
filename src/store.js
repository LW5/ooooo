import Vue from 'vue'
import Vuex from 'vuex'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import counter from "./components/couter/store.js"

import Info from "./components/info/store.js"
import Pet from "./components/pet/store.js"
import Service from "./components/service/store.js"
// 用品
import Artical from "./components/artical/store.js"
// 食品
import Foods from "./components/foods/store.js"


Vue.use(ElementUI);
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        Info,
        Pet,
        Service,
        Artical,
        Foods
    }
})


