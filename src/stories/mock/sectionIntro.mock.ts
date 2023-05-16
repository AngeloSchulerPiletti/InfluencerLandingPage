import { type Props } from '@/components/SectionIntro.vue'
import { SgCarouselRightFrameMock } from '@/stories/mock/sgCarousel.mock'
import { SgTextContentRightMock } from '@/stories/mock/sgTextContent.mock'

export const SectionIntroMock: Props = {
  carousel: SgCarouselRightFrameMock,
  textContent: SgTextContentRightMock,
}
