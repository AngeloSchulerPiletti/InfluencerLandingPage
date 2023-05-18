<script lang="ts" setup>
import type { Image } from '@/types/media.types'
import SgLink from '@/components/SgLink.vue'
import SgIcon from '@/components/SgIcon.vue'

export interface Props {
  socialMedias: {
    iconName: string
    link: string
  }[]
  profilePicture: Image
}

const props = defineProps<Props>()
</script>

<template>
  <nav
    class="flex items-center justify-between bg-neutral-50 px-6 py-4 shadow-md"
  >
    <div class="overflow-hidden rounded-full">
      <img
        class="h-16 w-16 object-cover"
        :src="profilePicture.url"
        :alt="profilePicture.alt"
      />
    </div>
    <div class="flex gap-4">
      <SgLink
        :to="socialMedia.link"
        v-for="(socialMedia, index) in socialMedias"
        :key="index"
      >
        <SgIcon
          :name="socialMedia.iconName"
          size="sm"
        />
      </SgLink>
    </div>
  </nav>
</template>
