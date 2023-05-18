import { type Props } from '@/components/SectionPicture.vue'
import { getImage } from './helper'
import { type SlotedProps as LinkProps } from '@/components/SgLink.vue'
import { faker } from '@faker-js/faker'

const getLink = (): LinkProps => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  to: 'https://google.com',
  variant: 'fill',
})

export const SectionPictureMock: Props = {
  image: getImage(),
  link: getLink(),
  title: faker.lorem.words({ min: 1, max: 6 }),
}
