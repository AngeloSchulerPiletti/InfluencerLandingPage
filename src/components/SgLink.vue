<script setup lang="ts">
import { type Props as BaseProps } from '@/components/SgButton/props'
import { computed } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

export interface Props extends BaseProps {
  to: RouteLocationRaw
}

export interface SlotedProps extends Props {
  title: string
}

const props = defineProps<Props>()

const getClasses = computed(() =>
  props.applyStyles
    ? `clicable clicable--${props.variant} clicable--${props.size}`
    : ''
)

const externalSourcesPrefixes = ['http', 'tel', 'mailto']
const getComponent = computed(() => {
  if (typeof props.to === 'string') {
    for (let i = 0; i < externalSourcesPrefixes.length; i++) {
      if (props.to.startsWith(externalSourcesPrefixes[i])) return 'a'
    }
  }
  return RouterLink
})
</script>

<template>
  <component
    :is="getComponent"
    :class="getClasses"
    :to="to"
    :href="to"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@forward '@/components/SgButton/styles';
</style>
