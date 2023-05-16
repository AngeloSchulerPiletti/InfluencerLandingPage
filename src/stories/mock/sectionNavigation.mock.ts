import { type Props } from '@/components/SectionNavigation.vue'
import { faker } from '@faker-js/faker'

export const SectionNavigationMock: Props = {
  profilePicture: {
    url: faker.image.urlPicsumPhotos(),
    alt: faker.lorem.words(5),
  },
  socialMedias: [
    {
      iconName: 'linkedin',
      link: '/',
    },
    {
      iconName: 'instagram',
      link: '/',
    },
    {
      iconName: 'spotify',
      link: '/',
    },
  ],
}
