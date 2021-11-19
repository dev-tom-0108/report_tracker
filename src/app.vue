<template>
  <div>
    <header>

    </header>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

useMeta(() => {
  return {
    title: 'Report App',
  };
});
</script>

<style scoped>
h1 {
  font-size: 4rem;
}
</style>
