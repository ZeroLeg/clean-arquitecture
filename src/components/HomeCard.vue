<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

interface iCard {
  title: string
  to: Object
}
defineProps<{
  card: iCard
}>()

const router = useRouter()
</script>
<template>
  <v-card :title="card.title" color="primary" @click="router.push(card.to)"></v-card>
</template>
