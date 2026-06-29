<template>
  <section id="projects" class="relative">
    <div class="section-container">
      <p class="text-accent font-mono text-sm tracking-widest uppercase mb-2">/ projects</p>
      <h2 class="section-title">Проекты</h2>
      <p class="section-subtitle">Ключевые проекты за 3 года работы</p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @select="openProject"
        />
      </div>
    </div>

    <ProjectModal :project="selectedProject" @close="selectedProject = null" />
  </section>
</template>

<script setup lang="ts">
import { projects } from '@/data/projects'
import type { Project } from '@/data/projects'

const selectedProject = ref<Project | null>(null)

function openProject(project: Project) {
  selectedProject.value = project
}
</script>
