<template>
  <section id="skills" class="relative">
    <div class="section-container">
      <p class="text-accent font-mono text-sm tracking-widest uppercase mb-2">/ skills</p>
      <h2 class="section-title">Навыки</h2>
      <p class="section-subtitle">Технологии и инструменты</p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="category in skillCategories"
          :key="category.title"
          class="glass p-6"
        >
          <h3 class="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">
            {{ category.title }}
          </h3>
          <div class="flex flex-wrap gap-3">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-colors"
            >
              <Icon v-if="skill.icon" :name="skill.icon" class="w-5 h-5" />
              <span class="text-text-secondary text-sm">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillCategories } from '@/data/skills'
</script>
