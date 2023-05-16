import type { Meta } from '@storybook/vue3'
import SgCarousel, { type Props } from '@/components/SgCarousel/SgCarousel.vue'
import type { StoryObjProped } from '@/types/storybook.types'
import {
  SgCarouselLeftMock,
  SgCarouselRightMock,
  SgCarouselLeftFrameMock,
  SgCarouselRightFrameMock,
} from '@/stories/mock/sgCarousel.mock'

const meta: Meta<typeof SgCarousel> = {
  title: 'Components/Carousel',
  component: SgCarousel,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObjProped<typeof SgCarousel, Props>

export const CarouselLeft: Story = {
  args: SgCarouselLeftMock,
}

export const CarouselRight: Story = {
  args: SgCarouselRightMock,
}

export const CarouselLeftFrame: Story = {
  args: SgCarouselLeftFrameMock,
}

export const CarouselRightFrame: Story = {
  args: SgCarouselRightFrameMock,
}
