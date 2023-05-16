<script lang="ts" setup>
import SgLink, { type SlotedProps as LinkProps } from '@/components/SgLink.vue'

export interface Props {
  title: string
  paragraph: string
  alignment?: AlignmentTypes
  link?: LinkProps
}

type AlignmentTypes = 'left' | 'center' | 'right'

const textContentAlignments: { [key in AlignmentTypes]: [string, string] } = {
  left: ['items-start', 'text-left'],
  center: ['items-center', 'text-center'],
  right: ['items-end', 'text-right'],
}

const props = withDefaults(defineProps<Props>(), {
  alignment: 'left',
})
</script>

<template>
  <div
    class="flex flex-col gap-4"
    :class="textContentAlignments[alignment][0]"
  >
    <h2 :class="textContentAlignments[alignment][1]">
      {{ title }}
    </h2>
    <p :class="textContentAlignments[alignment][1]">
      {{ paragraph }}
    </p>
    <SgLink
      v-if="link"
      :to="link.to"
      apply-styles
      variant="fill"
      size="sm"
    >
      {{ link.title }}
    </SgLink>
  </div>
</template>
