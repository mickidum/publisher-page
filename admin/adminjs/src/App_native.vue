<template>
  <div class="publisher-page-main">

  	<div class="packages">
      <span class="badge">packages</span>
      <!-- <transition-group class="packages-items" type="transition" :name="!drag ? 'flip-list' : null"> -->
        <div class="packages-items">
        	<package-header draggable="true" v-for="(item, index) in packagesList" :key="item.type" :item="item" />
        </div>
      <!-- </transition-group> -->
    </div>

    <div class="publisher-page-wrapper">

      <div class="publisher-page-workspace">
        <span class="badge">workspace</span>
        <div class="workspace">
          <div v-model="workspaceList" @drop="onDrop($event)" @dragover="allowDrop($event)" id="work" class="workspace-items">
          	<!-- <transition-group  id="work" class="workspace-items" type="transition" :name="!drag ? 'flip-list' : null"> -->
          		<post v-if="!item.kind" v-for="(item, index) in workspaceList" :key="item.id" :post="item" />
          		<package-header v-if="item.kind" v-for="(item, index) in workspaceList" :key="index" :item="item" />
          		<!-- {{workspaceList}} -->
          	<!-- </transition-group> -->
          </div>
        </div>
      </div>

      <div class="publisher-page-console">
      	<span class="badge">console</span>
        	<post @dragend.native="endDrag($event)" @dragstart.native="startDrag($event, item)" draggable="true" v-for="item in consoleList" :key="item.id" :post="item" />
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
    }
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

    // wp.posts().embed().then(data => {
    //   this.groups[0].items = data;
    // });
  },
  methods: {
    uniqID() {
      return '_' + Math.random().toString(36).substr(2, 9);
    },

    allowDrop(event) {
      event.preventDefault();
    },

    endDrag(event) {
      event.srcElement.classList.remove('start');
    },

    startDrag(event, item) {
      // this.style.opacity = '0.4';
      event.srcElement.classList.add('start');
      // event.dataTransfer.effectAllowed = "move";
      // event.dataTransfer.dropEffect = "move";
      // event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.setData("item", JSON.stringify(item));
      console.log(event.dataTransfer)
    },

    onDrop(event) {
      let item = JSON.parse(event.dataTransfer.getData("item"));
      console.log(item);
      
      this.$store.commit('updateConsoleItem', item);
      this.$store.commit('updateWorkspaceItem', item);
    }
  }
}
</script>

<style lang="scss">
.start {
  opacity: 0.6;
  border: dashed 1px #000;
  padding: 2px;
}
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
