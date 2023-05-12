import type { Meta, StoryObj } from '@storybook/vue3'
import ContactSectionComponent from '@/components/sections/ContactSection.vue'

const meta: Meta<typeof ContactSectionComponent> = {
  title: 'Sections/Contact',
  component: ContactSectionComponent,
}

export default meta
type Story = StoryObj<typeof ContactSectionComponent>

export const Contact: Story = {
  render: () => ({
    components: { ContactSectionComponent },
  }),
}
