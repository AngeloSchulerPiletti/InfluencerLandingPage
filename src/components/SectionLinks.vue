<script lang="ts" setup>
import SgLinkList, {
  type Props as LinkListProps,
} from '@/components/SgLinkList.vue'
import SgTextContent, {
  type Props as TextContentProps,
} from '@/components/SgTextContent.vue'

export interface Props {
  textContent: TextContentProps
  linkList: LinkListProps
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-8 bg-secondary-900 py-8">
    <div>
      <SgTextContent
        v-bind="textContent"
        class="wrapper"
      />
    </div>
    <div>
      <SgLinkList v-bind="linkList" />
    </div>
  </div>
</template>
