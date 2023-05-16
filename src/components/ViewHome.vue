<script lang="ts" setup>
import SectionNavigation, {
  type Props as NavigationProps,
} from '@/components/SectionNavigation.vue'
import SectionIntro, {
  type Props as IntroProps,
} from '@/components/SectionIntro.vue'

export interface Props {
  navigation: NavigationProps
  intro: IntroProps
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <SectionNavigation v-bind="navigation" />
  </div>
  <main>
    <SectionIntro v-bind="intro" />
  </main>
</template>
