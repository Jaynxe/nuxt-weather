<!-- components/SingleQueryItem.vue -->
<template>
  <div
    @click="viewQuery"
    class="w-60 flex items-center justify-between p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-shadow duration-200 cursor-pointer"
  >
    <div class="flex items-center gap-1 text-gray-800 dark:text-white">
      <UIcon
        name="material-symbols:link"
        class="text-gray-500 dark:text-gray-400 w-5 h-5"
      />
      <span class="text-sm font-medium">{{ query.name }}</span>
    </div>
    <div class="flex items-center gap-1">
      <UButton
        @click.stop="deleteQuery"
        color="red"
        square
        variant="link"
        icon="material-symbols-light:delete-outline-rounded"
        class="w-5 h-5 hover:opacity-100 opacity-0 transition-opacity duration-200"
      />
      <UIcon name="solar:alt-arrow-right-linear" class="w-4 h-4 ml-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
const loadingStore = useLoadingStore();
const fetchWeather = inject<((cityName: string) => void) | null>(
  "fetchWeather"
);

const emit = defineEmits(["delete-query"]);
const props = defineProps({
  query: {
    type: Object as () => { name: string },
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const deleteQuery = () => {
  emit("delete-query", props.index);
};

const viewQuery = () => {
  loadingStore.setLoading(true);
  if (fetchWeather) {
    fetchWeather(props.query.name);
  }
};
</script>
