<template>
  <div class="console-items">
    <div v-draggable:console="item" v-for="item in items" :key="item.id" class="console-item">
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
</template>

<script>
export default {
  name: "Console",
  components: {
    
  },
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.state.console;
    },

    isLoading() {
      return this.$store.state.loading
    }
  },
  mounted() {
    this.$store.dispatch("getPostsEmbed");
  },
  methods: {
    getMedia(item) {
      if (item._embedded && item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0] && item._embedded['wp:featuredmedia'][0].media_details) {
        let img = item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;
        return img;
      }
      return null;
    }
  }
};
</script>