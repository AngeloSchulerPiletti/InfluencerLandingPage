import type { Meta } from '@storybook/vue3'
import ViewHome, { type Props } from '@/components/ViewHome.vue'
import type { StoryObjProped } from '@/types/storybook.types'
import { SectionNavigationMock } from '@/stories/mock/sectionNavigation.mock'
import { SectionIntroMock } from '@/stories/mock/sectionIntro.mock'
import { SectionContentMock } from '@/stories/mock/sectionContent.mock'
import { SectionContentCenterMock } from '@/stories/mock/sectionContentCenter.mock'
import { SectionLinksMock } from '@/stories/mock/sectionLinks.mock'

const meta: Meta<typeof ViewHome> = {
  title: 'Views/Home',
  component: ViewHome,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjProped<typeof ViewHome, Props>

export const Home: Story = {
  args: {
    navigation: SectionNavigationMock,
    intro: SectionIntroMock,
    content: SectionContentMock,
    contentCenter: SectionContentCenterMock,
    links: SectionLinksMock,
  },
}
