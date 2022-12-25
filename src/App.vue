<template>
  <Result data-test-id="result" />

  <Button
    data-test-id="generatePasswordButton"
    :whenClick="generatePasswordButtonClickHandler"
  >
    {{ genereatePasswordButtonText }}
  </Button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Result from '@/components/Result/Result.vue';
import Button from '@/components/common/Button/Button.vue'
import { mapMutations, mapState } from 'vuex';
import { defaultPasswordLength } from './consts';

@Options({
  components: {
    Result,
    Button,
  },
  data: () => ({
    genereatePasswordButtonText: 'Сгенерировать пароль'
  }),
  computed: {
    ...mapState(['password'])
  },
  methods: {
    ...mapMutations(['setPassword']),
    generatePasswordButtonClickHandler() {
      const newPassword = this.generatePassword(defaultPasswordLength)
      this.setPassword(newPassword)
    },
    generatePassword(length: number): string {
      let result = ''

      for (let i = 0; i < length; i++) {
        result += Math.random().toString(36).slice(2, 3)
      }

      return result
    }
  }
})

export default class App extends Vue {
  genereatePasswordButtonText!: string
  generatePasswordButtonClickHandler!: () => void
}
</script>
