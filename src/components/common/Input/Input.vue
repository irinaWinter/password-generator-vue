<template>
  <input :value="value">
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Input extends Vue {
  value!: string
}
</script>