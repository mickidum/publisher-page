<template>
  <div :class="['post-item', 'post-item-' + post.id]">
    <div class="console-item-inner">
      <div v-if="post.featured_media && getMedia(post)" class="media">
        <img :src="getMedia(post)" :alt="post.title.rendered">
      </div>
      <div v-else class="media no-image">
        <span>No image</span>
      </div>
      <div v-html="post.title.rendered" class="headline"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ['post'],
  data() {
    return {};
  },

  computed: {
    
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