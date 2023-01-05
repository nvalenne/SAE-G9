import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    attractions:[],
    prestataires:[],
    stands:[],
  }),
  mutations: {
      setAttractionsContent(state, attractions){
        state.attractions = attractions
      },
      setPrestatairesContent(state, prestataires){
        state.prestataires = prestataires
      },
      setStandsContent(state, stands){
        state.stands = stands
      },
  },
  actions: {
    async getAttractionsFromAPI(context) {
      let attractions = await axios.get('http://localhost:3000/attractions');
      context.commit('setAttractionsContent', attractions.data);
    },

    async getPrestatairesFromAPI(context){
      let prestataires = await axios.get('http://localhost:3000/prestataires');
      context.commit('setPrestatairesContent', prestataires.data);
    },

    async getStandsFromAPI(context){
      let stands = await axios.get('http://localhost:3000/stands');
      context.commit('setStandsContent', stands.data);
    },
  },
  modules: {
  }
})
