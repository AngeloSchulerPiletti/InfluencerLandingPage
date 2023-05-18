import type { Meta } from '@storybook/vue3'
import SectionContentCenter, {
  type Props,
} from '@/components/SectionContentCenter.vue'
import type { StoryObjProped } from '@/types/storybook.types'
import { SectionContentCenterMock } from '@/stories/mock/sectionContentCenter.mock'

const meta: Meta<typeof SectionContentCenter> = {
  title: 'Sections/ContentCenter',
  component: SectionContentCenter,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjProped<typeof SectionContentCenter, Props>

export const ContentCenter: Story = {
  args: SectionContentCenterMock,
}
