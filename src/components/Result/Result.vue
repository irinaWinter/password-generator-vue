<template>
  <Input :value="password.value" readonly/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState } from 'vuex';
import { PasswordType } from '@/types'
import Input from '@/components/common/Input/Input.vue'

@Options({
  components: {
    Input,
  },
  props: {
    msg: String
  },
  computed: {
    ...mapState(['password'])
  }
})
export default class Result extends Vue {
  password!: PasswordType
}
</script>
