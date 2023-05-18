import type { Meta } from '@storybook/vue3'
import SectionPicture, { type Props } from '@/components/SectionPicture.vue'
import type { StoryObjProped } from '@/types/storybook.types'
import { SectionPictureMock } from '@/stories/mock/sectionPicture.mock'

const meta: Meta<typeof SectionPicture> = {
  title: 'Sections/Picture',
  component: SectionPicture,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjProped<typeof SectionPicture, Props>

export const Picture: Story = {
  args: SectionPictureMock,
}
