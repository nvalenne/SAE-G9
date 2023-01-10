import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    attractions:[],
    prestataires:[],
    stands:[],
    attractionMap:null,
    userConnected:{}
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
      setAttractionMapContent(state, attraction){
        state.attractionMap = attraction[0];
      },
      setUserConnected(state, user){
        state.userConnected = user;
      }
  },
  actions: {
    async getAttractionsFromAPI(context) {
      let attractions = await axios.get('http://localhost:3000/attractions');
      context.commit('setAttractionsContent', attractions.data);
    },

    async getAttractionsFromAPIwithNumEmpla(context,id) {
      let attractions = await axios.get('http://localhost:3000/attractions/'+id);
      context.commit('setAttractionMapContent', attractions.data);
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
