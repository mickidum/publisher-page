<template>
  <div :class="['package', 'package-' + item.type]">
    <div class="package-item-inner">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "package",
  props: ['item'],
  data() {
    return {};
  },
  computed: {
    
  },
  
  methods: {
    
  }
}
</script>