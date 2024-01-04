<template>
  <div class="hero">
    <div class="hero__container">
      <Swiper
        class="carousel"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
        :slides-per-view="1"
        :loop="false"
        :space-between="100"
      >
        <SwiperSlide v-for="slide in 3" :key="slide">
          <div class="carousel__item">
            <NuxtImg class="carousel__item-img" src="/img/slider.png" />
            <div class="carousel__info">
              <h2 class="carousel__title">
                <span> Stan Smith,</span> <span>Forever!</span>
              </h2>
              <button class="carousel__btn">Купить</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperControls />
      </Swiper>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
@import "./block-hero.scss";
</style>
