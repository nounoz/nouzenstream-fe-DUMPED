<template>
  <div class="flex justify-between relative items-center ml-20 mr-16 pt-3">
    <div class="w-fit">
      <nouzenLogo class="w-auto h-3" :fontControlled="false" />
    </div>
    <div class="absolute -mt-4 w-full flex justify-center">
      <div class="flex">
        <nuxt-link to="">
          <div class="py-2 px-4">
            <span class="text-darkGray-100 font-semibold">Home</span>
          </div>
        </nuxt-link>
        <nuxt-link to="">
          <div class="py-2 px-4">
            <span class="text-darkGray-300 font-medium">Genre</span>
          </div>
        </nuxt-link>
        <nuxt-link to="">
          <div class="py-2 px-4">
            <span class="text-darkGray-300 font-medium">Season</span>
          </div>
        </nuxt-link>
        <nuxt-link to="">
          <div class="py-2 px-4">
            <span class="text-darkGray-300 font-medium">Trending</span>
          </div>
        </nuxt-link>
        <nuxt-link to="">
          <div class="py-2 px-4">
            <span class="text-darkGray-300 font-medium">Movies</span>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="flex items-center gap-6">
      <div class="flex gap-2">
        <div class="p-2 flex items-center">
          <Icon
            name="solar:magnifer-linear"
            size="1.5em"
            class="text-darkGray-100 custom-icon"
            mode="svg"
          />
        </div>
        <div class="p-2 flex items-center">
          <Icon
            name="solar:bell-linear"
            size="1.5em"
            class="text-darkGray-100"
          />
        </div>
      </div>
      <div class="flex items-center gap-1">
        <div class="rounded-full w-11 h-11 overflow-hidden">
          <img src="/users/pfp/tester.png" class="object-cover w-full h-full" />
        </div>
        <Icon
          name="solar:alt-arrow-down-outline"
          size="1.6em"
          class="text-darkGray-100"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import nouzenLogo from "~/assets/logo/text-color.svg";
</script>

<style scoped>
.custom-icon path {
  stroke-width: 2;
  stroke: white;
}
</style>
