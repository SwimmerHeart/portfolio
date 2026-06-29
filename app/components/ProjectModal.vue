<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="project"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="$emit('close')"
      >
        <div class="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div class="relative glass max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
          <button
            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
            @click="$emit('close')"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="flex items-center gap-3 mb-6">
            <div
              class="w-10 h-10 rounded-lg flex items-center justify-center"
              :style="{ backgroundColor: project.color + '20' }"
            >
              <svg class="w-5 h-5" :style="{ color: project.color }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path :d="project.icon" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-text-primary">{{ project.title }}</h2>
          </div>

          <div class="space-y-6">
            <div>
              <p class="text-accent font-mono text-xs tracking-widest uppercase mb-1">Задача</p>
              <p class="text-text-secondary leading-relaxed">{{ project.problem }}</p>
            </div>
            <div>
              <p class="text-accent font-mono text-xs tracking-widest uppercase mb-1">Решение</p>
              <p class="text-text-secondary leading-relaxed">{{ project.solution }}</p>
            </div>
            <div>
              <p class="text-accent font-mono text-xs tracking-widest uppercase mb-1">Результат</p>
              <p class="text-text-secondary leading-relaxed">{{ project.result }}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 mt-6 pt-6 border-t border-accent/10">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="px-3 py-1.5 text-sm rounded-lg bg-accent/10 text-accent font-mono"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { Project } from '@/data/projects'

defineProps<{
  project: Project | null
}>()

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-active > div:last-child,
.modal-leave-active > div:last-child {
  transition: transform 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child {
  transform: scale(0.95);
}
</style>
