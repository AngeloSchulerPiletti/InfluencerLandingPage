import type { Meta } from '@storybook/vue3'
import SectionFooter, { type Props } from '@/components/SectionFooter.vue'
import type { StoryObjProped } from '@/types/storybook.types'
import { SectionFooterMock } from '@/stories/mock/sectionFooter.mock'

const meta: Meta<typeof SectionFooter> = {
  title: 'Sections/Footer',
  component: SectionFooter,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjProped<typeof SectionFooter, Props>

export const Footer: Story = {
  args: SectionFooterMock,
}
