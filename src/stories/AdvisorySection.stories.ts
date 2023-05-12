import type { Meta, StoryObj } from '@storybook/vue3'
import AdvisorySectionComponent from '@/components/sections/AdvisorySection.vue'

const meta: Meta<typeof AdvisorySectionComponent> = {
  title: 'Sections/Advisory',
  component: AdvisorySectionComponent,
}

export default meta
type Story = StoryObj<typeof AdvisorySectionComponent>

export const Advisory: Story = {
  render: () => ({
    components: { AdvisorySectionComponent },
  }),
}
