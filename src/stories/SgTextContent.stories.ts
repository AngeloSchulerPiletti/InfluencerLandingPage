import type { Meta } from '@storybook/vue3'
import SgTextContent, { type Props } from '@/components/SgTextContent.vue'
import type { StoryObjProped } from '@/types/storybook.types'
import {
  SgTextContentLeftMock,
  SgTextContentCenterMock,
  SgTextContentRightMock,
} from '@/stories/mock/sgTextContent.mock'

const meta: Meta<typeof SgTextContent> = {
  title: 'Components/TextContent',
  component: SgTextContent,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjProped<typeof SgTextContent, Props>

export const TextContentLeft: Story = {
  args: SgTextContentLeftMock,
}

export const TextContentCenter: Story = {
  args: SgTextContentCenterMock,
}

export const TextContentRight: Story = {
  args: SgTextContentRightMock,
}
