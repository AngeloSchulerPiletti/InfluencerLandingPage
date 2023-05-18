<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

export interface Props {
  name: string
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  iconAlignment?: keyof IconAlignments
  applyStyles?: boolean
}

interface IconAlignments {
  center: 'self-center'
  end: 'self-end'
  start: 'self-start'
}

const props = withDefaults(defineProps<Props>(), {
  applyStyles: true,
  size: 'md',
  iconAlignment: 'center',
})

const iconAlignments: IconAlignments = {
  center: 'self-center',
  end: 'self-end',
  start: 'self-start',
}

const IconComponent = defineAsyncComponent(
  () => import(`../assets/icons/${props.name}.svg`)
)
</script>

<template>
  <component
    :is="IconComponent"
    class="icon"
    :class="[
      size && applyStyles ? `icon--${size}` : '',
      iconAlignments[iconAlignment],
    ]"
  />
</template>

<style lang="scss" scoped>
.icon {
  @apply shrink-0;

  &--xxs {
    @apply h-4 w-4;
  }

  &--xs {
    @apply h-5 w-5;
  }

  &--sm {
    @apply h-6 w-6;
  }

  &--md {
    @apply h-8 w-8;
  }

  &--lg {
    @apply h-10 w-10;
  }

  &--xl {
    @apply h-12 w-12;
  }
}
</style>
