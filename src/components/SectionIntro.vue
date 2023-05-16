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
  <div class="flex flex-col gap-10 py-7">
    <SgTextContent v-bind="textContent" />
    <SgCarousel v-bind="carousel" />
  </div>
</template>
