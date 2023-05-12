<script setup lang="ts">
import AdvisorySection from '@/components/sections/AdvisorySection.vue'
import type ContactSection from '@/components/sections/ContactSection.vue'
import ContentSection from '@/components/sections/ContentSection.vue'
import IntroSection from '@/components/sections/IntroSection.vue'
import type MembershipSection from '@/components/sections/MembershipSection.vue'
import type SupportSection from '@/components/sections/SupportSection.vue'
</script>

<template>
  <main>
    <IntroSection />
    <ContentSection />
    <AdvisorySection />
    <MembershipSection />
    <SupportSection />
    <ContactSection />
  </main>
</template>
