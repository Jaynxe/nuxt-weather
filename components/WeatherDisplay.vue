<!-- components/WeatherDisplay.vue -->
<template>
  <UCard
    class="weather-display bg-white dark:bg-black max-w-lg mx-auto mt-4"
    padding="lg"
    bordered
    shadow
  >
    <template #header>
      <h2 class="text-lg font-bold flex items-center">
        <UIcon
          name="noto:cityscape-at-dusk"
          class="w-5 h-5 mr-2 align-middle"
        />
        <span class="city">{{ weather.city }}</span>
      </h2>
    </template>

    <!-- 天气描述 -->
    <div class="grid grid-cols-2 gap-x-6 gap-y-2">
      <div class="flex items-center">
        <UIcon name="ph:cloud-sun" class="w-5 h-5 text-yellow-500 mr-2" />
        <p class="text-sm text-gray-800 dark:text-gray-300">
          属于：
          <span class="font-semibold">{{ weather.weather }}</span>
        </p>
      </div>

      <!-- 省份显示 -->
      <div class="flex items-center">
        <UIcon name="ph:map-pin" class="w-5 h-5 text-red-500 mr-2" />
        <p class="text-sm text-gray-800 dark:text-gray-300">
          省份：
          <span class="font-semibold">{{ weather.province }}</span>
        </p>
      </div>

      <!-- 温度显示 -->
      <div class="flex items-center">
        <UIcon name="ph:thermometer" class="w-5 h-5 text-blue-600 mr-2" />
        <p class="text-sm text-gray-800 dark:text-gray-300">
          温度：
          <span class="font-semibold">{{ weather.temperature }} °C</span>
        </p>
      </div>

      <!-- 风向显示 -->
      <div class="flex items-center">
        <UIcon name="ph:compass" class="w-5 h-5 text-green-500 mr-2" />
        <p class="text-sm text-gray-800 dark:text-gray-300">
          风向：
          <span class="font-semibold">{{ weather.winddirection }}</span>
        </p>
      </div>

      <!-- 风力显示 -->
      <div class="flex items-center">
        <UIcon name="ph:flag" class="w-5 h-5 text-purple-500 mr-2" />
        <p class="text-sm text-gray-800 dark:text-gray-300">
          风力：
          <span class="font-semibold">{{ weather.windpower }}</span>
        </p>
      </div>

      <!-- 湿度显示 -->
      <div class="flex items-center">
        <UIcon name="ph:drop" class="w-5 h-5 text-blue-400 mr-2" />
        <p class="text-sm text-gray-800 dark:text-gray-300">
          湿度：
          <span class="font-semibold">{{ weather.humidity }}%</span>
        </p>
      </div>
    </div>

    <template #footer>
      <div
        class="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400"
      >
        <p>
          更新于：{{ new Date(weather.reporttime).toLocaleString("zh-CN") }}
        </p>
        <p>当前时间：{{ new Date().toLocaleString("zh-CN") }}</p>
      </div>
    </template>
  </UCard>
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

<style scoped></style>
