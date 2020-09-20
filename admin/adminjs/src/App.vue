<template>
  <div class="publisher-page-wrapper">
    <div class="publisher-page-workspace">
      <span class="badge">workspace</span>
      <Workspace v-droppable:console @drag-drop="onDragDrop" />
    </div>
    <div class="publisher-page-console">
      <span class="badge">console</span>
      <Console />
    </div>
  </div>
</template>

<script>
import Console from "@/components/Console.vue";
import Workspace from "@/components/Workspace.vue";

export default {
  name: 'App',
  components: {
    Console,
    Workspace
  },
  methods: {
    onDragDrop(e) {
      // console.log(e)
      this.$store.commit('updateList', e);
    }
  }
}
</script>

<style lang="scss">
  
</style>
