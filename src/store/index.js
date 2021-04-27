import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    level: 0,
    enemies: [
      {
        name: 'Siegfried',
        image: require('@/assets/enemies/siegfriedBase.png'),
        maxHealth: 100,
        currentHealth: 100,
        maxDamage: 10
      },
      {
        name: 'Ultimate Siegfried',
        image: require('@/assets/enemies/siegfriedUltimate.png'),
        maxHealth: 170,
        currentHealth: 170,
        maxDamage: 50
      },
    ]
  },
  mutations: {
    setNextLevel(state, newLevel) {
      state.level = newLevel;
    }
  },
  actions: {
    nextLevel({ commit }, newLevel) {
      console.log(newLevel)
      commit('setNextLevel', newLevel);
    }
  },
  modules: {
  }
})
