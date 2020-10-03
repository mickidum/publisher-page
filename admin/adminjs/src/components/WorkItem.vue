<template>

  <div class="work-item">
    <!-- <div v-if="item.kind" :class="['workspace-item', 'package-' + item.type]">
      <div class="package-item-inner">
        {{item.name}}
      </div>
    </div>
    <div v-if="!item.kind" :class="['workspace-item', 'post-item-' + item.id]">
      <div class="console-item-inner">
        <div v-if="item.featured_media && getMedia(item)" class="media">
          <img :src="getMedia(item)" :alt="item.title.rendered">
        </div>
        <div v-else class="media no-image">
          <span>No image</span>
        </div>
        <div v-html="item.title.rendered" class="headline"></div>
      </div>
    </div> -->
    <workspace-item v-if="!item.kind" :post="item" />
    <package v-if="item.kind" :item="item" />

  </div>

</template>

<script>
import WorkspaceItem from "@/components/WorkspaceItem.vue";
import Package from "@/components/Package.vue";
export default {
  name: "work-item",
  props: ['item'],
  components: {
    WorkspaceItem,
    Package
  },
  data() {
    return {};
  },

  computed: {
    uniqID() {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
  },

  methods: {
    getMedia(item) {
      if (item._embedded && item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0] && item._embedded['wp:featuredmedia'][0].media_details) {
        let img = item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;
        return img;
      }
      return null;
    },
    
  }
};
</script>