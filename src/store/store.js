/**
 * Created by admin on 2017/9/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 应用初始状态
const state = {
  position: 0
}

// 定义所需的 mutations
const mutations = {
  changePosition (state, val) {
    state.position = val
  }
}

// 创建 store 实例
export default new Vuex.Store({
  state,
  mutations
})
