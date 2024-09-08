// composables/useWeather.ts
export const useGetGDWeather = () => {
  const config = useRuntimeConfig();
  const apiKey = config.public.amapApiKey; // 使用高德地图 API Key
  const toast = useToast();

  // 统一的 toast 消息展示函数
  const showToast = (title: string, description: string = "") => {
    toast.add({
      title,
      description,
      color: "red",
      icon: "tdesign:location-error",
    });
  };

  // 封装 API 调用逻辑
  const fetchGDWeatherData = async (adcode: string): Promise<object | null> => {
    // 校验输入的 adcode
    if (!isValidAdcode(adcode)) {
      showToast("无效的城市代码", "请提供有效的 adcode");
      return null;
    }

    try {
      // 构建 API 请求参数
      const params = {
        city: adcode,
        key: apiKey,
        extensions: "base", // 可选参数：'base' 返回实况天气，'all' 返回预报天气
        output: "JSON",
      };

      // 使用 $fetch 进行 API 调用
      const data = (await $fetch(
        "https://restapi.amap.com/v3/weather/weatherInfo",
        { params }
      )) as any;

      // 检查 API 返回的数据
      if (!isValidWeatherData(data)) {
        showToast("无法解析天气数据", "请检查 API 响应格式");
        return null;
      }

      // 返回天气数据
      return data.lives[0]; // 高德天气 API 返回的实时天气数据在 lives 数组中
    } catch (error: any) {
      handleFetchError(error);
      return null;
    }
  };

  // 验证 adcode
  const isValidAdcode = (adcode: string) => {
    return typeof adcode === "string" && adcode.trim() !== "";
  };

  // 验证天气数据
  const isValidWeatherData = (data: any) => {
    return (
      data &&
      data.status === "1" &&
      Array.isArray(data.lives) &&
      data.lives.length > 0
    );
  };

  // 处理请求错误
  const handleFetchError = (error: any) => {
    console.error("请求天气数据时出错:", error);
    showToast("请求失败，请稍后再试", error.message || "未知错误");
  };

  return {
    fetchGDWeatherData,
  };
};
