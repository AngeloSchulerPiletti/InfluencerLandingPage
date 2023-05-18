import type { Meta } from '@storybook/vue3'
import SectionLinks, { type Props } from '@/components/SectionLinks.vue'
import type { StoryObjProped } from '@/types/storybook.types'
import { SectionLinksMock } from '@/stories/mock/sectionLinks.mock'

const meta: Meta<typeof SectionLinks> = {
  title: 'Sections/Links',
  component: SectionLinks,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjProped<typeof SectionLinks, Props>

export const Links: Story = {
  args: SectionLinksMock,
}
