import Vue from 'vue'
import Vuex from 'vuex'
import { config } from "../config"
import wpapi from 'wpapi'

const apiUrl =
  process.env.NODE_ENV === "production" ? config.prodUrl : config.devUrl;

const currentID = config.currentID;
const wpStore = window.publisherPageStore || {};
const wp = new wpapi({ endpoint: apiUrl });
wp.workspace = wp.registerRoute('wp/v2', '/mic_publisher_page/(?P<id>)');

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    console: [],
    workspace: [],
    packages: [
      {
        id: null,
        name: "Hero",
        kind: "package",
        type: "special-one",
        items: []
      },
      {
        id: null,
        kind: "package",
        name: "2 Cards",
        type: "two-cards",
        items: []
      },
      {
        id: null,
        kind: "package",
        name: "3 Cards",
        type: "three-cards",
        items: []
      },
      {
        id: null,
        kind: "package",
        name: "4 Cards",
        type: "four-cards",
        items: []
      },
      {
        id: null,
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

    fillWorkspace(state, items) {
      state.workspace = items;
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

    updateWorkspaceItem(state, item) {
      state.workspace = [
        ...state.workspace,
        item
      ]
      // console.log(state.workspace)
    },

    updateConsoleItem(state, item) {
      let filtered = state.console.filter(i => {
        return item && i.id !== item.id;
      });
      state.console = filtered;
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
      wp.workspace().id(currentID).then(data => {
        // let items = JSON.parse(decodeURIComponent(data.excerpt.rendered))
        // console.log(items);
        console.log(data.mic_workspace_items);
        // commit('fillWorkspace', items);
      })
      commit('loading', false);
    },
  },
  modules: {
  }
});

const updateWPStore = store.subscribe((mutation, state) => {
  if (mutation.type === 'updateWorkspace' || mutation.type === 'updateConsole') {
    wpStore.workspace = JSON.parse(JSON.stringify(state.workspace));
    // console.log(wpStore)
  }
})

export default store;
