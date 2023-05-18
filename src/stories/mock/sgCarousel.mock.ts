import { type Props } from '@/components/SgCarousel/SgCarousel.vue'
import { type Props as CardProps } from '@/components/SgCarousel/SgCarouselCard.vue'
import type { Image } from '@/types/media.types'
import { faker } from '@faker-js/faker'
import { getImage, getRandomIconName } from '@/stories/mock/helper'

const getFrame = () => {
  const iconName = getRandomIconName()
  return {
    iconName,
    paragraph: faker.lorem.words({ min: 3, max: 20 }),
  }
}

export const getCarouselCard = (withFrame: boolean = false): CardProps => ({
  image: getImage(),
  frame: withFrame ? getFrame() : undefined,
  link: 'https://google.com',
})

export const SgCarouselLeftMock: Props = {
  from: 'left',
  carouselCards: [
    getCarouselCard(),
    getCarouselCard(),
    getCarouselCard(),
    getCarouselCard(),
  ],
}

export const SgCarouselRightMock: Props = {
  from: 'right',
  carouselCards: [
    getCarouselCard(),
    getCarouselCard(),
    getCarouselCard(),
    getCarouselCard(),
  ],
}

export const SgCarouselLeftFrameMock: Props = {
  from: 'left',
  carouselCards: [
    getCarouselCard(true),
    getCarouselCard(true),
    getCarouselCard(true),
    getCarouselCard(true),
  ],
}

export const SgCarouselRightFrameMock: Props = {
  from: 'right',
  carouselCards: [
    getCarouselCard(true),
    getCarouselCard(true),
    getCarouselCard(true),
    getCarouselCard(true),
  ],
}
