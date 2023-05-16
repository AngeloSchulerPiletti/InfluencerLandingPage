<script lang="ts" setup>
import type { Image } from '@/types/media.types'
import SgIcon from '../SgIcon.vue'
import { computed } from 'vue'

export interface Props {
  frame?: {
    iconName?: string
    paragraph: string
  }
  image: Image
}

const props = defineProps<Props>()

const backgroundImage = computed(() => {
  return `background-image: url('${props.image.url}')`
})
</script>

<template>
  <div
    class="relative overflow-hidden rounded-2xl"
    :styles="backgroundImage"
  >
    <div
      v-if="frame?.iconName"
      class="absolute left-0 top-0"
    >
      <SgIcon
        :name="frame.iconName"
        size="sm"
      />
    </div>
    <div
      v-if="frame"
      class="absolute inset-x-0 bottom-0 p-3"
    >
      <span>{{ frame.paragraph }}</span>
    </div>
  </div>
</template>
