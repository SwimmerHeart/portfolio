<template>
  <div ref="el" class="glass p-6">
    <div class="grid grid-cols-3 gap-4 text-center">
      <div v-for="(stat, idx) in stats" :key="idx">
        <div class="text-3xl font-bold accent-gradient mb-1">
          {{ stat.prefix }}{{ animatedValues[idx] }}
        </div>
        <p class="text-text-secondary text-xs uppercase tracking-wider">{{ stat.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { skillCategories } from '@/data/skills'

const el = ref<HTMLElement | null>(null)

const stats = [
  { value: 3, label: 'Года опыта', prefix: '' },
  { value: 6, label: 'Проектов', prefix: '' },
  { value: skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0), label: 'Технологий', prefix: '' }
]

const animatedValues = ref(stats.map(() => 0))
const animationStarted = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting && !animationStarted.value) {
        animationStarted.value = true
        stats.forEach((stat, index) => animateValue(index, stat.value))
        observer.disconnect()
      }
    },
    { threshold: 0.5 }
  )
  if (el.value) observer.observe(el.value)
  onUnmounted(() => observer.disconnect())
})

function animateValue(index: number, target: number) {
  const duration = 1500
  const steps = 30
  const increment = target / steps
  let current = 0
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      animatedValues.value[index] = target
      clearInterval(timer)
    } else {
      animatedValues.value[index] = Math.floor(current)
    }
  }, duration / steps)
}
</script>
