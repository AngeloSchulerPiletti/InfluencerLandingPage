<script lang="ts" setup>
import SgCarousel, {
  type Props as CarouselProps,
} from '@/components/SgCarousel/SgCarousel.vue'
import SgIcon from '@/components/SgIcon.vue'
import SgTextContent, {
  type Props as TextContentProps,
} from '@/components/SgTextContent.vue'

export interface Props {
  iconName: string
  textContent: TextContentProps
  carousel: CarouselProps
}

const props = defineProps<Props>()
</script>

<template>
  <div class="relative mt-10 flex flex-col gap-10 bg-secondary-900 pb-10 pt-14">
    <div
      class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-50 p-4"
    >
      <div class="rounded-full bg-secondary-900 p-2">
        <SgIcon
          :name="iconName"
          size="md"
          class="text-neutral-50"
        />
      </div>
    </div>
    <div>
      <SgTextContent v-bind="textContent" />
    </div>
    <div>
      <SgCarousel v-bind="carousel" />
    </div>
  </div>
</template>
