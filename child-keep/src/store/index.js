import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    info: [
      {
        username: 'freeEasy',
        imgUrl: 'photo.png'
      }
    ],
    med_id: ''
  }
})
export default store
