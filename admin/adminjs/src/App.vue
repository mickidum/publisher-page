<template>
  <div class="publisher-page-main">

  	<div v-drag-and-drop:options="options">

  	<div class="packages">
      <span class="badge">packages</span>
      <!-- <transition-group class="packages-items" type="transition" :name="!drag ? 'flip-list' : null"> -->
      	<vue-draggable-group
          v-model="packagesList"
          :groups="groups"
          data-id="3"
          @change="onGroupsChange"
        >
        <div :data-id="3" class="packages-items">
        	<package-header :data-id="index" :drag="true" v-for="(item, index) in packagesList" :key="index" :item="item" />
        </div>
      	</vue-draggable-group>
      <!-- </transition-group> -->
    </div>

    <div class="publisher-page-wrapper">

      <div class="publisher-page-workspace">
        <span class="badge">workspace</span>
        <div class="workspace">
          <vue-draggable-group
	          v-model="workspaceList"
	          :groups="groups"
	          data-id="2"
	          @change="onGroupsChange"
	        >
          <div id="work" :data-id="2" class="workspace-items">
          	<!-- <transition-group  id="work" class="workspace-items" type="transition" :name="!drag ? 'flip-list' : null"> -->
          		<post v-if="!item.kind" :drag="true" :data-id="item.id" v-for="(item, index) in workspaceList" :key="item.id" :post="item" />
          		<package-header v-if="item.kind" :data-id="index" :drag="true" v-for="(item, index) in workspaceList" :key="index" :item="item" />
          		
          	<!-- </transition-group> -->
          </div>
          </vue-draggable-group>
        </div>
      </div>

      <div class="publisher-page-console">
      	<span class="badge">console</span>
      	<vue-draggable-group
          v-model="consoleList"
          :groups="groups"
          data-id="1"
          @change="onGroupsChange"
        >
        <div :data-id="1">
        	<post :drag="true" :data-id="item.id" v-for="item in consoleList" :key="item.id" :post="item" />
        </div>
      	</vue-draggable-group>
      </div>
      
    </div>

  </div>

  </div>
</template>

<script>
import Post from "@/components/Post.vue";
// import WorkspaceItem from "@/components/WorkspaceItem.vue";
import PackageHeader from "@/components/PackageHeader.vue";
import WorkItem from "@/components/WorkItem.vue";
// import Workspace from "@/components/Workspace.vue";
import { config } from "@/config"
import wpapi from 'wpapi'

const apiUrl =
  process.env.NODE_ENV === "production" ? config.prodUrl : config.devUrl;

const wp = new wpapi({ endpoint: apiUrl });

export default {
  name: 'App',
  components: {
    WorkItem,
    Post,
    // draggable,
    // WorkspaceItem,
    PackageHeader
  },
    data() {
    return {
    	drag: false,
    	groups: [
    		{
          id: 1,
          name: "Console",
          items: [
            
          ],
        },
        {
          id: 2,
          name: 'Workspace',
          items: [
            
          ],
        },
        {
          id: 3,
          name: 'Packages',
          items: [
            
          ],
        },
    	],
      options: {
        dropzoneSelector: '#work',
        draggableSelector: '.item-drag',
        // excludeOlderBrowsers: true,
        // multipleDropzonesItemsDraggingEnabled: true,
        onDrop(event) {
          console.log(

            {event});
        }
        // onDragstart(event) {
        //   event.stop();
        // },
        // onDragend(event) {
        //   event.stop();
        // }
      }
    };
  },
  computed: {

    packagesList: {
      get() {
        return this.$store.state.packages;
      },
      set(value) {
        this.$store.commit('updateWorkspace', value)
      }
    },

    consoleList: {
      get() {
        return this.$store.state.console;
      },
      set(value) {
        this.$store.commit('updateConsole', value)
      }
    },

    workspaceList: {
      get() {
        return this.$store.state.workspace;
      },
      set(value) {
        this.$store.commit('updateWorkspace', value)
      }
    },

    isLoading() {
      return this.$store.state.loading
    }
  },
  mounted() {
    this.$store.dispatch("getPostsEmbed");

    wp.posts().embed().then(data => {
      this.groups[0].items = data;
    });
  },
  methods: {
    uniqID() {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
    onAdd(e) {
      console.log(e)
    },
    removed(item) {
    	console.log(item);
    	this.$store.commit('updateConsole', item)
    },
    onGroupsChange(e) {
    	console.log({e});
    }
  }
}
</script>

<style lang="scss">
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
