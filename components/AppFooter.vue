<template>
  <footer
    class="fixed bottom-0 w-full z-10 bg-white dark:bg-black py-2 flex justify-center items-center"
  >
    <p class="text-sm mr-2">
      {{ new Date().getFullYear() }}&copy; Powered by
      <span>&nbsp;|&nbsp;</span>
      <ULink
        to="https://github.com/Jaynxe/nuxt-weather"
        target="_blank"
        class="underline font-semibold"
      >
        Nuxt Weather
      </ULink>
    </p>
    <UBadge label="v0.0.1" variant="solid" />
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
