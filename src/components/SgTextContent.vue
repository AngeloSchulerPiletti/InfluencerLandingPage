<script lang="ts" setup>
import SgLink, { type SlotedProps as LinkProps } from '@/components/SgLink.vue'
import { computed } from 'vue'

export interface Props {
  title: string
  paragraphs?: string[]
  alignment?: AlignmentTypes
  link?: LinkProps
  darkMode?: boolean
}

type AlignmentTypes = 'left' | 'center' | 'right'

const textContentAlignments: { [key in AlignmentTypes]: [string, string] } = {
  left: ['items-start', 'text-left'],
  center: ['items-center', 'text-center'],
  right: ['items-end', 'text-right'],
}

const props = withDefaults(defineProps<Props>(), {
  alignment: 'left',
  darkMode: false,
})

const getTextClasses = computed(() => {
  const classes = [textContentAlignments[props.alignment][1]]
  if (props.darkMode) {
    classes.push('text-neutral-50')
  }
  return classes
})

const getButtonVariant = computed(() => {
  return props.darkMode ? 'fill-dark' : 'fill'
})
</script>

<template>
  <div
    class="flex flex-col gap-4"
    :class="textContentAlignments[alignment][0]"
  >
    <h2 :class="getTextClasses">
      {{ title }}
    </h2>
    <div v-if="paragraphs">
      <p
        :class="getTextClasses"
        v-for="(paragraph, index) in paragraphs"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </div>
    <SgLink
      v-if="link"
      :to="link.to"
      apply-styles
      :variant="getButtonVariant"
      size="sm"
    >
      {{ link.title }}
    </SgLink>
  </div>
</template>
