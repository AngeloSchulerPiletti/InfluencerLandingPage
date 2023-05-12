import type { Meta, StoryObj } from '@storybook/vue3'
import SupportSectionComponent from '@/components/sections/SupportSection.vue'

const meta: Meta<typeof SupportSectionComponent> = {
  title: 'Sections/Support',
  component: SupportSectionComponent,
}

export default meta
type Story = StoryObj<typeof SupportSectionComponent>

export const Support: Story = {
  render: () => ({
    components: { SupportSectionComponent },
  }),
}
