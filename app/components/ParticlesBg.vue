<template>
  <ClientOnly>
    <VueParticles id="tsparticles" :options="particlesOptions" class="fixed inset-0 -z-10" />
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const particlesOptions = computed(() => ({
  fpsLimit: 60,
  particles: {
    number: { value: 80, density: { enable: true } },
    value: colorMode.value === 'dark' ? '#45A29E' : '#4A5568',
    links: {
      enable: true,
      color: colorMode.value === 'dark' ? '#45A29E' : '#4A5568',
      opacity: colorMode.value === 'dark' ? 0.15 : 0.65,
      distance: 150,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: false,
      straight: false,
      outModes: { default: 'bounce' }
    },
    size: { value: { min: 1, max: 3 } },
    opacity: { value: 0.3 }
  },
  interactivity: {
    events: {
      onHover: { enable: false, mode: 'grab' }
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.5 } }
    }
  },
  background: {
    color: colorMode.value === 'dark' ? '#0B0C10' : '#E8EAED '
  }
}))
</script>
