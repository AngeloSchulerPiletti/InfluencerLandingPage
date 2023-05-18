<script lang="ts" setup>
import SgTextContent, {
  type Props as TextContentProps,
} from '@/components/SgTextContent.vue'

export interface Props {
  textContent: TextContentProps
}

const props = defineProps<Props>()
</script>

<template>
  <div class="background-blur wrapper pb-14 pt-[70px]">
    <div>
      <SgTextContent v-bind="textContent" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-blur {
  background-image: linear-gradient(
    theme('colors.secondary.900'),
    theme('colors.secondary.800/90%'),
    theme('colors.secondary.700/80%'),
    theme('colors.secondary.600/70%'),
    theme('colors.secondary.500/60%'),
    theme('colors.secondary.400/50%'),
    theme('colors.secondary.300/40%'),
    theme('colors.secondary.200/30%'),
    theme('colors.secondary.100/20%'),
    theme('colors.secondary.100/10%'),
    transparent 20%
  );
}
</style>
