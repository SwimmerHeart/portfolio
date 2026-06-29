<template>
  <div ref="el" :style="{ transform: `translateY(${offset}px)` }" class="will-change-transform">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  speed?: number
}>(), {
  speed: 0.15
})

const el = ref<HTMLElement | null>(null)
const offset = ref(0)

watchEffect(() => {
  if (!el.value) return;

  const rect = el.value.getBoundingClientRect();
  const viewportCenter = window.innerHeight / 2;
  const elementCenter = rect.top + rect.height / 2;
  
  offset.value = (elementCenter - viewportCenter) * props.speed;
});
</script>
