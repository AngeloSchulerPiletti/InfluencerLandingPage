import { type StoryObj } from '@storybook/vue3'

export type StoryObjProped<Component, Props> = StoryObj<Component> & {
  args: Props
}
