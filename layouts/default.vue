<template>
  <div>
    <nav class="fixed z-[99999] left-0 top-0 w-screen">
      <NavDesktop class="absolute z-10" />
      <div class="absolute top-0 z-0 w-full h-20 bg-nav"></div>
    </nav>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.bg-nav {
  background: rgb(0, 0, 0);
  background: -moz-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7028187984178047) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7028187984178047) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7028187984178047) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
}
</style>
