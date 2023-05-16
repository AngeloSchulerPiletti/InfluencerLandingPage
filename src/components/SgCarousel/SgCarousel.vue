<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
//@ts-ignore
import { Mousewheel, FreeMode } from 'swiper'
//@ts-ignore
import type { FreeModeOptions, SwiperOptions } from 'swiper/types'
import SgCarouselCard, {
  type Props as CardProps,
} from '@/components/SgCarousel/SgCarouselCard.vue'
import { computed } from 'vue'

export interface Props {
  carouselCards: CardProps[]
  from?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  from: 'right',
})

const breakpoints: SwiperOptions['breakpoints'] = {
  1: {
    slidesPerView: 1,
    spaceBetween: 16,
  },
  744: {
    slidesPerView: 2,
    spaceBetween: 24,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
}

const getInitialSlide = computed(() =>
  props.from === 'left' ? props.carouselCards.length - 1 : 0
)

const modules = [Mousewheel, FreeMode]

const freeMode: FreeModeOptions = {
  enabled: true,
}
</script>

<template>
  <div>
    <Swiper
      class="!px-10"
      :breakpoints="breakpoints"
      :modules="modules"
      :initial-slide="getInitialSlide"
      :free-mode="freeMode"
      :pagination="{ clickable: true }"
      :mousewheel="{
        forceToAxis: true,
      }"
    >
      <SwiperSlide
        v-for="(card, index) in carouselCards"
        :key="index"
      >
        <SgCarouselCard
          v-bind="card"
          class="h-[280px]"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
