// stores/searchHistory.ts
import { defineStore } from "pinia";

interface SearchQuery {
  name: string;
}

export const useSearchHistoryStore = defineStore("searchHistory", {
  state: () => ({
    queries: [] as SearchQuery[],
  }),
  actions: {
    // 添加新的查询记录或将重复项移到前面
    addQuery(query: SearchQuery) {
      const existingIndex = this.queries.findIndex(
        (q) => q.name === query.name
      );

      if (existingIndex !== -1) {
        // 如果已经存在该查询，将它移到数组前面
        this.queries.splice(existingIndex, 1);
        this.queries.unshift(query);
      } else {
        // 否则，直接添加到数组前面
        this.queries.unshift(query);
      }
    },
    // 删除指定的查询记录
    deleteQuery(index: number) {
      this.queries.splice(index, 1);
    },
    // 清空所有查询记录
    clearQueries() {
      this.queries = [];
    },
  },

  getters: {
    // 获取所有查询记录
    allQueries: (state) => state.queries,
  },
  persist: true,
});
