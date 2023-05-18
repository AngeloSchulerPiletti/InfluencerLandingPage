import { type Props as TextContentProps } from '@/components/SgTextContent.vue'
import { faker } from '@faker-js/faker'
import { type SlotedProps as LinkProps } from '@/components/SgLink.vue'

const getLink = (): LinkProps => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  to: 'https://google.com',
  applyStyles: true,
  variant: 'fill',
})

export const SgTextContentLeftMock: TextContentProps = {
  paragraphs: [faker.lorem.words({ min: 3, max: 30 })],
  title: faker.lorem.words({ min: 1, max: 5 }),
  alignment: 'left',
  link: getLink(),
}

export const SgTextContentCenterMock: TextContentProps = {
  paragraphs: [faker.lorem.words({ min: 3, max: 30 })],
  title: faker.lorem.words({ min: 1, max: 5 }),
  alignment: 'center',
  link: getLink(),
}

export const SgTextContentRightMock: TextContentProps = {
  paragraphs: [faker.lorem.words({ min: 3, max: 30 })],
  title: faker.lorem.words({ min: 1, max: 5 }),
  alignment: 'right',
  link: getLink(),
}

export const SgTextContentLeftDarkMock: TextContentProps = {
  paragraphs: [faker.lorem.words({ min: 3, max: 30 })],
  title: faker.lorem.words({ min: 1, max: 5 }),
  alignment: 'left',
  link: getLink(),
  darkMode: true
}