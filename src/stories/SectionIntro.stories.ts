import type { Meta } from '@storybook/vue3'
import SectionIntro, { type Props } from '@/components/SectionIntro.vue'
import type { StoryObjProped } from '@/types/storybook.types'
import { SectionIntroMock } from '@/stories/mock/sectionIntro.mock'

const meta: Meta<typeof SectionIntro> = {
  title: 'Sections/Intro',
  component: SectionIntro,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjProped<typeof SectionIntro, Props>

export const Intro: Story = {
  args: SectionIntroMock,
}
