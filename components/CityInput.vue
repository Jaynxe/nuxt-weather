<template>
  <div class="flex flex-col gap-2 items-center mt-4">
    <div class="city-input max-w-lg w-full flex items-center">
      <UInput
        v-model.trim="city"
        placeholder="city name (北京，beijing)"
        size="lg"
        class="flex-1"
        input-class=" bg-white dark:bg-black"
        @keydown.enter="searchWeather"
      />
      <UButton
        @click="searchWeather"
        icon="iconoir:send-diagonal"
        color="primary"
        size="lg"
        variant="outline"
        class="ml-1"
        :trailing="true"
        :loading="loadingStore.isLoading"
      />
    </div>
    <div
      class="max-w-lg w-full flex justify-end items-center space-x-1 text-gray-500"
    >
      <UIcon
        name="streamline:interface-arrows-bend-down-right-2-arrow-bend-curve-change-direction-down-to-right"
        class="w-4 h-4"
      />
      <UKbd>Enter</UKbd>
    </div>
  </div>
</template>

<script setup lang="ts">
const city = ref("");
const fetchWeather = inject<((cityName: string) => void) | null>(
  "fetchWeather",
  null
);
const emit = defineEmits(["fetchWeather"]);
const loadingStore = useLoadingStore();

const searchWeather = () => {
  loadingStore.setLoading(true);
  if (fetchWeather) {
    fetchWeather(city.value);
  }
};
</script>

<style scoped></style>
