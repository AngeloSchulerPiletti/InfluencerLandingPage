import { faker } from '@faker-js/faker'

const icons = [
  'pinterest',
  'youtube',
  'twitter',
  'google',
  'github',
  'play',
  'instagram',
  'spotify',
]

export const getRandomIconName = () => {
  const int = faker.number.int({ min: 0, max: 6 })
  return icons[int]
}
