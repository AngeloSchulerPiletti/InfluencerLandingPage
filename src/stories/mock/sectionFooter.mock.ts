import { type Props } from '@/components/SectionFooter.vue'
import { faker, fakerRO } from '@faker-js/faker'
import { type SlotedProps as LinkProps } from '@/components/SgLink.vue'

const getLink = (): LinkProps => ({
  title: faker.lorem.words({ min: 1, max: 4 }),
  to: 'https://google.com',
})

export const SectionFooterMock: Props = {
  copyright: faker.lorem.words({ min: 2, max: 4 }),
  paragraphs: [
    faker.lorem.words({ min: 1, max: 5 }),
    faker.lorem.words({ min: 1, max: 5 }),
    faker.lorem.words({ min: 1, max: 5 }),
    faker.lorem.words({ min: 1, max: 5 }),
  ],
  links: [getLink(), getLink(), getLink(), getLink(), getLink()],
}
