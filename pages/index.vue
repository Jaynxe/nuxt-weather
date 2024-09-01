<!-- pages/index.vue -->
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl mb-4">Weather App</h1>
    <CityInput @fetchWeather="fetchWeather" />
    <WeatherDisplay :weather="weather" v-if="weather" />
    <p v-if="error" class="text-red-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CityInput from "~/components/CityInput.vue";
import WeatherDisplay from "~/components/WeatherDisplay.vue";

// 初始化变量
const weather = ref(null);
const config = useRuntimeConfig();
const apiKey = config.public.openWeatherApiKey;
const error = ref("");

// 根据城市名称获取天气
async function fetchWeather(city: string) {
  try {
    // 通过 Geocoding API 获取经纬度
    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    );
    const geoData = await geoResponse.json();

    if (geoData.length === 0) {
      throw new Error("City not found");
    }

    const { lat, lon } = geoData[0];

    // 使用经纬度获取天气数据
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&lang=zh_cn`
    );
    if (!weatherResponse.ok) {
      throw new Error(`Error fetching weather data: ${weatherResponse.status}`);
    }
    weather.value = await weatherResponse.json();
    error.value = "";
  } catch (err: any) {
    console.error("Error fetching weather:", err);
    error.value = err.message;
    weather.value = null;
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}
</style>
