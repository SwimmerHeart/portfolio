<template>
  <div
    class="glass p-6 group cursor-pointer hover:border-accent/40 transition-all duration-500"
    :style="{
      '--hover-color': project.color
    }"
    @click="$emit('select', project)"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="flex items-start gap-4 mb-4">
      <div
        class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500"
        :style="{
          backgroundColor: isHovered ? project.color + '30' : 'rgba(69, 162, 158, 0.1)'
        }"
      >
        <svg
          class="w-6 h-6 transition-colors duration-500"
          :style="{ color: isHovered ? project.color : '#45A29E' }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path :d="project.icon" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="text-text-primary font-semibold mb-1 group-hover:text-accent transition-colors">
          {{ project.title }}
        </h3>
        <p class="text-text-secondary text-sm">{{ project.shortDesc }}</p>
      </div>
    </div>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tech in project.stack"
        :key="tech"
        class="px-2.5 py-1 text-xs rounded-lg bg-accent/10 text-accent font-mono"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/data/projects'

defineProps<{
  project: Project
}>()

defineEmits<{
  select: [project: Project]
}>()

const isHovered = ref(false)
</script>
