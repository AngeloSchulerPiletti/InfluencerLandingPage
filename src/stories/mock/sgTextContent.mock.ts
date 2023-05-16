import { type Props as TextContentProps } from '@/components/SgTextContent.vue'
import { faker } from '@faker-js/faker'

export const SgTextContentLeftMock: TextContentProps = {
  paragraph: faker.lorem.words({ min: 3, max: 30 }),
  title: faker.lorem.words({ min: 1, max: 5 }),
  alignment: 'left',
  link: {
    title: faker.lorem.words({ min: 1, max: 3 }),
    to: 'https://google.com',
    applyStyles: true,
    variant: 'fill',
  },
}

export const SgTextContentCenterMock: TextContentProps = {
  paragraph: faker.lorem.words({ min: 3, max: 30 }),
  title: faker.lorem.words({ min: 1, max: 5 }),
  alignment: 'center',
  link: {
    title: faker.lorem.words({ min: 1, max: 3 }),
    to: 'https://google.com',
    applyStyles: true,
    variant: 'fill',
  },
}

export const SgTextContentRightMock: TextContentProps = {
  paragraph: faker.lorem.words({ min: 3, max: 30 }),
  title: faker.lorem.words({ min: 1, max: 5 }),
  alignment: 'right',
  link: {
    title: faker.lorem.words({ min: 1, max: 3 }),
    to: 'https://google.com',
    applyStyles: true,
    variant: 'fill',
  },
}
