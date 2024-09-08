<script lang="ts" setup>
useSeoMeta({
  title: "About - Nuxt Weather",
  description: "Learn more about our weather API.",
});
</script>

<template>
  <UContainer class="container mx-auto px-6 py-8 relative">
    <div class="mx-auto max-w-2xl p-8 rounded-lg space-y-8 relative">
      <!-- 页面标题 -->
      <section
        class="flex flex-col items-center justify-center space-y-2 text-center"
      >
        <h1 class="text-5xl font-extrabold mb-2">关于</h1>
        <p
          class="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm"
        >
          <UIcon
            name="material-symbols:alarm-outline-rounded"
            class="w-4 h-4"
          />
          <time datetime="2024-01-20"> 2024年09月6日 星期五</time>
        </p>
      </section>

      <!-- 项目简介 -->
      <section class="text-left">
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong class="text-xl text-green-500 dark:text-green-400"
            >Nuxt Weather</strong
          >
          是一个基于 Nuxt 3 构建的简单天气应用。它使用 高德天气API
          获取实时天气信息，并展示城市的温度、湿度、风速、气压和天气描述等详细数据。
        </p>
      </section>

      <!-- 主要功能 -->
      <section class="text-left">
        <h2
          class="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3"
        >
          <UIcon
            name="carbon:list-boxes"
            class="text-green-500 dark:text-green-400 w-6 h-6 mr-2"
          />
          主要功能
        </h2>
        <ul
          class="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2 pl-6 border-l-4 border-green-500 dark:border-green-400 bg-gray-50 dark:bg-gray-900 p-4 rounded-md shadow-md"
        >
          <li>通过中国城市名称获取当前天气数据</li>
          <li>展示温度、湿度、风速、风向等信息</li>
        </ul>
      </section>

      <!-- 技术栈 -->
      <section class="text-left">
        <h2
          class="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3"
        >
          <UIcon
            name="carbon:chip"
            class="text-purple-500 dark:text-purple-400 w-6 h-6 mr-2"
          />
          技术栈
        </h2>
        <ul
          class="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2 pl-6 border-l-4 border-purple-500 dark:border-purple-400 bg-gray-50 dark:bg-gray-900 p-4 rounded-md shadow-md"
        >
          <li>Nuxt 3 和 Vue 3</li>
          <li>Nuxt UI 和 Tailwind CSS 用于样式设计</li>
          <li>高德天气API用于获取天气数据</li>
        </ul>
      </section>

      <!-- 未来特性 -->
      <section class="text-left">
        <h2
          class="flex items-center text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3"
        >
          <UIcon
            name="carbon:rocket"
            class="text-orange-500 dark:text-orange-400 w-6 h-6 mr-2"
          />
          未来特性
        </h2>
        <ul
          class="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2 pl-6 border-l-4 border-orange-500 dark:border-orange-400 bg-gray-50 dark:bg-gray-900 p-4 rounded-md shadow-md"
        >
          <li>支持天气预报功能</li>
          <li>集成更多气象数据源</li>
        </ul>
      </section>
    </div>
  </UContainer>
</template>

<style scoped></style>
