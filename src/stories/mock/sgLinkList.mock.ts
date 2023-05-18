import { type Props as LinkListProps } from '@/components/SgLinkList.vue'
import { type SlotedProps as LinkProps } from '@/components/SgLink.vue'
import { faker } from '@faker-js/faker'

const getLink = (): LinkProps => ({
  title: faker.lorem.words({ min: 1, max: 8 }),
  to: 'https://google.com',
})

export const SgLinkListMock: LinkListProps = {
  iconName: 'send',
  links: [getLink(), getLink(), getLink(), getLink(), getLink()],
}

export const SgLinkListDarkMock: LinkListProps = {
  iconName: 'send',
  links: [getLink(), getLink(), getLink(), getLink(), getLink()],
  darkMode: true,
}
