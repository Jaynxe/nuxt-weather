<template>
  <UContainer class="p-6 mx-auto">
    <div class="app-title text-center mb-6 mt-12">
      <h3
        class="flex items-center justify-center gap-2 text-2xl font-bold text-gray-800 dark:text-white"
      >
        <UIcon
          name="ph:magnifying-glass"
          class="w-6 h-6 text-gray-700 dark:text-white"
        />
        <span>Nuxt Weather</span>
      </h3>
      <p class="text-gray-500 dark:text-gray-400 mt-2">
        <span>Please enter a city name to lookup</span>
      </p>
    </div>

    <CityInput />

    <template v-if="isDataFetched">
      <WeatherDisplay :weather="weather" v-if="weather" />
      <SearchHistory v-else />
    </template>
  </UContainer>
</template>

<script setup lang="ts">
const weather = ref<object | null>(null);
const isDataFetched = ref(false);
onMounted(() => {
  isDataFetched.value = true;
});
const searchHistoryStore = useSearchHistoryStore();
const loadingStore = useLoadingStore();

const { fetchAdcode } = useGetAdcode();
const { fetchGDWeatherData } = useGetGDWeather();
const fetchWeather = async (city: string) => {
  if (!city) {
    window.location.reload(); // 如果城市为空则刷新页面
    loadingStore.setLoading(false);
    return;
  }

  const adcode = await fetchAdcode(city);
  isDataFetched.value = true;
  if (adcode) {
    const weatherData = await fetchGDWeatherData(adcode);
    weather.value = weatherData;
    loadingStore.setLoading(false);

    searchHistoryStore.addQuery({ name: city });
  }
};
provide("fetchWeather", fetchWeather);
</script>
