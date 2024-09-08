<script lang="ts" setup>
useSeoMeta({
  title: "Nuxt Weather",
  description: "An API for retrieving current weather data.",
});
</script>
<template>
  <div class="bg-white dark:bg-black">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>
<style>
/* 定义过渡效果 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from, .page-leave-to /* .page-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
