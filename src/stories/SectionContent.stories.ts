import type { Meta } from '@storybook/vue3'
import SectionContent, { type Props } from '@/components/SectionContent.vue'
import type { StoryObjProped } from '@/types/storybook.types'
import { SectionContentMock } from '@/stories/mock/sectionContent.mock'

const meta: Meta<typeof SectionContent> = {
  title: 'Sections/Content',
  component: SectionContent,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjProped<typeof SectionContent, Props>

export const Content: Story = {
  args: SectionContentMock,
}
