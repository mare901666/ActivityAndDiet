import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)


export default new Vuex.Store({
    state: {
      foodstaffStore: [],
      activityStore: [],
      pie: {
        proteins: 100,
        carbs: 100,
        fats: 100
      }
    },
    mutations: {
        ADD_FOODSTAFF: (state, food) => {
            state.foodstaffStore.push(food)
        }
    },
    getters:{
        
    },
    actions:{
  
    }
  })