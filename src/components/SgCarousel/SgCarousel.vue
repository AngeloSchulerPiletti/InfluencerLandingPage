<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
//@ts-ignore
import { Mousewheel, FreeMode } from 'swiper'
import { type FreeModeOptions, type SwiperOptions } from 'swiper/types'
import SgCarouselCard, {
  type Props as CardProps,
} from '@/components/SgCarousel/SgCarouselCard.vue'

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
    spaceBetween: 8,
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

const modules = [Mousewheel, FreeMode]

const freeMode: FreeModeOptions = {
  enabled: true,
}
</script>

<template>
  <div>
    <Swiper
      :breakpoints="breakpoints"
      :modules="modules"
      :free-mode="freeMode"
      :pagination="{ clickable: true }"
      :mousewheel="{
        forceToAxis: true,
      }"
    >
      <SwiperSlide
        v-for="(card, index) in carouselCards"
        :key="index"
        class="!h-auto"
      >
        <SgCarouselCard v-bind="card" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
