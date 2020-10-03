<template>
  <div class="publisher-page-main">

    <div class="packages">
      <span class="badge">packages</span>
      <draggable 
        :list="packagesList"
        class="packages-items-wrap" 
        :group="{ name: 'item', pull: 'clone', put: false }" 
        :clone="onClone"
        @start="drag = true"
        @end="drag = false"
        handle=".package"
      >
      <transition-group class="packages-items" type="transition" :name="!drag ? 'flip-list' : null">
        <package-header v-for="(item, index) in packagesList" :key="item.type" :item="item" />
      </transition-group>
      </draggable>
    </div>

    <div class="publisher-page-wrapper">
      <div class="publisher-page-workspace">
        <!-- <pre style="font-size: 12px;">{{workspaceList}}</pre> -->
        <span class="badge">workspace</span>
        <div class="workspace">
          <draggable 
            draggable=".work-item" 
            class="workspace-items" 
            v-model="workspaceList" 
            group="item" 
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
            
          >
          <transition-group class="workspace-items" type="transition" :name="!drag ? 'flip-list' : null">
            <work-item v-model="workspaceList" v-for="(item, index) in workspaceList" :item="item" :key="item.id" />
            <!-- <workspace-item  v-for="(item, index) in workspaceList" :key="item.id" v-if="!item.kind" :post="item" /> -->
            <!-- <package  v-for="(item, index) in workspaceList" :key="item.id" v-if="item.kind" :item="item" /> -->
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
          <post v-if="!item.kind" v-for="(item, index) in consoleList" :key="item.id" :post="item" />
          </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Post from "@/components/Post.vue";
import WorkspaceItem from "@/components/WorkspaceItem.vue";
import PackageHeader from "@/components/PackageHeader.vue";
import Package from "@/components/Package.vue";
import WorkItem from "@/components/WorkItem.vue";
// import Workspace from "@/components/Workspace.vue";

export default {
  name: 'App',
  components: {
    WorkItem,
    Post,
    draggable,
    WorkspaceItem,
    Package,
    PackageHeader
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
  },
  methods: {
    log: function(evt) {
      // console.log('CONSOLE ITEMS: ', this.consoleList);
      // console.log('WORKSPACE ITEMS: ', this.workspaceList);
      window.console.log(evt);
    },
    uniqID() {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
    onAdd(e) {
      console.log(e)
    },
    // checkMove: function(evt){
    //   return evt.draggedContext.element.kind !== 'package';
    // }
    onClone(item) {
      // console.log(item)
      item.id = this.uniqID();
      return {...item};
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
