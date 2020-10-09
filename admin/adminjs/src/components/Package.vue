<!-- <template>
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
</script> -->

<!-- <template>
  <draggable draggable=".post-item" :class="['package', 'package-' + item.type]" :list="item.items" :group="{ name: 'item' }">
    <div class="package-item-inner">
      {{item.name}}
      <template v-if="!item.kind" v-for="el in item.items">
        <div  :key="el.id" :post="el">{{el}}</div>
        <workspace-item :key="el.id" :post="el" />
      </template>
    </div>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
import WorkspaceItem from "@/components/WorkspaceItem.vue";
export default {
  name: "package",
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  components: {
    draggable, WorkspaceItem
  },
}
</script> -->

<template>
  <draggable
    tag="div"
    :class="['package', 'package-id' + uniqID, 'package-' + item.type, item.items.length ? 'filled' : '']"
    v-model="item.items"
    :value="value"
    @input="emitter"
    group="item"
  >
    <div class="package-item-inner">
      {{item.name}}
      <draggable
        tag="div"
        group="item"
        handle=".post-item"
        v-model="item.items"
      >
      <template v-if="!el.kind" v-for="el in item.items">
        <workspace-item :class="el.id" :key="el.id" :post="el" />
      </template>
    </draggable>
    </div>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import WorkspaceItem from "@/components/WorkspaceItem.vue";
export default {
  name: "package",
  props: {
    header: {
      required: false,
      type: Boolean,
      default: false
    },
    value: {
      required: false,
      type: Array,
      default: null
    },
    item: {
      required: false,
      type: Object,
      default: null
    }
  },
  components: {
    draggable, WorkspaceItem
  },
  
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "item",
        disabled: false,
        ghostClass: "ghost"
      }
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue() {
      return this.value ? this.value : this.list;
    },
    uniqID() {
      return '_' + Math.random().toString(36).substr(2, 9);
    },
  }, 
  methods: {
    emitter(value) {
      this.$emit("input", value);
    }
  },
  
}
</script>
