<script lang="ts" setup>
import SgLink, { type SlotedProps as LinkProps } from '@/components/SgLink.vue'
import SgIcon from '@/components/SgIcon.vue'
import { computed } from 'vue'

export interface Props {
  links: LinkProps[]
  iconName?: string
  darkMode?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  darkMode: false,
})

const getTextClasses = computed(() => {
  const classes = []
  if (props.darkMode) classes.push('text-neutral-50')
  return classes
})
</script>

<template>
  <div>
    <ul class="ml-6 flex flex-col gap-4">
      <li
        v-for="(link, index) in links"
        :key="index"
      >
        <SgLink
          :to="link.to"
          class="flex w-fit items-center gap-4 transition hover:translate-x-1"
          :class="getTextClasses"
        >
          <SgIcon
            v-if="iconName"
            :name="iconName"
            size="sm"
          />
          <span class="text-sm font-light">{{ link.title }}</span>
        </SgLink>
      </li>
    </ul>
  </div>
</template>
