<template>
  <div class="flex w-full">
    <div class="w-110 h-screen bg-black flex overflow-hidden">
      <img
        src="/img/err_page/403.webp"
        class="object-cover"
        draggable="false"
      />
    </div>
    <div class="h-screen pt-36 px-20 flex flex-col justify-between flex-1">
      <div>
        <div class="text-5xl font-bold font-gothic">Lagi Cari Apa, Sayank?</div>
        <div class="mt-8 w-138">
          <p class="text-lg font-medium text-neutral-600">
            Maaf, halaman yang Anda cari mungkin sudah dihapus, dimodifikasi,
            atau sudah dilewati. Coba kembali ke halaman yang paling sesuai dan
            cari yang Anda cari.
          </p>
          <button class="px-6 py-3 bg-neutral-900 text-white text-sm mt-4">
            Go Home
          </button>
        </div>
      </div>
      <div class="mb-4 flex justify-between w-full cursor-default">
        <p class="text-xs text-neutral-600" v-if="!isPlaying">
          © 1997 - 2024 Webmin
        </p>
        <p class="text-xs text-neutral-600" v-else>
          Balik ke home sana tolol, ngapain disini
        </p>
        <p class="text-xs text-neutral-600" v-if="!isPlaying">
          Click
          <span
            class="text-blue-600 cursor-pointer hover:text-blue-800 hover:underline"
            @click="playAudio"
            >Here</span
          >
          to Login to the Webmin Panel
        </p>
        <p class="text-xs text-neutral-600" v-else>
          Woy lah cik, dikira segampang itu. iya iya hackel 😹😹
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
});

const isPlaying = ref(false);

const playAudio = () => {
  const audio = new Audio("./sound/err_page/403.mp3");
  audio.loop = true;
  audio
    .play()
    .then(() => {
      isPlaying.value = true;
    })
    .catch((error) => {
      console.error("Audio playback failed:", error);
    });
};

onMounted(() => {
  playAudio(); // Coba putar audio saat halaman dimuat
});
</script>
