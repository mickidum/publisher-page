<template>
  <div class="publisher-page-wrapper">
    <div class="publisher-page-workspace">
      <span class="badge">workspace</span>
      <div class="workspace">
        <draggable 
          draggable=".post-item" 
          class="workspace-items" 
          v-model="workspaceList" 
          group="item" 
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          @change="log"
        >
        <transition-group class="workspace-items" type="transition" :name="!drag ? 'flip-list' : null">
          <post v-for="(item, index) in workspaceList" :key="item.id" :post="item" />
        </transition-group>
        </draggable>
      </div>
    </div>
    <div class="publisher-page-console">
      <span class="badge">console</span>
        <draggable 
          draggable=".post-item" 
          class="console-items" 
          v-model="consoleList" 
          group="item" 
          @change="log"
        >
        <post v-for="(item, index) in consoleList" :key="item.id" :post="item" />
        </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Post from "@/components/Post.vue";
// import Workspace from "@/components/Workspace.vue";

export default {
  name: 'App',
  components: {
    Post,
    draggable
  },
  data() {
    return {
      drag: false
    }
  },
  computed: {

    dragOptions() {
      return {
        animation: 200,
        group: "item",
        disabled: false,
        ghostClass: "ghost"
      };
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
  },
  methods: {
    log: function(evt) {
      console.log('CONSOLE ITEMS: ', this.consoleList);
      console.log('WORKSPACE ITEMS: ', this.workspaceList);
      window.console.log(evt);
    },
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
