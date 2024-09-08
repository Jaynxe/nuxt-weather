// 根据城市查找adcode
export const useGetAdcode = () => {
    const config = useRuntimeConfig();
    const apiKey = config.public.amapApiKey; // 在 nuxt.config.ts 中配置高德 API Key
  
    const toast = useToast();
    const adcode = ref<string | null>(null);
  
    // 统一的 toast 消息展示
    const showToast = (title: string, description: string = "") => {
      toast.add({
        title,
        description,
        color: "red",
        icon: "tdesign:location-error",
      });
    };
  
    const fetchAdcode = async (address: string) => {
      if (!address) {
        showToast("地址不能为空", "请提供有效的地址");
        return null;
      }
  
      try {
        // 使用 $fetch 调用高德地图 Geocoding API
        const data:any = await $fetch('https://restapi.amap.com/v3/geocode/geo', {
          params: {
            key: apiKey,
            address: address,
          },
        });
  
        // 检查返回结果
        if (data.status !== '1' || !Array.isArray(data.geocodes) || data.geocodes.length === 0) {
          showToast("未找到匹配的地址", "请检查输入的地址是否正确");
          return null;
        }
  
        // 提取 adcode
        const { adcode: code } = data.geocodes[0];
        if (!code) {
          showToast("无法解析 adcode 数据");
          return null;
        }
  
        adcode.value = code;
        return adcode.value;
      } catch (error: any) {
        console.error("获取地理编码数据时出错:", error);
        showToast("获取地理编码数据时出错", error.message || "未知错误");
        adcode.value = null;
        return null;
      }
    };
  
    return {
      fetchAdcode,
    };
  };
  