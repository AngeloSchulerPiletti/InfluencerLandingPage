import type { Meta, StoryObj } from '@storybook/vue3'
import IntroSectionComponent from '@/components/sections/IntroSection.vue'

const meta: Meta<typeof IntroSectionComponent> = {
  title: 'Sections/Intro',
  component: IntroSectionComponent,
}

export default meta
type Story = StoryObj<typeof IntroSectionComponent>

export const Intro: Story = {
  render: () => ({
    components: { IntroSectionComponent },
  }),
}
