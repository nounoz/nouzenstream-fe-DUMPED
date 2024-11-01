<template>
  <div>
    <h1 class="text-2xl font-bold">{{ data }}</h1>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
const data = ref<any>(null);

onMounted(async () => {
  try {
    const response = await axios.get("/api/data");
    data.value = response.data;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
});
</script>
