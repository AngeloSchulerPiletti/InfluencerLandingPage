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
    class="relative flex flex-col items-center gap-8 bg-secondary-900 pb-8 pt-20"
  >
    <div
      class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-50 p-4"
    >
      <div class="rounded-full bg-secondary-900 p-4">
        <SgIcon name="share" />
      </div>
    </div>
    <div class="flex gap-7 text-sm max-md:flex-col">
      <div class="flex flex-col gap-2">
        <p
          v-for="(paragraph, index) in paragraphs"
          :key="index"
        >
          {{ paragraph }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <SgLink
          :to="link.to"
          variant="text"
          v-for="(link, index) in links"
          :key="index"
        >
          {{ link.title }}
        </SgLink>
      </div>
    </div>
    <span>&#169;{{ copyright }}</span>
  </footer>
</template>
