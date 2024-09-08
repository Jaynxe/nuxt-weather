<template>
  <UContainer class="max-w-xl py-4">
    <div class="grid grid-cols-2 md:grid-cols-2 gap-2.5 place-items-center">
      <SingleSearchItem
        v-for="(query, index) in queries"
        :key="index"
        :query="query"
        :index="index"
        @delete-query="deleteQuery"
      />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const searchHistoryStore = useSearchHistoryStore();
// 使用计算属性获取所有查询记录
const queries = computed(() => searchHistoryStore.allQueries);

// 删除查询操作
const deleteQuery = (index: number) => {
  searchHistoryStore.deleteQuery(index);
};
</script>
