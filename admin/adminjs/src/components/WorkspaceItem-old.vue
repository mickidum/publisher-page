<template>
  <draggable
    v-bind="dragOptions"
    tag="div"
    class="item-container"
    :list="list"
    :value="value"
    @input="emitter"
  >
    <div class="item-group" :key="el.id" v-for="el in realValue">
      <div :class="['post-item workspace-item', 'post-item-' + post.id]">
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

      <workspace-item class="item-sub" :list="el.elements" />
    </div>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "WorkspaceItem",
  methods: {
    emitter(value) {
      this.$emit("input", value);
    },
    getMedia(item) {
      if (item._embedded && item._embedded['wp:featuredmedia'] && item._embedded['wp:featuredmedia'][0] && item._embedded['wp:featuredmedia'][0].media_details) {
        let img = item._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;
        return img;
      }
      return null;
    }
  },
  components: {
    draggable
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue() {
      return this.value ? this.value : this.list;
    }
  },
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    },
    list: {
      required: false,
      type: Array,
      default: null
    },
    post: {
      required: true,
      type: Object
    }
  }
};
</script>