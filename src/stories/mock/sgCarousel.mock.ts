import { type Props } from '@/components/SgCarousel/SgCarousel.vue'
import type { Image } from '@/types/media.types'
import { faker } from '@faker-js/faker'

const icons = ['pinterest', 'youtube', 'twitter', 'google']

const getFrame = () => {
  const int = faker.number.int({ min: 0, max: 3 })
  const iconName = icons[int]
  return {
    iconName,
    paragraph: faker.lorem.words({ min: 3, max: 20 }),
  }
}

const getImage = (): Image => ({
  url: faker.image.url(),
  alt: faker.lorem.words(5),
})

export const getCarouselCard = (withFrame: boolean = false) => ({
  image: getImage(),
  frame: withFrame ? getFrame() : undefined,
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
