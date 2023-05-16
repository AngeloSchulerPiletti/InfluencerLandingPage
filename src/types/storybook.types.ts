import { type StoryObj } from '@storybook/vue3'

export type StoryObjProped<
  Component,
  Props = undefined
> = StoryObj<Component> & {
  args: Props
}
