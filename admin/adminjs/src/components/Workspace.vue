<template>
  <div class="workspace">
    <div @drag-drop="onDragDrop" v-droppable:workspace class="inner">
      <div v-draggable:workspace="item" v-for="item in items" :key="item.id" :class="['console-item', 'console-item-' + item.id]">
        <div class="console-item-inner">
          <div v-if="item.featured_media && getMedia(item)" class="media">
            <img :src="getMedia(item)" :alt="item.title.rendered">
          </div>
          <div v-else class="media no-image">
          </div>
          <div v-html="item.title.rendered" class="headline"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Workspace",
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.state.workspace;
    },
  },
  mounted() {
    this.$store.dispatch("getWorkspace");
  },
  methods: {
    getMedia(item) {
      if (item._embedded && item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0] && item._embedded['wp:featuredmedia'][0].media_details) {
        let img = item._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
        return img;
      }
      return null;
    },

    onDragDrop(e) {
      // console.log('DROP: ', e.id)
      // this.$store.commit('updateList', e);
    },

    onDragOver(e) {
      // console.log('OVER: ', e.id)
      // this.$store.commit('updateList', e);
    }
  }
};
</script>