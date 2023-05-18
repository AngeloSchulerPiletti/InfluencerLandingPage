import { type Preview, setup } from '@storybook/vue3'
import { App } from 'vue'
import '@/assets/scss/index.scss'
//@ts-ignore
import { router } from '@/routes'
import viewports from './viewports'

setup((app: App) => {
  app.use(router)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: viewports,
    },
  },
}

export default preview
