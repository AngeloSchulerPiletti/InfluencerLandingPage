<script lang="ts" setup>
import SgLink, { type SlotedProps as LinkProps } from '@/components/SgLink.vue'
import SgIcon from './SgIcon.vue'

export interface Props {
  copyright: string
  paragraphs: string[]
  links: LinkProps[]
}

const props = defineProps<Props>()
</script>

<template>
  <footer
    class="wrapper relative flex flex-col items-center gap-16 rounded-t-2xl bg-secondary-900 pb-8 pt-20 text-neutral-50"
  >
    <div
      class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-900 p-4"
    >
      <SgIcon name="share" />
    </div>
    <div class="grid grid-rows-2 gap-7 text-sm md:grid-cols-2 md:grid-rows-1">
      <div class="flex flex-col gap-2">
        <p
          v-for="(paragraph, index) in paragraphs"
          :key="index"
          class="font-light"
        >
          {{ paragraph }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <SgLink
          :to="link.to"
          variant="text"
          apply-styles
          v-for="(link, index) in links"
          :key="index"
          class="w-fit"
        >
          {{ link.title }}
        </SgLink>
      </div>
    </div>
    <span class="font-light">&#169;{{ copyright }}</span>
  </footer>
</template>
