<template>
  <section id="about" class="relative">
    <div class="section-container">
      <p class="text-accent font-mono text-sm tracking-widest uppercase mb-2">/ about</p>
      <h2 class="section-title">Обо мне</h2>
      <p class="section-subtitle">Коротко о главном</p>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div class="glass p-8">
          <p class="text-text-secondary leading-relaxed mb-6">
            Frontend-разработчик с 3+ годами коммерческого опыта в крупной корпорации.
            Специализируюсь на экосистеме Vue (Vue 3, Nuxt, TypeScript).
          </p>
          <p class="text-text-secondary leading-relaxed mb-6">
            Работал над блокчейн-проектами, BI-системами, системами документооборота
            и аналитическими платформами. Участвовал в миграции масштабной кодовой
            базы с Vue 2 на Vue 3 с внедрением полной типизации TypeScript.
          </p>
          <p class="text-text-secondary leading-relaxed">
            Помимо фронтенда разрабатывал бэкенд на Node.js (Fastify) для мониторинга
            Docker-кластеров. Интересуюсь архитектурой приложений, производительностью
            и UI/UX.
          </p>
        </div>

        <div class="space-y-4">
          <div class="glass p-6 flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p class="text-text-primary font-semibold">Отраслевой центр разработок и внедрения информационных систем / ОЦРВ</p>
              <p class="text-text-secondary text-sm">Инженер-программист, Июнь 2023 — сейчас</p>
            </div>
          </div>

          <StatsBar />
        </div>
      </div>
    </div>
  </section>
</template>
