import type { Meta, StoryObj } from '@storybook/vue3'
import MembershipSectionComponent from '@/components/sections/MembershipSection.vue'

const meta: Meta<typeof MembershipSectionComponent> = {
  title: 'Sections/Membership',
  component: MembershipSectionComponent,
}

export default meta
type Story = StoryObj<typeof MembershipSectionComponent>

export const Membership: Story = {
  render: () => ({
    components: { MembershipSectionComponent },
  }),
}
