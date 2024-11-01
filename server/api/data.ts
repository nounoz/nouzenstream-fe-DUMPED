export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const backendUrl = config.backendUrl + "/data" || "";
  const backendKey = config.backendKey || "";
  try {
    const response = await $fetch(backendUrl, {
      method: "GET",
      headers: {
        "X-API-KEY": backendKey,
      },
    });

    return response;
  } catch (error) {
    return {
      status: 500,
      error: "failed to communicate with backend",
      message: error,
    };
  }
});
