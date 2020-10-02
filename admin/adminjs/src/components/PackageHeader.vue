<template>
  <div :class="['package', 'package-' + item.type, drag ? 'item-drag' : '']">
    <div class="package-item-inner">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "package",
  props: {
    drag: {
      required: false,
      type: Boolean,
      default: false
    },
    item: {
      required: false,
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },
  computed: {
    
  },
  
  methods: {
    
  }
}
</script>