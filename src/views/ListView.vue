<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ListTable from '@/modules/title/views/ListTable.vue'

const route = useRoute()
const caseuse = computed(() => route.params.caseuse as string)

const getListCaseUse = () => {
  if (caseuse.value === 'title') {
    return ListTable
  }
}
</script>

<template>
  <component :is="getListCaseUse" />
</template>
