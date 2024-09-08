<script lang="ts" setup></script>

<template>
  <nav class="flex items-center gap-4 text-md mr-4">
    <ULink
      to="/"
      active-class="text-primary"
      inactive-class="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      Home
    </ULink>
    <ULink
      to="/about"
      active-class="text-primary"
      inactive-class="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
    >
      About
    </ULink>
  </nav>
</template>
