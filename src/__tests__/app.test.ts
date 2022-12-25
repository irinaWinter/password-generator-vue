import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import store from '@/store'

const baseOptions = {
  global: {
    plugins: [store]
  }

}

let wrapper = mount(App, {
  ...baseOptions
})

beforeEach(() => {
  wrapper = mount(App, {
    ...baseOptions
  })
})

describe('App', () => {
  describe('Когда компонент рендерится', () => {
    test('отображается блок с результатом', () => {
        const result = wrapper.find('[data-test-id="result"]')

        expect(result.exists()).toBe(true)
    })

    test('отображается кнопка для генерации пароля', () => {
        const generatePasswordButton = wrapper.find('[data-test-id="generatePasswordButton"]')

        expect(generatePasswordButton.exists()).toBe(true)
    })

    // describe('Когда кликаем на кнопку для генерации пароля', () => {
    //   test('Генерируется новый пароль', async () => {
    //     const generatePasswordButton = wrapper.find('[data-test-id="generatePasswordButton"]')

    //     await generatePasswordButton.trigger('click')
    //   })
    // })
  })
})
