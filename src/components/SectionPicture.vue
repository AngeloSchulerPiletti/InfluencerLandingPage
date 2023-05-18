<script lang="ts" setup>
import type { Image } from '@/types/media.types'
import SgLink, { type SlotedProps as LinkProps } from '@/components/SgLink.vue'

export interface Props {
  title: string
  image: Image
  link: LinkProps
}

const props = defineProps<Props>()
</script>

<template>
  <div class="wrapper relative overflow-hidden py-14">
    <div
      class="background-blur absolute left-0 top-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2"
    ></div>
    <div class="flex flex-col gap-6">
      <h2>{{ title }}</h2>
      <figure
        class="h-80 w-48 overflow-hidden rounded-2xl md:w-80 lg:h-[420px] lg:w-[500px]"
      >
        <img
          :src="image.url"
          :alt="image.alt"
          class="h-full w-full object-cover"
        />
      </figure>
      <SgLink
        :to="link.to"
        :variant="link.variant"
        size="md"
        apply-styles
      >
        {{ link.title }}
      </SgLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-blur {
  background: radial-gradient(
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
