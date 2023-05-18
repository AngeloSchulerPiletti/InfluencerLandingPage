<script lang="ts" setup>
import SectionNavigation, {
  type Props as NavigationProps,
} from '@/components/SectionNavigation.vue'
import SectionIntro, {
  type Props as IntroProps,
} from '@/components/SectionIntro.vue'
import SectionContent, {
  type Props as ContentProps,
} from '@/components/SectionContent.vue'
import SectionContentCenter, {
  type Props as ContentCenterProps,
} from '@/components/SectionContentCenter.vue'

export interface Props {
  navigation: NavigationProps
  intro: IntroProps
  content: ContentProps
  contentCenter: ContentCenterProps
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <div>
      <SectionNavigation v-bind="navigation" />
    </div>
    <main>
      <SectionIntro v-bind="intro" />
      <SectionContent v-bind="content" />
      <SectionContentCenter v-bind="contentCenter" />
    </main>
  </div>
</template>
