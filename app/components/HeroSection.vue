<template>
  <section ref="heroEl" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="text-center px-6 relative z-10 parallax-content" :style="contentStyle">
      <div class="mb-8 flex justify-center">
        <div class="w-32 h-32 rounded-full border-2 border-accent/30 overflow-hidden bg-surface/80 flex items-center justify-center">
          <img
            v-if="photoLoaded"
            src="/photo.jpg"
            alt="Фото"
            class="w-full h-full object-cover"
            @error="photoLoaded = false"
          >
          <svg v-else class="w-16 h-16 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>

      <p class="text-accent font-mono text-sm tracking-widest uppercase mb-3">
        Frontend-разработчик
      </p>

      <h1 class="text-4xl md:text-6xl font-bold text-text-primary mb-4 leading-tight">
        <span class="accent-gradient">Сергей Кириллов</span>
      </h1>

      <p class="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
        3 года коммерческого опыта в разработке SPA, UI-kit, дашбордов<br class="hidden md:block">
        и инструментов на Vue 3, TypeScript и Nuxt
      </p>

      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          class="px-8 py-3 bg-accent text-background font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300"
        >
          Проекты
        </a>
        <a
          href="#contact"
          class="px-8 py-3 border border-accent/30 text-accent font-semibold rounded-xl hover:bg-accent/10 transition-all duration-300"
        >
          Связаться
        </a>
      </div>
    </div>

    <div
      class="absolute inset-0 pointer-events-none parallax-bg"
      :style="bgStyle"
    >
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
    </div>
  </section>
</template>

<script setup lang="ts">
const heroEl = ref<HTMLElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)
const photoLoaded = ref(true)

onMounted(() => {
  const onMouse = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20
    const y = (e.clientY / window.innerHeight - 0.5) * 20
    mouseX.value = x
    mouseY.value = y
  }
  window.addEventListener('mousemove', onMouse)
  onUnmounted(() => window.removeEventListener('mousemove', onMouse))
})

const contentStyle = computed(() => ({
  transform: `translate(${mouseX.value * -0.5}px, ${mouseY.value * -0.5}px)`
}))

const bgStyle = computed(() => ({
  transform: `translate(${mouseX.value}px, ${mouseY.value}px)`
}))
</script>
