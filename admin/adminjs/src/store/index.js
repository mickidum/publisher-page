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
    packages: [
      {
        name: "Hero",
        kind: "package",
        type: "special-one",
        items: []
      },
      {
        kind: "package",
        name: "2 Cards",
        type: "two-cards",
        items: []
      },
      {
        kind: "package",
        name: "3 Cards",
        type: "three-cards",
        items: []
      },
      {
        kind: "package",
        name: "4 Cards",
        type: "four-cards",
        items: []
      },
      {
        kind: "package",
        name: "5 Cards",
        type: "five-cards",
        items: []
      }
    ],
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
      let filtered = items.filter(item => {
        return item && !item.kind;
      });
      // console.log(filtered.length)
      state.console = filtered;
    },

    updateWorkspace(state, items) {
      state.workspace = items;
      // console.log(state.workspace)
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
        // console.log(data)
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
