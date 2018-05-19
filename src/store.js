import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {}
  },
  //showing things, not mutating state
  // getters: {
  //   tripleCounter: state => {
  //     return state.counter * 3;
  //   }
  // },
  //mutating the state
  //mutations are always synchronous
  mutations: {
    //showing passed with payload, represented as num
    updateUser: (state, user) => {
      state.user = user;
    }
  },
  //commits the mutation, it's asynchronous
  actions: {
    // showing passed with payload, represented as asynchNum (an object)
    addUser: ({ commit }, user) => {
      // debugger;
      // setTimeout(() => {
      //   //the asyncNum objects could also just be static amounts
      //   commit('decrement', asyncNum.by);
      // }, asyncNum.duration);
      commit('updateUser', user);
    }
  }
});
