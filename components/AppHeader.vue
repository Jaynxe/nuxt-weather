<script setup lang="ts"></script>

<template>
  <header
    class="app-header sticky top-0 z-10 w-full bg-white dark:bg-black flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800"
  >
    <!-- 左侧 Logo 和标题 -->
    <ULink
      to="/"
      class="flex items-center text-xl font-black bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text"
    >
    ⚡Nuxt-Weather
    </ULink>

    <div class="flex items-center space-x-1">
      <AppNavigation />
      <AppTheme />
      <UButton
        size="xl"
        color="gray"
        variant="ghost"
        icon="mdi-github"
        to="https://github.com/Jaynxe/nuxt-weather"
        target="_blank"
      />
    </div>
  </header>
</template>

<style scoped></style>
