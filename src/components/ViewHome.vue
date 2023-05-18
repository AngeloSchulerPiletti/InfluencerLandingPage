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

export interface Props {
  navigation: NavigationProps
  intro: IntroProps
  content: ContentProps
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-10">
    <div>
      <SectionNavigation v-bind="navigation" />
    </div>
    <main>
      <SectionIntro v-bind="intro" />
      <SectionContent v-bind="content" />
    </main>
  </div>
</template>
