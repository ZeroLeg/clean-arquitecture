<script setup lang="ts">
import { useTitleStore } from '@/modules/title/store/index'
import { computed } from 'vue'

const titleStore = useTitleStore()
const allTitles = computed(() => titleStore.titles)
</script>
<template>
  <div>aqui</div>
</template>
