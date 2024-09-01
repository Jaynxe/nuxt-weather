<!-- components/WeatherDisplay.vue -->
<template>
    <div class="weather-display p-4 border rounded">
      <h2 class="text-xl mb-2">{{ weather.name }}</h2>
      <p>Temperature: {{ weather.main.temp }} °C</p>
      <p>Weather: {{ weather.weather[0].description }}</p>
      <p>Humidity: {{ weather.main.humidity }}%</p>
      <p>Wind Speed: {{ weather.wind.speed }} m/s</p>
    </div>
  </template>
  
  <script setup lang="ts">
  // 接收父组件传递的天气数据
  defineProps({
    weather: {
      type: Object,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .weather-display {
    background-color: #f0f8ff;
  }
  </style>
  