<script lang="ts" setup>
import SgLink, { type SlotedProps as LinkProps } from '@/components/SgLink.vue'

export interface Props {
  title: string
  paragraph: string
  alignment?: 'left' | 'center' | 'right'
  link?: LinkProps
}

const props = withDefaults(defineProps<Props>(), {
  alignment: 'left',
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2>{{ title }}</h2>
    <p>{{ paragraph }}</p>
    <SgLink
      v-if="link"
      :to="link.to"
      apply-styles
      variant="fill"
    >
      {{ link.title }}
    </SgLink>
  </div>
</template>
