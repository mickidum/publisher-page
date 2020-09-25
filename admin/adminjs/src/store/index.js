import Vue from 'vue'
import Vuex from 'vuex'
import { config } from "../config"
import wpapi from 'wpapi'

const apiUrl =
  process.env.NODE_ENV === "production" ? config.prodUrl : config.devUrl;

const wp = new wpapi({ endpoint: apiUrl });

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    console: [],
    workspace: [],
    loading: false
  },
  mutations: {
    fillPosts(state, items) {
      state.console = items;
    },

    updateList(state, item) {
      state.workspace = [
      	...state.workspace,
      	item,
      ];
      state.console = state.console.filter(i => {
      	// console.log(item)
      	return item.id !== i.id;
      })
    },

    updateConsole(state, items) {
      state.console = items;
    },

    updateWorkspace(state, items) {
      state.workspace = items;
    },

    loading(state, status) {
    	status = status || true;
    	state.loading = status;
    }

  },
  actions: {
    async getPosts({ commit }) {
      wp.posts().then(data => {
        commit('fillPosts', data)
      });
    },

    async getPostsEmbed({ commit }) {
    	commit('loading', true);
      wp.posts().embed().then(data => {
        commit('fillPosts', data);
        commit('loading', false);
      });
    },

    async getWorkspace({ commit }) {
    	commit('loading', true);
      // wp.posts().embed().then(data => {
      //   commit('fillPosts', data);
      //   commit('loading', false);
      // });
      commit('loading', false);
    },
  },
  modules: {
  }
})
