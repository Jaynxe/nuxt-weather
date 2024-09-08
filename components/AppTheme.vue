<script setup lang="ts">
const colorMode = useColorMode();
function onClick() {
  const values = ["system", "light", "dark"];
  const index = values.indexOf(colorMode.preference);
  const next = (index + 1) % values.length;

  colorMode.preference = values[next];
}
</script>

<template>
  <UButton size="lg" color="gray" variant="ghost" @click="onClick">
    <ColorScheme tag="span">
      <UIcon
        v-if="colorMode.preference === 'dark'"
        name="i-heroicons-moon-20-solid"
        class="w-5 h-5"
      />
      <UIcon
        v-else-if="colorMode.preference === 'light'"
        name="i-heroicons-sun-20-solid"
        class="w-5 h-5"
      />
      <UIcon
        v-else
        name="i-heroicons-computer-desktop-20-solid"
        class="w-5 h-5"
      />
    </ColorScheme>
  </UButton>
</template>
