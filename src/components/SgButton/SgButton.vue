<script setup lang="ts">
import { computed } from 'vue'
import type { Props } from './props'

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'fill',
  applyStyles: true,
})

const getClasses = computed(() =>
  props.applyStyles
    ? `clicable clicable--${props.variant} clicable--${props.size}`
    : ''
)
</script>

<template>
  <button :class="getClasses">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@forward './styles';
</style>
