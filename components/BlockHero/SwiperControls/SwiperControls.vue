<template>
  <div class="carousel__btns">
    <UButton
      class="carousel__prev"
      @click="swiper.slidePrev()"
      color="empty"
      variant="empty"
      icon="i-material-symbols-arrow-forward-ios-rounded"
    ></UButton>
    <UButton
      class="carousel__next"
      @click="swiper.slideNext()"
      color="empty"
      variant="empty"
      icon="i-material-symbols-arrow-forward-ios-rounded"
    ></UButton>
  </div>
</template>

<script setup>
const swiper = useSwiper();
</script>

<style></style>
