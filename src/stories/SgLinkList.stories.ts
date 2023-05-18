import type { Meta } from '@storybook/vue3'
import SgLinkList, { type Props } from '@/components/SgLinkList.vue'
import type { StoryObjProped } from '@/types/storybook.types'
import {
  SgLinkListDarkMock,
  SgLinkListMock,
} from '@/stories/mock/sgLinkList.mock'

const meta: Meta<typeof SgLinkList> = {
  title: 'Components/LinkList',
  component: SgLinkList,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjProped<typeof SgLinkList, Props>

export const LinkList: Story = {
  args: SgLinkListMock,
}

export const LinkListDark: Story = {
  args: SgLinkListDarkMock,
}
