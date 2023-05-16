import type { Meta } from '@storybook/vue3'
import SectionNavigation, {
  type Props,
} from '@/components/SectionNavigation.vue'
import type { StoryObjProped } from '@/types/storybook.types'
import { SectionNavigationMock } from '@/stories/mock/sectionNavigation.mock'

const meta: Meta<typeof SectionNavigation> = {
  title: 'Sections/Navigation',
  component: SectionNavigation,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjProped<typeof SectionNavigation, Props>

export const Navigation: Story = {
  args: SectionNavigationMock,
}
