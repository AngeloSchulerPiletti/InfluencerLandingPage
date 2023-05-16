<script lang="ts" setup>
import type { Image } from '@/types/media.types'
import SgIcon from '@/components/SgIcon.vue'
import SgLink from '../SgLink.vue'

export interface Props {
  frame?: {
    iconName?: string
    paragraph: string
  }
  image: Image
  link: string
}

const props = defineProps<Props>()
</script>

<template>
  <SgLink :to="link">
    <div class="relative h-full overflow-hidden rounded-2xl">
      <img
        class="absolute -z-10 h-full w-full object-cover"
        :src="image.url"
        :alt="image.alt"
      />
      <div
        v-if="frame"
        class="opacity-transition absolute inset-0 flex"
      >
        <div class="relative grow">
          <div
            v-if="frame.iconName"
            class="absolute left-0 top-0"
          >
            <div class="relative">
              <div
                class="carousel-radial-blur absolute h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2"
              ></div>
              <SgIcon
                class="absolute left-3 top-3 text-neutral-50"
                :name="frame.iconName"
                size="md"
              />
            </div>
          </div>
          <div
            class="carousel-linear-blur absolute inset-x-0 bottom-0 px-3 pb-3 pt-5 text-neutral-50"
          >
            <span class="text-xxs font-light">{{ frame.paragraph }}</span>
          </div>
        </div>
      </div>
    </div>
  </SgLink>
</template>

<style lang="scss" scoped>
.opacity-transition {
  @apply opacity-0 transition duration-500 hover:opacity-100;
}

.carousel-radial-blur {
  background: radial-gradient(
    theme('colors.secondary.800 / 95%'),
    theme('colors.secondary.800 / 90%'),
    theme('colors.secondary.700 / 90%'),
    theme('colors.secondary.600 / 85%'),
    theme('colors.secondary.500 / 85%'),
    theme('colors.secondary.500 / 70%'),
    theme('colors.secondary.500 / 55%'),
    transparent 72%
  );
}

.carousel-linear-blur {
  background: linear-gradient(
    transparent,
    theme('colors.secondary.500 / 70%'),
    theme('colors.secondary.600 / 85%'),
    theme('colors.secondary.700 / 90%'),
    theme('colors.secondary.800 / 95%')
  );
}
</style>
