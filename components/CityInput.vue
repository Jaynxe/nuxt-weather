<!-- components/CityInput.vue -->
<template>
    <div class="mb-4">
      <input
        v-model="city"
        type="text"
        placeholder="Enter city name"
        class="border p-2 mr-2"
      />
      <button @click="fetchCityWeather" class="bg-blue-500 text-white p-2">
        Get Weather
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  // 定义城市输入
  const city = ref("");
  
  // 触发父组件中的 fetchWeather 函数
  const emit = defineEmits(["fetchWeather"]);
  function fetchCityWeather() {
    if (city.value) {
      emit("fetchWeather", city.value);
    }
  }
  </script>
  
  <style scoped>
  /* 可以根据需要自定义样式 */
  </style>
  