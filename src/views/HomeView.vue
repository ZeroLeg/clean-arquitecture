<script setup lang="ts">
import { reactive } from 'vue'
import HomeCard from '@/components/HomeCard.vue'

const cards = reactive([
  {
    title: 'Title',
    to: { name: 'list', params: { caseuse: 'title' } }
  }
])
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index">
        <HomeCard :card="card" />
      </v-col>
    </v-row>
  </v-container>
</template>
