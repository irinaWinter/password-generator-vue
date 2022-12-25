<template>
  <button
    class="button"
    @click="clickHandler" 
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    whenClick: Function
  },
  methods: {
    clickHandler() {
      this.whenClick()
    }
  }
})
export default class Button extends Vue {
  whenClick!: () => void;
  clickHandler!: () => void;
}
</script>

<style>
  .button {
    cursor: pointer;
  }
</style>
