<template>
  <div class="relative w-full h-screen top-0">
    <div class="absolute z-50 bottom-40 px-36">
      <h1
        :class="[
          ' text-darkGray-100 transition-all duration-500',
          textFocusView ? 'text-2xl font-semibold' : 'text-4xl font-medium',
        ]"
      >
        Demon Slayer: Kimetsu no Yaiba
      </h1>
      <transition-group name="fade" tag="div">
        <div v-show="!isFocusView" class="flex gap-6 mt-1">
          <div class="flex items-center gap-1">
            <Icon
              name="solar:star-bold"
              class="t text-amber-300"
              size="1.2em"
            />
            <span class="text-sm text-darkGray-300">8.45(2,164,023)</span>
          </div>
          <div class="text-darkGray-300 text-sm flex gap-2">
            <span>Spring 2019</span>
            <span>•</span>
            <div class="flex gap-3">
              <span>Action</span>
              <span>Award Winning</span>
              <span>Supernatural</span>
            </div>
          </div>
        </div>
        <div v-show="!isFocusView" class="w-128 mt-3">
          <span class="text-darkGray-200 text-wrap line-clamp-4"
            >Ever since the death of his father, the burden of supporting the
            family has fallen upon Tanjirou Kamado's shoulders. Though living
            impoverished on a remote mountain, the Kamado family are able to
            enjoy a relatively peaceful and happy life. One day, Tanjirou
            decides to go down to the local village to make a little money
            selling charcoal. On his way back, night falls, forcing Tanjirou to
            take shelter in the house of a strange man, who warns him of the
            existence of flesh-eating demons that lurk in the woods at
            night.</span
          >
        </div>
      </transition-group>
      <div class="mt-4 flex gap-2">
        <div
          class="flex items-center gap-3 py-3 px-6 w-fit bg-primary-600 rounded-lg cursor-pointer hover:bg-primary-700 transition-all"
        >
          <Icon
            name="solar:play-circle-bold"
            size="1.6em"
            class="text-darkGray-200"
          />
          <span class="text-darkGray-200 font-medium">Play Now</span>
        </div>
        <div
          class="flex items-center gap-3 py-3 px-6 w-fit bg-transparent rounded-lg cursor-pointer hover:bg-darkGray-950 hover:bg-opacity-30 hover:backdrop-blur-lg transition-all"
        >
          <Icon
            name="solar:bookmark-outline"
            size="1.6em"
            class="text-darkGray-200"
          />
          <span class="text-darkGray-200 font-medium">Add Watchlist</span>
        </div>
      </div>
    </div>
    <div>
      <PartialsIndexHeroBg />
    </div>
    <div class="absolute z-10 bottom-16 w-full">
      <PartialsIndexHeroGradientBlack />
    </div>
  </div>
</template>

<script lang="ts" setup>
let isFocusView = ref(false);
let textFocusView = ref(false);

onMounted(() => {
  setTimeout(() => {
    isFocusView.value = true;
  }, 1000);
  setTimeout(() => {
    textFocusView.value = true;
  }, 2000);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(
    -10px
  ); /* Membuat elemen sedikit naik/turun saat muncul/hilang */
}
</style>
