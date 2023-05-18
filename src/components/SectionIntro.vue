<script lang="ts" setup>
import SgTextContent, {
  type Props as TextContentProps,
} from '@/components/SgTextContent.vue'
import SgCarousel, {
  type Props as CarouselProps,
} from '@/components/SgCarousel/SgCarousel.vue'

export interface Props {
  textContent: TextContentProps
  carousel: CarouselProps
}

const props = defineProps<Props>()
</script>

<template>
  <div class="relative flex flex-col gap-20 overflow-hidden py-20">
    <div
      class="background-blur absolute bottom-0 left-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 translate-y-1/2 lg:h-[2000px] lg:w-[2000px]"
    ></div>
    <SgTextContent
      v-bind="textContent"
      class="wrapper"
    />
    <SgCarousel v-bind="carousel" />
  </div>
</template>

<style lang="scss" scoped>
.background-blur {
  background: radial-gradient(
    theme('colors.secondary.800/70%'),
    theme('colors.secondary.800/65%'),
    theme('colors.secondary.700/65%'),
    theme('colors.secondary.700/60%'),
    theme('colors.secondary.600/60%'),
    theme('colors.secondary.600/55%'),
    theme('colors.secondary.500/50%'),
    theme('colors.secondary.500/45%'),
    theme('colors.secondary.400/40%'),
    theme('colors.secondary.400/35%'),
    theme('colors.secondary.300/30%'),
    theme('colors.secondary.300/25%'),
    theme('colors.secondary.200/20%'),
    theme('colors.secondary.200/10%'),
    theme('colors.secondary.100/10%'),
    theme('colors.secondary.100/5%'),
    transparent 72%
  );
}
</style>
