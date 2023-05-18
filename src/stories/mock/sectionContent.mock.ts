import { type Props } from '@/components/SectionContent.vue'
import { SgCarouselLeftMock } from '@/stories/mock/sgCarousel.mock'
import { SgTextContentLeftDarkMock } from '@/stories/mock/sgTextContent.mock'
import { getRandomIconName } from '@/stories/mock/helper'

export const SectionContentMock: Props = {
  carousel: SgCarouselLeftMock,
  textContent: SgTextContentLeftDarkMock,
  iconName: getRandomIconName(),
}
