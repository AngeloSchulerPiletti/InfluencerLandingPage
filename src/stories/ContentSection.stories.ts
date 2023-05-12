import type { Meta, StoryObj } from '@storybook/vue3'
import ContentSectionComponent from '@/components/sections/ContentSection.vue'

const meta: Meta<typeof ContentSectionComponent> = {
  title: 'Sections/Content',
  component: ContentSectionComponent,
}

export default meta
type Story = StoryObj<typeof ContentSectionComponent>

export const Content: Story = {
  render: () => ({
    components: { ContentSectionComponent },
  }),
}
