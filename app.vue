<template>
  <div :class="[backgroundColorStore.pageColor, 'min-h-screen']">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useBackgroundColorStore } from "./stores/backgroundColor";
const backgroundColorStore = useBackgroundColorStore();
</script>
