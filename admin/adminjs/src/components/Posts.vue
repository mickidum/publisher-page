<template>
  <div class="posts">
    <pre>{{posts[0]}}</pre>

    <!-- <article v-for="article in posts" :key="article.id" class="article">
      <div class="article-header container">
        <div class="article-header-wrapper">
          <div class="label">{{article.cmb2.article_metabox_1.article_label}}</div>
          <div v-html="article.title.rendered" class="headline"></div>
          <div v-html="article.excerpt.rendered" class="underline"></div>
          <div class="byline">
            <div class="person"></div>
            <div class="date"></div>
          </div>
        </div>
        <div class="social"></div>
      </div>
    </article> -->
  </div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  mounted() {
    this.$store.dispatch("getPosts");
  }
};
</script>