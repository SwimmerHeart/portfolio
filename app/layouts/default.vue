<template>
  <div>
    <ParticlesBg />
    <ThemeToggle />
    <slot />
    <footer class="text-center py-8 text-text-secondary text-sm border-t border-accent/10">
      <div class="section-container py-8">
        <p>&copy; {{ new Date().getFullYear() }} Сергей Кириллов. Все права защищены.</p>
      </div>
    </footer>
  </div>
</template>
